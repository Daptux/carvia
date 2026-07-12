const cols = [
  {
    title: "Vehículos",
    items: ["Carros y camionetas", "Motos", "Camiones", "Otros"],
  },
  {
    title: "Servicios",
    items: ["Seguros", "Financiación", "Tramitadores", "Peritajes"],
  },
  {
    title: "AutoHub AI",
    items: ["Cómo funciona", "Valoración con IA", "Vender gratis", "Noticias"],
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-surface/50">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="flex items-center gap-2 text-lg font-bold">
              <span className="text-2xl">🚗</span> AutoHub{" "}
              <span className="text-brand">AI</span>
            </span>
            <p className="mt-3 text-sm text-muted">
              La forma más inteligente de comprar, vender e intercambiar
              vehículos en Colombia.
            </p>
            <p className="mt-4 text-sm text-muted">📞 +57 300 000 0000</p>
            <p className="text-sm text-muted">✉️ hola@autohub.ai</p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold">{c.title}</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {c.items.map((i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-foreground">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted sm:flex-row">
          <span>© 2026 AutoHub AI · Colombia</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground">
              Términos y condiciones
            </a>
            <a href="#" className="hover:text-foreground">
              Privacidad
            </a>
            <a href="#" className="hover:text-foreground">
              PQRS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
