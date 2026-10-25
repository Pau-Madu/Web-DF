# Integración de la Escoleta

La ruta `/escola` conserva la cabecera, navegación, vídeos y diseño del sitio oficial. Incluye horarios, cuotas pendientes de definir, condiciones y formulario propio.

## Archivos de la integración
- `despertaferro-web/src/components/site/EscoletaOverview.tsx`: presentación, horarios y funcionamiento en los tres idiomas existentes.
- `despertaferro-web/src/components/site/EscoletaRegistration.tsx` y `.css`: formulario en castellano con los estilos del sitio.
- `despertaferro-web/src/lib/escoleta.ts`: selección de datos y vínculo tutor-menor.
- `despertaferro-web/src/lib/escoleta-fields.ts`: campos de inscripción.
- `despertaferro-web/src/lib/escoleta-api.ts`: conexión mediante clave publicable (no es una clave secreta).
- `SectionPage.tsx`: integración dentro de la sección existente. Se han corregido también tipos opcionales ya presentes para que pase TypeScript.
- `site-content.ts`: nombre Escoleta en el título de la página.

## Base de datos
Supabase: `wxnpqwbbsocosgvlrnxw`. Las solicitudes se guardan en `public.escoleta_solicitudes` mediante la función `enviar_inscripcion_escoleta`. El script `despertaferro-web/supabase/escoleta.sql` permite reproducir el esquema en una base vacía. Ya se aplicó al proyecto indicado; no debe ejecutarse de nuevo allí. La API pública no puede leer solicitudes ni escribir directamente en la tabla.

El formulario registra por separado tutor legal, acompañamiento y matrícula del adulto. Los menores quedan vinculados al tutor principal. Los datos de opciones que se desactivan se excluyen del envío. No hay cuentas ni panel de administración real todavía.

## Compilar
Desde `despertaferro-web`: `npm ci` y `npm run build`. Para comprobar tipos: `npx tsc --noEmit`. Para las pruebas de datos, con Node.js 24: `node --experimental-strip-types --test tests/escoleta.test.mjs`.

## Publicar en Firebase
Desde la carpeta que contiene `firebase.json`:
```
npx firebase-tools login
npx firebase-tools deploy --only hosting --project despertaferro-cs
```
La configuración original publica `despertaferro-web/dist`. La carpeta `dist` se genera con la compilación; no se añade al repositorio. La publicación necesita una cuenta con acceso al proyecto Firebase.

## Validación
Se han comprobado compilación, TypeScript y selección de datos para adulto independiente, tutor no alumno, tutor alumno con varios menores y segundo contacto. La comprobación visual local verifica la integración con la cabecera y navegación originales. El formulario usa el mismo servidor validado del prototipo; no se han enviado solicitudes reales durante estas pruebas.
