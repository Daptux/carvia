"use client";

import { useState } from "react";
import { categorias, marcas, Categoria } from "@/lib/vehiculos";

export default function SearchHero() {
  const [tab, setTab] = useState<Categoria>("carros");

  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Fondo tipo malla de gradientes */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(45%_55%_at_15%_0%,color-mix(in_srgb,var(--brand)_20%,transparent),transparent),radial-gradient(45%_55%_at_85%_10%,color-mix(in_srgb,var(--accent)_16%,transparent),transparent)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent,var(--background))]" />

      <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-muted">
          🇨🇴 Colombia · Sin comisiones · Potenciado por IA
        </span>
        <h1 className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          ¿Qué carro o moto quieres{" "}
          <span className="bg-gradient-to-r from-brand to-accent bg-clip-text text-transparent">
            comprar
          </span>
          ?
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-muted">
          Compra, vende e intercambia vehículos. Publica gratis y conoce el
          precio justo con nuestra IA de valoración.
        </p>

        {/* Buscador */}
        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-border bg-background p-4 text-left shadow-xl shadow-brand/5 sm:p-5">
          {/* Pestañas de categoría */}
          <div className="flex flex-wrap gap-2">
            {categorias.map((c) => (
              <button
                key={c.id}
                onClick={() => setTab(c.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  tab === c.id
                    ? "bg-brand text-white"
                    : "bg-surface text-muted hover:text-foreground"
                }`}
              >
                <span className="mr-1">{c.icon}</span>
                {c.label}
              </button>
            ))}
          </div>

          {/* Filtros */}
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <label className="flex flex-col gap-1 text-xs font-medium text-muted">
              Marca
              <select className="rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-foreground">
                <option value="">Todas</option>
                {marcas.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1 text-xs font-medium text-muted">
              Modelo
              <input
                placeholder="Ej: Corolla"
                className="rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-foreground placeholder:text-muted/60"
              />
            </label>
            <label className="flex flex-col gap-1 text-xs font-medium text-muted">
              Precio hasta
              <select className="rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-foreground">
                <option value="">Sin límite</option>
                <option>$ 30.000.000</option>
                <option>$ 60.000.000</option>
                <option>$ 100.000.000</option>
                <option>$ 200.000.000</option>
              </select>
            </label>
            <label className="flex flex-col gap-1 text-xs font-medium text-muted">
              Año desde
              <select className="rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-foreground">
                <option value="">Cualquiera</option>
                {[2024, 2022, 2020, 2018, 2015].map((y) => (
                  <option key={y}>{y}</option>
                ))}
              </select>
            </label>
          </div>

          {/* Extras + botón */}
          <div className="mt-4 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-4 text-sm text-muted">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-brand" /> Permuta
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-brand" /> Promoción
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-brand" /> Blindaje
              </label>
            </div>
            <button className="rounded-full bg-brand px-8 py-3 font-semibold text-white transition hover:bg-brand-strong">
              🔍 Encontrar mi vehículo
            </button>
          </div>
        </div>

        {/* Barra de confianza */}
        <dl className="mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-4">
          {[
            { n: "0%", l: "Comisiones" },
            { n: "+120", l: "Marcas" },
            { n: "24/7", l: "Asesor IA" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <dt className="text-2xl font-extrabold text-foreground sm:text-3xl">
                {s.n}
              </dt>
              <dd className="text-xs text-muted sm:text-sm">{s.l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
