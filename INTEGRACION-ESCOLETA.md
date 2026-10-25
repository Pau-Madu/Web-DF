# Integración de la Escoleta

La ruta `/escola` conserva la cabecera, navegación, vídeos y diseño del sitio oficial. Incluye horarios, cuotas pendientes de definir, condiciones y el formulario oficial de inscripción.

## Archivos de la integración
- `despertaferro-web/src/components/site/EscoletaOverview.tsx`: presentación, horarios y funcionamiento en los tres idiomas existentes.
- `despertaferro-web/src/components/site/EscoletaRegistration.tsx` y `.css`: tarjeta desplegable con el formulario oficial de Google Forms incrustado y enlace alternativo para abrirlo directamente.
- `SectionPage.tsx`: integración dentro de la sección existente.
- `site-content.ts`: nombre Escoleta en el título de la página.

## Envío de solicitudes
El formulario oficial de Google Forms recibe y almacena las solicitudes. Su carga y funcionamiento están aislados del JavaScript de la web para que un problema del formulario no bloquee la navegación del sitio. El formulario ofrece un enlace directo como alternativa si el navegador no muestra el iframe.

La antigua integración directa con Supabase ya no forma parte de la web: se han retirado sus módulos de cliente, mapeo de campos y pruebas. Se conserva `despertaferro-web/supabase/escoleta.sql` como referencia del esquema que ya se aplicó en el proyecto; no es necesario para mostrar ni enviar el formulario actual de Google.

## Compilar
Desde `despertaferro-web`: `npm ci` y `npm run build`. Para comprobar tipos: `npx tsc --noEmit`.

## Publicar en Firebase
Desde la carpeta que contiene `firebase.json`:
```
npx firebase-tools login
npx firebase-tools deploy --only hosting --project despertaferro-cs
```
La configuración original publica `despertaferro-web/dist`. La carpeta `dist` se genera con la compilación; no se añade al repositorio. La publicación necesita una cuenta con acceso al proyecto Firebase.

## Validación
La ruta `/escola` mantiene el formulario oficial integrado con la cabecera y navegación originales. No se han enviado solicitudes reales durante estas pruebas.
