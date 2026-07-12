# Configuración de Supabase (backend de AutoHub AI)

Supabase aporta 3 cosas al proyecto: **autenticación** (login), **base de datos**
(PostgreSQL) y **almacenamiento** de fotos. La app en Hostinger se conecta a él por
internet.

Estos pasos los realizas **tú** (implican crear cuenta y manejar llaves privadas).

## 1. Crear el proyecto

1. Entra a https://supabase.com y crea una cuenta (o inicia sesión).
2. **New project** → nombre `autohub-ai`, define una contraseña de base de datos
   (guárdala) y elige la región más cercana (ej. *East US* o *South America*).
3. Espera 1–2 minutos a que se aprovisione.

## 2. Crear las tablas

1. En el panel de Supabase ve a **SQL Editor → New query**.
2. Abre el archivo [`supabase/schema.sql`](./supabase/schema.sql) de este repo,
   copia **todo** su contenido y pégalo.
3. Clic en **Run**. Debe decir *Success*. Esto crea las tablas (perfiles,
   vehículos, fotos, favoritos), la seguridad por filas y el bucket de fotos.

## 3. Obtener las llaves

1. Ve a **Settings → API**.
2. Copia:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** (en *Project API keys*) → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 4. Configurar las variables de entorno

### En local (para desarrollo)

1. Copia `.env.example` como `.env.local`.
2. Pega tus valores reales. (`.env.local` está ignorado por git; no se sube.)

### En Hostinger (para producción)

En el panel de la App Node.js → sección **Variables de entorno**, agrega:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 5. Configurar autenticación (cuando construyamos el login)

1. **Authentication → Providers → Email**: déjalo habilitado.
2. Para pruebas rápidas, en **Authentication → Providers → Email** puedes
   desactivar "Confirm email" temporalmente.
3. **Authentication → URL Configuration**: agrega la URL de tu sitio (local
   `http://localhost:3000` y la de Hostinger) en *Site URL* y *Redirect URLs*.

---

Cuando tengas hechos los pasos 1–4, avísame y conectamos la app a datos reales:
login, publicación de vehículos con fotos y el marketplace funcionando de verdad.
