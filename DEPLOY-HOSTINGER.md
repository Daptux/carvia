# Despliegue en Hostinger (App web Node.js)

Guía para desplegar **AutoHub AI** (Next.js) en Hostinger usando la integración con GitHub.

## Requisitos

- Repositorio en GitHub: `Daptux/carvia` (privado).
- Plan de Hostinger con **App web Node.js** habilitado.
- Node.js **20 o superior** en el panel de Hostinger.

## Pasos en el panel de Hostinger

1. Entra a **hPanel → Sitios web → Crear / Añadir → App web Node.js**.
2. Elige **Implementar mediante integración con GitHub**.
3. Autoriza tu cuenta de GitHub y selecciona el repositorio **`Daptux/carvia`**, rama **`main`**.
4. Configura la aplicación:
   - **Versión de Node.js:** 20.x (o superior).
   - **Comando de instalación:** `npm install`
   - **Comando de compilación (build):** `npm run build`
   - **Comando de inicio (start):** `npm start`
   - **Directorio raíz:** `/` (la raíz del repo).
5. Guarda y lanza el despliegue.

## Notas importantes

- **Puerto:** Next.js (`next start`) usa automáticamente la variable de entorno `PORT`
  que asigna Hostinger. No hay que configurar nada manualmente.
- **Variables de entorno:** cuando integremos IA, base de datos, etc., se agregan en
  el panel de Hostinger (sección *Variables de entorno*), nunca en el código. El
  archivo `.env` está ignorado por git a propósito.
- **Auto-deploy:** con la integración de GitHub, cada `git push` a `main` puede
  redeployar automáticamente (según la configuración del panel).

## Verificación local antes de subir

```bash
npm install
npm run build
npm start        # abre http://localhost:3000
```

## Estructura actual

- `app/` — páginas y layout (App Router de Next.js).
- `docs/` — brief inicial del producto.
- `public/` — estáticos.
