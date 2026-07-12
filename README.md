# 🚗 AutoHub AI

La forma más inteligente de comprar, vender e intercambiar vehículos en Colombia.

Plataforma digital que centraliza compra, venta e intercambio de vehículos en un
solo lugar, apoyada por Inteligencia Artificial. Este repositorio contiene el
MVP web construido con **Next.js**.

## Stack

- **Framework:** Next.js 16 (App Router) + React 19
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS v4
- **Hosting objetivo:** Hostinger (App web Node.js)

## Desarrollo local

```bash
npm install
npm run dev     # http://localhost:3000
```

## Build de producción

```bash
npm run build
npm start
```

## Despliegue

Ver [DEPLOY-HOSTINGER.md](./DEPLOY-HOSTINGER.md) para el despliegue en Hostinger
mediante la integración con GitHub.

## Estructura

- `app/` — páginas, layout y estilos globales (App Router).
- `public/` — archivos estáticos.
- `docs/` — brief inicial del producto (`brief-inicial.txt`).

## Roadmap (siguiente)

- [ ] Autenticación de usuarios (registro / login).
- [ ] Publicación de vehículos con carga de fotos.
- [ ] Marketplace con búsqueda y filtros.
- [ ] IA de valoración de precio.
- [ ] Chat interno comprador ↔ vendedor.
