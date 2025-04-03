# LN Challenge - Acumulado Grilla

Este proyecto es una implementación del desafío técnico de La Nación, utilizando Next.js 14 y React 18.

La consigna original de la prueba técnica se puede encontrar en el archivo [CONSIGNA.md](./CONSIGNA.md).

## Tecnologías Principales

- Next.js 14.1.0
- React 18.2.0
- TypeScript
- Jest + React Testing Library

## Elección de Tecnologías

Se eligió **Next.js** (específicamente con el App Router) como framework principal por las siguientes razones:

- **Requisito de Renderizado en Servidor:** La consigna solicitaba explícitamente que la grilla y los artículos fueran renderizados desde el servidor. Next.js ofrece soluciones optimizadas para Server-Side Rendering (SSR) y Static Site Generation (SSG) de forma nativa, simplificando el cumplimiento de este requisito.

- **Simplicidad y Productividad:** Comparado con configurar un proyecto React "desde cero" (que requeriría configurar manualmente el enrutamiento, SSR, build tooling, etc.)

**TypeScript** se utilizó para mejorar la mantenibilidad del código, reducir errores en tiempo de desarrollo y facilitar la refactorización gracias al tipado estático.

**Jest y React Testing Library** se eligieron por ser el estándar de facto para testing en el ecosistema React, permitiendo escribir pruebas unitarias y de integración centradas en el comportamiento del usuario.

## Calidad de Código

Este proyecto utiliza las siguientes herramientas para asegurar la calidad y consistencia del código:

- **ESLint:** Para análisis estático del código y detección de problemas.
- **Prettier:** Para formateo automático del código.
- **Husky + lint-staged:** Para ejecutar automáticamente ESLint y Prettier en los archivos `.ts` y `.tsx` modificados antes de cada commit (`pre-commit` hook). Esto asegura que todo el código versionado cumpla con las reglas de estilo y formato definidas.

La configuración se encuentra en `.eslintrc.json`, `.prettierrc`, y la sección `lint-staged` de `package.json`.

## Estructura del Proyecto

La estructura principal dentro de `ln-challenge-app` es:

```
./
├── src/               # Código fuente de la aplicación
│   ├── app/           # Next.js App Router
│   │   ├── [lang]/    # Rutas dinámicas por idioma (e.g., /es, /en)
│   │   │   ├── dictionaries/ # Archivos JSON con traducciones
│   │   │   ├── layout.tsx    # Layout específico del idioma
│   │   │   └── page.tsx      # Página principal específica del idioma
│   │   ├── globals.css  # Estilos globales
│   │   └── layout.tsx   # Layout raíz de la aplicación
│   ├── components/    # Componentes React reutilizables
│   ├── lib/           # Lógica reutilizable, helpers, servicios
│   │   ├── api/       # Lógica relacionada con llamadas a API
│   │   ├── helpers/   # Funciones de utilidad
│   │   └── services/  # Servicios para obtener datos (e.g., artículos, tags)
│   ├── types/         # Definiciones de tipos TypeScript globales
│   └── middleware.ts  # Middleware de Next.js (ver sección i18n)
├── .env.example       # Ejemplo de variables de entorno
├── .env.local         # Variables de entorno locales (no versionado)
├── .eslintrc.json     # Configuración de ESLint
├── .gitignore         # Archivos ignorados por Git
├── .prettierrc        # Configuración de Prettier
├── jest.config.api.js # Configuración de Jest para tests de API
├── jest.config.js     # Configuración de Jest para tests de componentes
├── jest.setup.js      # Archivo de setup para Jest
├── middleware.ts      # Middleware de Next.js (a nivel raíz, puede delegar a src/middleware.ts)
├── next.config.js     # Configuración de Next.js
├── package.json       # Dependencias y scripts del proyecto
├── README.md          # Este archivo
└── tsconfig.json      # Configuración de TypeScript
```

## Internacionalización (i18n)

La aplicación soporta múltiples idiomas (español e inglés por defecto) utilizando la siguiente configuración:

- **Middleware (`src/middleware.ts`):** Detecta el idioma preferido del usuario (basado en la cabecera `Accept-Language` o una cookie) y redirige a la ruta correspondiente (e.g., `/es` o `/en`). Si no se especifica idioma, redirige al idioma por defecto (español).
- **Rutas Dinámicas (`src/app/[lang]/`):** Cada página y layout dentro de esta carpeta recibe el parámetro `lang` para cargar las traducciones correctas.
- **Diccionarios (`src/app/[lang]/dictionaries/`):** Archivos JSON (`es.json`, `en.json`) que contienen las cadenas de texto traducidas para cada idioma. Se cargan en los componentes del servidor según el `lang` actual.

## Configuración

1. Copia el archivo de ejemplo de variables de entorno:

```bash
cp .env.example .env.local
```

2. Actualiza las variables en `.env.local`:

```
NEXT_PUBLIC_API_ENDPOINT=https://tu-api-endpoint.com/
```

3. **Para ejecutar las pruebas:** Crea un archivo `.env.test` en la raíz del proyecto (`ln-challenge-app/`) con el endpoint de prueba:

```
NEXT_PUBLIC_API_ENDPOINT=https://tu-api-endpoint.com/
```

## Instalación

```bash
# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo en `http://localhost:3000`.
- `npm run build`: Construye la aplicación para producción.
- `npm run start`: Inicia el servidor de producción (requiere `npm run build` previo).
- `npm run lint`: Ejecuta ESLint para verificar el estilo del código.
- `npm run test:components`: Ejecuta las pruebas unitarias y de integración para los componentes React (usando `jest.config.js`).
- `npm run test:api`: Ejecuta las pruebas para la lógica relacionada con la API (usando `jest.config.api.js`).
- `npm run test:all`: Ejecuta todas las pruebas (componentes y API).
