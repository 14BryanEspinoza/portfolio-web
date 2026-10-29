# Bryan Espinoza | Portafolio Web

[![Deploy](https://github.com/14BryanEspinoza/portfolio-web/actions/workflows/deploy.yml/badge.svg)](https://github.com/14BryanEspinoza/portfolio-web/actions/workflows/deploy.yml)
[![CI](https://github.com/14BryanEspinoza/portfolio-web/actions/workflows/ci.yml/badge.svg)](https://github.com/14BryanEspinoza/portfolio-web/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Portafolio personal de **Bryan Espinoza**, desarrollador frontend. Presenta proyectos web, perfil profesional, tecnologías, trayectoria y canales de contacto en una experiencia estática, adaptable y accesible.

![Vista previa del portafolio](public/og-image.png)

---

## Demo

**Sitio publicado:** <https://14bryanespinoza.is-a.dev/>

---

## Inicio rápido

### Requisitos

- **Node.js:** `^22.22.3 || ^24.16.0 || >=26.3.0`.
- **pnpm:** `11.21.0` (versión declarada en `package.json`).

### Instalación y desarrollo

```bash
pnpm install
pnpm dev
```

El servidor local de Astro estará disponible normalmente en <http://localhost:4321/>.

### Verificaciones y build

```bash
pnpm check         # Verificación de Astro y TypeScript
pnpm lint          # ESLint
pnpm format:check  # Comprobar formato con Prettier
pnpm build         # Generar el sitio estático en dist/
pnpm preview       # Previsualizar el build de producción
```

Para aplicar correcciones automáticas de lint o formato:

```bash
pnpm lint:fix
pnpm format
```

`pnpm preview` sirve el build existente; ejecuta `pnpm build` antes de usarlo.

---

## Secciones del sitio

La página principal (`/`) organiza el portfolio en estas secciones:

| Sección     | Contenido                                                                                                               |
| ----------- | ----------------------------------------------------------------------------------------------------------------------- |
| Inicio      | Presentación de Bryan, especialidad frontend, enlaces de acción, retrato y texto animado.                               |
| Proyectos   | Cuatro proyectos ordenados por su campo `order`, con imagen, descripción, tecnologías y enlaces a demo y código fuente. |
| Sobre mí    | Motivación, objetivos e información personal/profesional.                                                               |
| Stack       | Tecnologías y herramientas agrupadas en Frontend, Herramientas, Backend, Database, Calidad e IA, con nivel indicado.    |
| Trayectoria | Formación y experiencia desde 2020, con enlace a la constancia de Mentors International.                                |
| Contacto    | Correo, WhatsApp, redes sociales y formulario de mensaje.                                                               |

La navegación incluye anclas a las secciones y un enlace para descargar el CV (`public/bryan-espinoza-cv.pdf`). También está disponible la constancia de Mentors International (`public/mentors.pdf`).

### Proyectos destacados

| Proyecto  | Descripción                                                                                                       | Tecnologías / temas                                | Demo                                                                                                                    |
| --------- | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Nica Page | Guía turística de Nicaragua con cinco secciones de contenido modeladas mediante Content Collections y TypeScript. | Astro, Tailwind CSS, TypeScript, Collections       | [Ver demo](https://14bryanespinoza.github.io/nica-page/) · [Repositorio](https://github.com/14bryanespinoza/nica-page/) |
| Deli Hots | Landing y pedidos de restaurante, catálogo desde una API REST, carrusel e islands de Astro.                       | Astro, Tailwind CSS, TypeScript, API REST, Islands | [Ver demo](https://14bryanespinoza.github.io/deli-hots/) · [Repositorio](https://github.com/14bryanespinoza/deli-hots/) |
| Podia     | Recreación de un challenge con foco en rendimiento, imágenes AVIF/WebP y sin fuentes externas.                    | Astro, Tailwind CSS, TypeScript                    | [Ver demo](https://14bryanespinoza.github.io/podia/) · [Repositorio](https://github.com/14bryanespinoza/podia/)         |
| Ableton   | Recreación responsive de un challenge de Frontend Practice, con optimización de assets y fuentes.                 | Astro, Tailwind CSS, TypeScript                    | [Ver demo](https://14bryanespinoza.github.io/ableton/) · [Repositorio](https://github.com/14bryanespinoza/ableton/)     |

Los datos de cada proyecto viven en `src/content/projects/` y se ordenan numéricamente. Cada entrada define título, descripción, imagen, texto alternativo, temas, demo y repositorio.

---

## Tecnologías

### Aplicación

- **Astro 7** para generar páginas estáticas (SSG), componer layouts y gestionar contenido.
- **TypeScript** con la configuración estricta de Astro.
- **Tailwind CSS 4** integrado mediante `@tailwindcss/vite`, con tokens de diseño CSS-first.
- **Vite** como herramienta de desarrollo y build, integrada a través de Astro.
- **astro-icon**, con los conjuntos Lucide y Simple Icons.
- **Sharp** como servicio de imágenes de Astro.
- **@astrojs/sitemap** para generar el sitemap del sitio.

### Herramientas de desarrollo

- ESLint 10 con plugins para Astro y Tailwind CSS.
- Prettier 3 con plugins para Astro y Tailwind CSS.
- Husky para preparar hooks de Git; `lint-staged` está disponible como dependencia.
- pnpm como gestor de paquetes.

Las versiones completas y rangos de dependencias se mantienen en `package.json` y `pnpm-lock.yaml`.

### Stack que se muestra en el portfolio

Los niveles de dominio de esta lista son los que aparecen en la interfaz del sitio.

| Área         | Tecnologías y nivel mostrado                                                                                                                             |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Frontend     | HTML5 (Avanzado), CSS3 (Avanzado), JavaScript (Intermedio), TypeScript (Intermedio), Tailwind CSS (Intermedio), Astro (Intermedio), React (Principiante) |
| Herramientas | Git (Intermedio), GitHub (Intermedio), pnpm (Intermedio), Vite (Principiante)                                                                            |
| Backend      | Node.js (Principiante), Express (Principiante)                                                                                                           |
| Database     | PostgreSQL (Principiante), SQLite (Principiante)                                                                                                         |
| Calidad      | ESLint (Intermedio), Prettier (Intermedio)                                                                                                               |
| IA           | Antigravity (Intermedio), OpenCode (Intermedio), Warp Terminal (Intermedio)                                                                              |

---

## Funcionalidades y calidad

- **Contenido tipado:** la colección `projects` lee archivos Markdown/MDX con `glob` y valida el frontmatter mediante Zod. Se requieren `order`, `title`, `description`, `image`, `imageAlt`, `topic` y enlaces `demo`/`repo` con formato URL válido.
- **Imágenes optimizadas:** los assets de contenido se procesan con `astro:assets` y Sharp. La portada utiliza `<Picture />` con formatos AVIF y WebP; los ajustes de AVIF, WebP, JPEG y PNG están declarados en la configuración de Astro.
- **SEO:** título, descripción, keywords, canonical, Open Graph, tarjeta de Twitter, favicon y metadatos de autor. Se incluye JSON-LD `Person`, sitemap y `robots.txt`.
- **Diseño responsive:** navegación móvil y de escritorio, secciones y tarjetas ajustadas a distintos anchos de pantalla.
- **Accesibilidad:** idioma del documento en español, enlace para saltar al contenido, navegación móvil con botón y atributos ARIA, etiquetas y textos alternativos, estados anunciados del formulario, foco visible y respeto a `prefers-reduced-motion`.
- **Navegación mejorada:** desplazamiento suave hacia las secciones y soporte de View Transitions del navegador cuando está disponible, con alternativa para movimiento reducido.
- **Formulario:** validación nativa del navegador y envío mediante [FormSubmit](https://formsubmit.co/) al correo de contacto. Este servicio es externo; el proyecto no implementa un backend propio para recibir mensajes.
- **Contacto:** correo `14bryespinoza@gmail.com`, WhatsApp `+505 82693769`, LinkedIn, GitHub, Facebook y X.

---

## Estructura del proyecto

```text
.
├── public/
│   ├── bryan-espinoza-cv.pdf
│   ├── favicon.png
│   ├── mentors.pdf
│   ├── og-image.png
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   ├── Bryan.jpeg
│   │   └── imágenes de los cuatro proyectos
│   ├── components/
│   │   ├── Badged.astro
│   │   ├── BadgedCard.astro
│   │   ├── BadgedTech.astro
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   ├── ContainerTech.astro
│   │   ├── ContainerText.astro
│   │   ├── CTA.astro
│   │   ├── Goals.astro
│   │   ├── Info.astro
│   │   ├── Input.astro
│   │   ├── JsonLd.astro
│   │   ├── Link.astro
│   │   ├── Motivation.astro
│   │   ├── Section.astro
│   │   ├── TitleTech.astro
│   │   └── Typewriter.astro
│   ├── content/projects/     # Entradas Markdown de proyectos
│   ├── data/                 # Enlaces, stack y trayectoria
│   ├── layouts/              # Layout global y secciones de la página
│   ├── metadata/             # Metadatos SEO y Open Graph
│   ├── pages/index.astro     # Página principal
│   ├── styles/global.css     # Tailwind, tokens y estilos globales
│   └── content.config.ts     # Colección y esquema de proyectos
├── astro.config.mjs
├── eslint.config.mjs
├── package.json
├── pnpm-lock.yaml
└── tsconfig.json
```

Los alias TypeScript definidos en `tsconfig.json` son `@assets/*`, `@components/*`, `@data/*`, `@layouts/*` y `@metadata/*`.

---

## Configuración del sitio

La configuración central está en `astro.config.mjs`:

- URL canónica del sitio: `https://14bryanespinoza.is-a.dev/`.
- Integraciones: `astro-icon` y `@astrojs/sitemap`.
- Tailwind CSS 4 conectado a Vite.
- Assets de build bajo `assets/`.
- Sharp configurado para AVIF, WebP, JPEG y PNG.

Las rutas internas y recursos públicos se construyen usando `import.meta.env.BASE_URL`, para respetar el base path que configure Astro. El archivo `public/robots.txt` permite el rastreo y declara `https://14bryanespinoza.is-a.dev/sitemap-index.xml`.

---

## Contacto

- **Email:** [14bryespinoza@gmail.com](mailto:14bryespinoza@gmail.com)
- **LinkedIn:** [14bryanespinoza](https://www.linkedin.com/in/14bryanespinoza)
- **GitHub:** [14bryanespinoza](https://github.com/14bryanespinoza)
- **Facebook:** [14bryanespinoza](https://www.facebook.com/14bryanespinoza)
- **X:** [@14bryanespinoza](https://twitter.com/14bryanespinoza)

---

## Licencia

Este proyecto se distribuye bajo la licencia **MIT**. Consulta el archivo [LICENSE](LICENSE) para ver el texto completo.
