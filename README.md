# Gestión de entornos de José

Aplicación Angular de la práctica 2 de Despliegue de Aplicaciones Web.
El componente `EntornoComponent` está anidado dentro del componente principal `App`.
Usa HTML, CSS y componentes standalone sencillos. No utiliza servidor SSR ni base de datos.

## Ejecutar

Con Node.js 22.12 o superior de la rama 22, o Node.js 24, y npm instalados:

```bash
npm ci
npm start
```

Abrir http://localhost:4200/ y mantener la terminal abierta.
Para compilar: `npm run build`.

## Entornos

| Rama | Mensaje | Color |
| --- | --- | --- |
| main | Entorno de producción | Verde |
| qa-pending | Entorno de pruebas QA | Naranja |
| uat-pending | Entorno de aceptación UAT | Azul |

La carpeta descargada empieza con la versión PROD. Las otras versiones están
preparadas en `versiones/`. El script de copia permite aplicarlas sin volver a escribir
el HTML y el CSS. No cambia de rama: primero hay que usar `git switch`.

```bash
node scripts/cambiar-entorno.cjs qa
node scripts/cambiar-entorno.cjs uat
node scripts/cambiar-entorno.cjs prod
```

Usa solo la orden correspondiente a la rama en la que estés trabajando y haz commit.
Vercel compila el componente guardado en cada rama; no selecciona el entorno automáticamente.
Consulta `LEEME_PRIMERO.txt` para crear las ramas y publicar.

## Archivos principales

- `src/app/app.ts`: importa el componente de entorno.
- `src/app/app.html`: incluye `<app-entorno>` y explica el proceso QA → UAT → PROD.
- `src/app/entorno/`: título, bienvenida, entorno y estilos de la versión actual.
- `versiones/`: HTML y CSS preparados para cada entorno.
- `vercel.json`: comando de compilación y carpeta de salida.
- `TRELLO.txt`: listas y tarjetas que debes crear.
- `documentacion/Informe_Jose_PENDIENTE.docx`: documento para completar con evidencias reales.

## Sobre gitignore

El enunciado pide añadir el componente a `.gitignore` después de validar los despliegues.
Git no ignora cambios de archivos ya versionados. No elimines el componente del repositorio:
Vercel lo necesita para compilar. La guía explica cómo añadir la regla pedida conservando
los archivos y documentar esta limitación. Esto no congela el componente ni evita conflictos.

Referencias: https://angular.dev/reference/versions · https://git-scm.com/docs/gitignore · https://vercel.com/docs/git
