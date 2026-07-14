"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Inicio", href: "#" },
  { label: "Vehículos", href: "#vehiculos" },
  { label: "Categorías", href: "#categorias" },
  { label: "Servicios", href: "#servicios" },
  { label: "Noticias", href: "#noticias" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        {/* Marca */}
        <Link href="#" className="flex shrink-0 items-center gap-2 text-lg font-bold">
          <span className="text-2xl">🚗</span>
          AutoHub <span className="text-brand">AI</span>
        </Link>

        {/* Links desktop */}
        <div className="hidden items-center gap-7 text-sm font-medium text-muted lg:flex">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-foreground">
              {l.label}
            </a>
          ))}
        </div>

        {/* Acciones */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#login"
            className="hidden rounded-full px-4 py-2 text-sm font-semibold text-foreground hover:bg-surface sm:block"
          >
            Ingresar
          </a>
          <a
            href="#vender"
            className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-strong"
          >
            Vender gratis
          </a>
          <button
            aria-label="Menú"
            onClick={() => setOpen((o) => !o)}
            className="rounded-lg p-2 text-xl lg:hidden"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      {open && (
        <div className="border-t border-border bg-background px-4 py-3 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted hover:bg-surface hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#login"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted hover:bg-surface hover:text-foreground sm:hidden"
            >
              Ingresar
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
