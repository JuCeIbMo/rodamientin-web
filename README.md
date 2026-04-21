# Rodamientin — Website

Sitio web de Rodamientin (rodamientos automotrices en Tarija, Bolivia).

**Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS v4

## Rutas

- `/` — Home (hero, categorías, productos destacados)
- `/catalogo` — Búsqueda y filtro por categoría
- `/sucursales` — Horarios y ubicaciones

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
npm start
```

## Docker

Build y correr con Docker:

```bash
docker build -t rodamientin-web .
docker run -p 3000:3000 rodamientin-web
```

O con Docker Compose:

```bash
docker compose up --build
```

La imagen usa el output `standalone` de Next.js — final ~150MB sobre `node:20-alpine`.

## Estructura

```
app/                 rutas (App Router)
components/          componentes React (Header, Footer, ProductCard, etc.)
lib/products.ts      catálogo + tipos
public/              assets (logos, favicon)
```

## Deploy

- **Vercel:** conectá el repo en vercel.com (detecta Next.js automáticamente)
- **Docker:** el `Dockerfile` corre en cualquier host (Fly.io, Railway, Render, VPS, etc.)
