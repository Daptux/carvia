import {
  Vehiculo,
  formatoCOP,
  formatoKm,
  cuotaMensual,
} from "@/lib/vehiculos";

export default function VehicleCard({ v }: { v: Vehiculo }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-background transition hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/5">
      {/* Banner (placeholder hasta tener fotos reales) */}
      <div
        className="relative flex h-44 items-center justify-center"
        style={{
          background: `linear-gradient(135deg, ${v.color}, color-mix(in srgb, ${v.color} 55%, black))`,
        }}
      >
        <span className="text-5xl drop-shadow">🚗</span>
        <span className="absolute left-3 top-3 rounded-md bg-black/40 px-2 py-1 text-xs font-medium text-white backdrop-blur">
          {v.marca}
        </span>
        <div className="absolute right-3 top-3 flex gap-1">
          {v.destacado && (
            <span className="rounded-md bg-amber-400 px-2 py-1 text-xs font-bold text-black">
              ⭐ Destacado
            </span>
          )}
          {v.permuta && (
            <span className="rounded-md bg-white/90 px-2 py-1 text-xs font-semibold text-black">
              🔄 Permuta
            </span>
          )}
        </div>
      </div>

      {/* Contenido */}
      <div className="p-4">
        <h3 className="line-clamp-1 font-semibold" title={v.titulo}>
          {v.titulo}
        </h3>
        <p className="mt-1 text-xl font-extrabold text-brand">
          {formatoCOP(v.precio)}
        </p>
        <p className="mt-1 text-sm text-muted">
          {v.anio} · {formatoKm(v.km)}
        </p>
        <p className="mt-2 flex flex-wrap gap-x-2 gap-y-1 text-xs text-muted">
          <span>📍 {v.ciudad}</span>
          <span>· {v.combustible}</span>
          <span>· {v.transmision}</span>
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
          <div className="text-xs text-muted">
            Cuota aprox.
            <span className="ml-1 font-semibold text-foreground">
              {cuotaMensual(v.precio)}/mes
            </span>
          </div>
          <button className="rounded-full bg-brand/10 px-3 py-1.5 text-xs font-semibold text-brand transition group-hover:bg-brand group-hover:text-white">
            Ver
          </button>
        </div>
      </div>
    </article>
  );
}
