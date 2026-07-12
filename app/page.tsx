import SearchHero from "./components/SearchHero";
import VehicleCard from "./components/VehicleCard";
import {
  vehiculos,
  categorias,
  combustibles,
  marcas,
} from "@/lib/vehiculos";

export default function Home() {
  const destacados = vehiculos.filter((v) => v.destacado);
  const promociones = vehiculos.filter((v) => v.promocion);

  return (
    <>
      <SearchHero />

      {/* Categorías */}
      <section id="categorias" className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold sm:text-3xl">Explora por categoría</h2>
        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {categorias.map((c) => (
            <a
              key={c.id}
              href="#vehiculos"
              className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface/50 p-8 text-center transition hover:-translate-y-1 hover:border-brand hover:shadow-lg hover:shadow-brand/5"
            >
              <span className="text-4xl">{c.icon}</span>
              <span className="font-semibold">{c.label}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Destacados */}
      <section id="vehiculos" className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              Lo más visto de la semana
            </h2>
            <p className="mt-1 text-muted">Los vehículos con más interés.</p>
          </div>
          <a href="#vehiculos" className="text-sm font-semibold text-brand hover:underline">
            Ver todos →
          </a>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destacados.map((v) => (
            <VehicleCard key={v.id} v={v} />
          ))}
        </div>
      </section>

      {/* Franja IA (diferenciador AutoHub AI) */}
      <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid items-center gap-8 rounded-3xl border border-border bg-gradient-to-br from-brand to-brand-strong p-8 text-white sm:p-12 lg:grid-cols-2">
          <div>
            <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
              🤖 Exclusivo AutoHub AI
            </span>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
              ¿Cuánto vale tu vehículo? La IA te lo dice en segundos.
            </h2>
            <p className="mt-3 text-white/80">
              Sube tus fotos y nuestra Inteligencia Artificial estima el precio
              mínimo, recomendado y máximo, además del tiempo estimado de venta.
            </p>
            <a
              href="#vender"
              className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-semibold text-brand transition hover:bg-white/90"
            >
              Valorar mi vehículo gratis
            </a>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              { k: "Precio mínimo", v: "$ 88M" },
              { k: "Recomendado", v: "$ 94M" },
              { k: "Precio máximo", v: "$ 99M" },
            ].map((s) => (
              <div key={s.k} className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                <p className="text-lg font-extrabold sm:text-2xl">{s.v}</p>
                <p className="mt-1 text-xs text-white/70">{s.k}</p>
              </div>
            ))}
            <div className="col-span-3 rounded-2xl bg-white/10 p-4 text-sm text-white/80 backdrop-blur">
              ⏱️ Tiempo estimado de venta: <b>18 días</b>
            </div>
          </div>
        </div>
      </section>

      {/* Promociones */}
      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold sm:text-3xl">Vehículos en promoción</h2>
          <a href="#vehiculos" className="text-sm font-semibold text-brand hover:underline">
            Ver todos →
          </a>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {promociones.map((v) => (
            <VehicleCard key={v.id} v={v} />
          ))}
        </div>
      </section>

      {/* Marcas + combustible */}
      <section id="servicios" className="border-t border-border bg-surface/50">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">Marcas aliadas</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {marcas.map((m) => (
              <a
                key={m}
                href="#vehiculos"
                className="rounded-xl border border-border bg-background px-5 py-3 text-sm font-medium text-muted transition hover:border-brand hover:text-foreground"
              >
                {m}
              </a>
            ))}
          </div>

          <h2 className="mt-12 text-2xl font-bold sm:text-3xl">
            Busca por combustible
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {combustibles.map((c) => (
              <a
                key={c.label}
                href="#vehiculos"
                className="flex items-center gap-3 rounded-2xl border border-border bg-background p-5 transition hover:border-brand"
              >
                <span className="text-2xl">{c.icon}</span>
                <span className="font-semibold">{c.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Noticias */}
      <section id="noticias" className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold sm:text-3xl">Noticias y guías</h2>
        <p className="mt-1 text-muted">
          Todo lo que necesitas saber para comprar y vender con confianza.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Cómo evitar estafas al comprar un carro usado", c: "Seguridad" },
            { t: "Levantamiento de prenda: cómo hacerlo y cuánto cuesta", c: "Trámites" },
            { t: "Impuesto vehicular 2026: tarifas y fechas clave", c: "Impuestos" },
          ].map((n) => (
            <a
              key={n.t}
              href="#"
              className="overflow-hidden rounded-2xl border border-border transition hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/5"
            >
              <div className="h-36 bg-gradient-to-br from-brand/20 to-accent/20" />
              <div className="p-5">
                <span className="text-xs font-semibold text-brand">{n.c}</span>
                <h3 className="mt-2 font-semibold">{n.t}</h3>
                <span className="mt-3 inline-block text-sm text-muted">
                  Leer más →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section id="vender" className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6">
        <div className="rounded-3xl border border-border bg-surface/50 px-6 py-14 text-center">
          <h2 className="text-2xl font-bold sm:text-4xl">
            Publica tu vehículo gratis y sin comisiones
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Miles de compradores te esperan. Crea tu cuenta, publica en minutos y
            deja que la IA te ayude a vender más rápido.
          </p>
          <a
            href="#login"
            className="mt-8 inline-block rounded-full bg-brand px-8 py-3.5 font-semibold text-white transition hover:bg-brand-strong"
          >
            Publicar ahora — es gratis
          </a>
        </div>
      </section>
    </>
  );
}
