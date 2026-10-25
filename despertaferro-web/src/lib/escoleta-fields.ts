export type FieldDefinition = { id: string; label: string; kind: string; required: boolean; options?: string[] };
export const fields: Record<string, FieldDefinition> = {
  "entry.1123069226": {
    "id": "entry.1123069226",
    "label": "Nombre y apellidos",
    "kind": "text",
    "required": true
  },
  "entry.182322416": {
    "id": "entry.182322416",
    "label": "DNI / NIE",
    "kind": "text",
    "required": true
  },
  "entry.2096745356": {
    "id": "entry.2096745356",
    "label": "Fecha de nacimiento del alumno adulto",
    "kind": "date",
    "required": true
  },
  "entry.364342983": {
    "id": "entry.364342983",
    "label": "Teléfono móvil principal",
    "kind": "tel",
    "required": true
  },
  "entry.1504183623": {
    "id": "entry.1504183623",
    "label": "Correo electrónico",
    "kind": "email",
    "required": true
  },
  "entry.1937655262": {
    "id": "entry.1937655262",
    "label": "Instrumento que quieres aprender",
    "kind": "select",
    "required": false,
    "options": [
      "Tambor",
      "Bombo"
    ]
  },
  "entry.760614959": {
    "id": "entry.760614959",
    "label": "¿Eres socio de la Germandat dels Cavallers de la Conquesta?",
    "kind": "select",
    "required": true,
    "options": [
      "Si",
      "No"
    ]
  },
  "entry.818916562": {
    "id": "entry.818916562",
    "label": "Nombre y apellidos del segundo adulto",
    "kind": "text",
    "required": true
  },
  "entry.2084507966": {
    "id": "entry.2084507966",
    "label": "DNI / NIE (Adulto 2)",
    "kind": "text",
    "required": false
  },
  "entry.1276690258": {
    "id": "entry.1276690258",
    "label": "Teléfono móvil (Adulto 2)",
    "kind": "tel",
    "required": false
  },
  "entry.1278476670": {
    "id": "entry.1278476670",
    "label": "Instrumento favorito (Adulto 2)",
    "kind": "select",
    "required": false,
    "options": [
      "Tambor",
      "Bombo"
    ]
  },
  "entry.1347489041": {
    "id": "entry.1347489041",
    "label": "¿Es usted socio de la Germandat dels Cavallers de la Conquesta? (Adulto 2)",
    "kind": "select",
    "required": false,
    "options": [
      "Si",
      "No"
    ]
  },
  "entry.1515525147": {
    "id": "entry.1515525147",
    "label": "Nombre y apellidos (Menor 1)",
    "kind": "text",
    "required": true
  },
  "entry.687657504": {
    "id": "entry.687657504",
    "label": "Fecha de nacimiento (Menor 1)",
    "kind": "date",
    "required": true
  },
  "entry.1552078413": {
    "id": "entry.1552078413",
    "label": "Instrumento favorito (Menor 1)",
    "kind": "select",
    "required": false,
    "options": [
      "Tambor",
      "Bombo"
    ]
  },
  "entry.2084561270": {
    "id": "entry.2084561270",
    "label": "¿Es usted socio de la Germandat dels Cavallers de la Conquesta? (Menor 1)",
    "kind": "select",
    "required": true,
    "options": [
      "Si",
      "No"
    ]
  },
  "entry.533185319": {
    "id": "entry.533185319",
    "label": "Alergias, intolerancias o consideraciones médicas (Menor 1)",
    "kind": "textarea",
    "required": true
  },
  "entry.714298190": {
    "id": "entry.714298190",
    "label": "Nombre y apellidos (Menor 2)",
    "kind": "text",
    "required": true
  },
  "entry.1099721967": {
    "id": "entry.1099721967",
    "label": "Fecha de nacimiento (Menor 2)",
    "kind": "date",
    "required": true
  },
  "entry.1209586594": {
    "id": "entry.1209586594",
    "label": "Instrumento favorito (Menor 2)",
    "kind": "select",
    "required": false,
    "options": [
      "Tambor",
      "Bombo"
    ]
  },
  "entry.147115696": {
    "id": "entry.147115696",
    "label": "¿Es usted socio de la Germandat dels Cavallers de la Conquesta? (Menor 2)",
    "kind": "select",
    "required": true,
    "options": [
      "Si",
      "No"
    ]
  },
  "entry.2008683482": {
    "id": "entry.2008683482",
    "label": "Alergias, intolerancias o consideraciones médicas (Menor 2)",
    "kind": "textarea",
    "required": true
  },
  "entry.1015317726": {
    "id": "entry.1015317726",
    "label": "Nombre y apellidos (Menor 3)",
    "kind": "text",
    "required": true
  },
  "entry.352252557": {
    "id": "entry.352252557",
    "label": "Fecha de nacimiento (Menor 3)",
    "kind": "date",
    "required": true
  },
  "entry.386549788": {
    "id": "entry.386549788",
    "label": "Instrumento favorito (Menor 3)",
    "kind": "select",
    "required": false,
    "options": [
      "Tambor",
      "Bombo"
    ]
  },
  "entry.1830638831": {
    "id": "entry.1830638831",
    "label": "¿Es usted socio de la Germandat dels Cavallers de la Conquesta? (Menor 3)",
    "kind": "select",
    "required": true,
    "options": [
      "Si",
      "No"
    ]
  },
  "entry.1026452017": {
    "id": "entry.1026452017",
    "label": "Alergias, intolerancias o consideraciones médicas (Menor 3)",
    "kind": "textarea",
    "required": true
  },
  "entry.497456677": {
    "id": "entry.497456677",
    "label": "Personas autorizadas adicionales para recogida de menores (Nombre y DNI)",
    "kind": "text",
    "required": false
  },
  "entry.1463632095": {
    "id": "entry.1463632095",
    "label": "Observaciones o comentarios adicionales",
    "kind": "textarea",
    "required": false
  }
};
