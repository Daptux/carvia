-- ============================================================
-- AutoHub AI — Esquema inicial de la base de datos (Supabase / PostgreSQL)
-- Pega este archivo completo en: Supabase → SQL Editor → New query → Run
-- ============================================================

-- ---------- PERFILES (extiende auth.users) ----------
create table if not exists public.perfiles (
  id           uuid primary key references auth.users(id) on delete cascade,
  nombre       text,
  telefono     text,
  ciudad       text,
  avatar_url   text,
  verificado   boolean not null default false,
  calificacion numeric(2,1) default 0,
  creado_en    timestamptz not null default now()
);

alter table public.perfiles enable row level security;

create policy "Perfiles visibles para todos"
  on public.perfiles for select using (true);

create policy "El usuario edita su propio perfil"
  on public.perfiles for update using (auth.uid() = id);

-- Crea el perfil automáticamente al registrarse un usuario
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.perfiles (id, nombre)
  values (new.id, new.raw_user_meta_data->>'nombre');
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------- VEHÍCULOS ----------
create table if not exists public.vehiculos (
  id           uuid primary key default gen_random_uuid(),
  owner_id     uuid not null references public.perfiles(id) on delete cascade,
  titulo       text not null,
  marca        text not null,
  modelo       text,
  categoria    text not null default 'carros'
                 check (categoria in ('carros','motos','camiones','otros')),
  precio       bigint not null,
  anio         int not null,
  km           int not null default 0,
  ciudad       text not null,
  combustible  text not null default 'Gasolina'
                 check (combustible in ('Gasolina','Diesel','Híbrido','Eléctrico','Gas')),
  transmision  text not null default 'Mecánica'
                 check (transmision in ('Automática','Mecánica')),
  descripcion  text,
  estado       text not null default 'activo'
                 check (estado in ('activo','vendido','pausado')),
  destacado    boolean not null default false,
  promocion    boolean not null default false,
  permuta      boolean not null default false,
  vistas       int not null default 0,
  creado_en    timestamptz not null default now()
);

create index if not exists vehiculos_estado_idx on public.vehiculos (estado);
create index if not exists vehiculos_marca_idx  on public.vehiculos (marca);
create index if not exists vehiculos_owner_idx  on public.vehiculos (owner_id);

alter table public.vehiculos enable row level security;

create policy "Vehículos activos visibles para todos"
  on public.vehiculos for select
  using (estado = 'activo' or auth.uid() = owner_id);

create policy "El dueño publica sus vehículos"
  on public.vehiculos for insert with check (auth.uid() = owner_id);

create policy "El dueño edita sus vehículos"
  on public.vehiculos for update using (auth.uid() = owner_id);

create policy "El dueño borra sus vehículos"
  on public.vehiculos for delete using (auth.uid() = owner_id);

-- ---------- FOTOS DE VEHÍCULOS ----------
create table if not exists public.vehiculo_fotos (
  id          uuid primary key default gen_random_uuid(),
  vehiculo_id uuid not null references public.vehiculos(id) on delete cascade,
  url         text not null,
  orden       int not null default 0
);

alter table public.vehiculo_fotos enable row level security;

create policy "Fotos visibles para todos"
  on public.vehiculo_fotos for select using (true);

create policy "El dueño gestiona las fotos de su vehículo"
  on public.vehiculo_fotos for all
  using (
    exists (
      select 1 from public.vehiculos v
      where v.id = vehiculo_id and v.owner_id = auth.uid()
    )
  );

-- ---------- FAVORITOS ----------
create table if not exists public.favoritos (
  user_id     uuid not null references public.perfiles(id) on delete cascade,
  vehiculo_id uuid not null references public.vehiculos(id) on delete cascade,
  creado_en   timestamptz not null default now(),
  primary key (user_id, vehiculo_id)
);

alter table public.favoritos enable row level security;

create policy "El usuario gestiona sus favoritos"
  on public.favoritos for all using (auth.uid() = user_id);

-- ---------- STORAGE: bucket público para fotos de vehículos ----------
insert into storage.buckets (id, name, public)
values ('vehiculos', 'vehiculos', true)
on conflict (id) do nothing;

create policy "Fotos de vehículos: lectura pública"
  on storage.objects for select
  using (bucket_id = 'vehiculos');

create policy "Fotos de vehículos: subida autenticada"
  on storage.objects for insert to authenticated
  with check (bucket_id = 'vehiculos');

create policy "Fotos de vehículos: el dueño borra sus archivos"
  on storage.objects for delete to authenticated
  using (bucket_id = 'vehiculos' and owner = auth.uid());
