import Link from "next/link";

const valueProps = [
  { icon: "🚀", title: "Publica GRATIS", text: "Publicar vehículos siempre será gratuito, sin límites ni letras pequeñas." },
  { icon: "🤖", title: "Valoración con IA", text: "La IA estima el precio mínimo, recomendado y máximo de tu vehículo." },
  { icon: "🔄", title: "Intercambio inteligente", text: "Acepta un vehículo como parte de pago y calcula la diferencia automáticamente." },
  { icon: "💬", title: "Chat interno", text: "Negocia directo con compradores y vendedores, con ayuda de IA." },
  { icon: "⚖️", title: "Asesoría legal", text: "Tramitadores certificados y calculadora de traspasos, impuestos y notaría." },
  { icon: "🛡️", title: "Seguro y transparente", text: "Identidad verificada, calificaciones e historial de cada usuario." },
];

const features = [
  { title: "Marketplace", items: ["Compra y venta", "Intercambio", "Nuevos y usados", "Motos y camionetas", "Vehículos comerciales"] },
  { title: "IA de valoración", items: ["Marca, modelo y año", "Kilometraje y versión", "Oferta y demanda", "Tiempo estimado de venta", "Tips para vender más rápido"] },
  { title: "Publicación inteligente", items: ["Sube fotos", "Detecta marca y modelo", "Genera la descripción", "Sugiere el precio ideal", "Calcula probabilidad de venta"] },
  { title: "Calculadora legal", items: ["Valor del traspaso", "Impuestos y tránsito", "Costos notariales", "Levantamiento de prenda", "Cambio de propietario"] },
  { title: "Servicios automotrices", items: ["Talleres y peritos", "Aseguradoras", "Financiamiento", "GPS y grúas", "Centros de diagnóstico"] },
  { title: "Asesor IA", items: ["¿Cuánto vale mi carro?", "¿Es buen momento de vender?", "¿Cuánto cuesta el traspaso?", "¿Qué documentos necesito?", "¿Qué oferta acepto?"] },
];

const revenue = [
  "Anuncios destacados",
  "Publicidad de marcas",
  "Comisión por tramitadores",
  "Comisión por financiamiento",
  "Comisión por seguros",
  "Comisión por peritajes",
  "Firma electrónica",
  "Plan premium concesionarios",
  "Plan premium tramitadores",
  "API para empresas",
  "Reporte premium del vehículo",
  "Marketplace de accesorios",
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-full">
      {/* Nav */}
      <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="flex items-center gap-2 text-lg font-bold">
            <span className="text-2xl">🚗</span> AutoHub <span className="text-brand">AI</span>
          </span>
          <div className="hidden gap-8 text-sm text-muted sm:flex">
            <a href="#valor" className="hover:text-foreground">Propuesta</a>
            <a href="#funciones" className="hover:text-foreground">Funciones</a>
            <a href="#negocio" className="hover:text-foreground">Modelo</a>
          </div>
          <Link
            href="#valor"
            className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-strong"
          >
            Empezar gratis
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,color-mix(in_srgb,var(--brand)_22%,transparent),transparent)]" />
        <div className="mx-auto max-w-6xl px-6 py-24 text-center sm:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-muted">
            🇨🇴 Hecho para Colombia · Potenciado por IA
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            La forma más inteligente de{" "}
            <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
              comprar, vender e intercambiar
            </span>{" "}
            vehículos
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            Un solo ecosistema donde compradores, vendedores, tramitadores y
            aseguradoras interactúan de forma segura, transparente y apoyada por
            Inteligencia Artificial.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#valor"
              className="w-full rounded-full bg-brand px-8 py-3.5 font-semibold text-white transition hover:bg-brand-strong sm:w-auto"
            >
              Publicar mi vehículo gratis
            </Link>
            <a
              href="#funciones"
              className="w-full rounded-full border border-border px-8 py-3.5 font-semibold transition hover:bg-surface sm:w-auto"
            >
              Ver cómo funciona
            </a>
          </div>
          <p className="mt-4 text-sm text-muted">
            Sin costo de publicación · Registro gratuito · Valoración con IA
          </p>
        </div>
      </section>

      {/* Propuesta de valor */}
      <section id="valor" className="border-t border-border bg-surface/50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Todo el proceso, en un solo lugar
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
            No es solo un portal de clasificados: es un ecosistema completo.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {valueProps.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-background p-6 transition hover:shadow-lg hover:shadow-brand/5"
              >
                <div className="text-3xl">{v.icon}</div>
                <h3 className="mt-4 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section id="funciones" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          Funcionalidades de la plataforma
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
          Diseñadas para que cualquier persona pueda vender o comprar sin salir
          de AutoHub AI.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border p-6">
              <h3 className="text-lg font-semibold text-brand">{f.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {f.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 text-brand">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Modelo de negocio */}
      <section id="negocio" className="border-t border-border bg-surface/50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            Gratis para el usuario, rentable como negocio
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
            La publicación siempre es gratuita. El negocio monetiza mediante
            servicios de valor agregado.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {revenue.map((r) => (
              <span
                key={r}
                className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted"
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-brand to-brand-strong px-8 py-16 text-center text-white">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Convierte la venta de tu vehículo en algo simple
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Únete a la plataforma que digitaliza todo el proceso: valoración,
            trámites, legal y pago, con IA de tu lado.
          </p>
          <Link
            href="#valor"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 font-semibold text-brand transition hover:bg-white/90"
          >
            Empezar ahora — es gratis
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted sm:flex-row">
          <span className="flex items-center gap-2 font-semibold text-foreground">
            <span>🚗</span> AutoHub AI
          </span>
          <span>© 2026 AutoHub AI · Colombia</span>
        </div>
      </footer>
    </div>
  );
}
