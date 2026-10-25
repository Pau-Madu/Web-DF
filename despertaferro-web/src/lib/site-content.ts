import type { Language } from "./language";

export const languages: Array<{ code: Language; label: string; short: string }> = [
  { code: "va", label: "Valencià", short: "VAL" },
  { code: "es", label: "Español", short: "ES" },
  { code: "en", label: "English", short: "EN" },
];

export type PageKey =
  | "home"
  | "info"
  | "components"
  | "actuacions"
  | "galeria"
  | "escola"
  | "merchandising"
  | "contacte";

export const navItems = [
  { key: "home", to: "/" },
  { key: "info", to: "/info" },
  { key: "components", to: "/components" },
  { key: "actuacions", to: "/actuacions" },
  { key: "galeria", to: "/galeria" },
  { key: "escola", to: "/escola" },
  { key: "merchandising", to: "/merchandising" },
  { key: "contacte", to: "/contacte" },
] as const satisfies ReadonlyArray<{ key: PageKey; to: string }>;

export const routeMeta: Record<PageKey, { title: string; description: string }> = {
  home: {
    title: "Desperta, Ferro! — Tambors i Bombos de combat",
    description:
      "Web oficial de Desperta, Ferro!, banda medieval de tambors i bombos de combat de Castelló de la Plana.",
  },
  info: {
    title: "Info — Desperta, Ferro!",
    description: "Història, identitat i esperit medieval de la secció Desperta, Ferro!",
  },
  components: {
    title: "Components — Desperta, Ferro!",
    description: "Estructura de la banda, instruments i espais per presentar els components.",
  },
  actuacions: {
    title: "Actuacions — Desperta, Ferro!",
    description: "Agenda, desfilades i actes de Desperta, Ferro! a Castelló i altres places.",
  },
  galeria: {
    title: "Galeria — Desperta, Ferro!",
    description: "Galeria d'imatges de desfilades, assajos i actes medievals de la banda.",
  },
  escola: {
    title: "Escoleta — Desperta, Ferro!",
    description: "Escola de percussió medieval per aprendre ritmes de tambor i bombo.",
  },
  merchandising: {
    title: "Merchandising — Desperta, Ferro!",
    description: "Informació sobre samarretes, mocadors i material de Desperta, Ferro! amb compra en mà.",
  },
  contacte: {
    title: "Contacte — Desperta, Ferro!",
    description: "Contacta amb Desperta, Ferro! per actuacions, escola, components i informació general.",
  },
};

export const content = {
  va: {
    brand: {
      kickerLeft: "Tambors i Bombos de combat",
      kickerRight: "Germandat dels Cavallers de la Conquesta",
      since: "Des de 2012",
      place: "Castelló de la Plana",
      nameA: "DESPERTA,",
      nameB: "FERRO!",
      language: "Idioma",
      menu: "Menú",
      close: "Tancar",
      footer: "2026 By Pau Madueño © Desperta, Ferro! ",
      contactCta: "Contacte",
    },
    nav: {
      home: "INICI",
      info: "INFO",
      components: "COMPONENTS",
      actuacions: "ACTUACIONS",
      galeria: "GALERIA",
      escola: "ESCOLA DF!",
      merchandising: "MERCHANDAISING",
      contacte: "CONTACTE",
    },
    home: {
      heroAlt: "Espai principal per a una imatge de la banda en actuació",
      heroCaption: "Ritmes de combat, carrer i festa medieval",
      introTitle: "Tambors que obrin pas a la història",
      introText:
        "Desperta, Ferro! reuneix percussió, germanor i ambient medieval per acompanyar actes i celebracions amb la força dels bombos i tambors.",
      newsTitle: "ÚLTIMES NOTÍCIES",
      datesTitle: "PRÒXIMES DADES",
      moreTitle: "MÉS ACTUACIONS",
      viewAll: "Veure agenda",
      news: [
        {
          month: "Sep",
          title: "Assajos oberts per a nous components",
          text: [
            "Les persones interessades poden acostar-se, provar instruments i conéixer de prop el funcionament de la banda.",
          ],
        },
        {
          month: "Gen",
          title: "Nova temporada de ritmes medievals",
          text: [
            "La secció prepara nous assajos, noves entrades i un calendari d'actes per tornar a omplir els carrers de so i energia.",
          ],
        },

      ],
      dates: [
        "Assaig de la secció — Dijous 19:30",
        "Acte medieval — Pròximament",
      ],
      highlights: ["Bombos", "Tambors", "Passió", "Germanor"],
    },
    pages: {
      info: {
        eyebrow: "El Grup",
        title: "Informació",
        lead: "Un lloc per contar l'origen, el caràcter i la relació de la banda amb la festa medieval de Castelló.",
        sections: [
          { title: "Esperit", text: "Percussió de carrer amb presència de combat, ritmes contundents i posada en escena inspirada en l'edat mitjana." },
          { title: "Arrels", text: "Naixem dins l'entorn de la Germandat dels Cavallers de la Conquesta i mantenim viu l'imaginari de NaViolant i el Rei Jaume I." },
          { title: "Participació", text: "El grup acompanya proclamacions, homenatges, trobades i actes on el bombo i el tambor marca el pas." },
        ],
        timeline: ["2012 — Inici del camí", "2013 - Assajos setmanals", "2016 - Creació de cançons", "2022 - Nova generació de jovens", "2026 - Nous components i escoleta"],
        articles: [
          {
            title: "Història",
            paragraphs: [
              "Tot va començar amb les ganes de superació i de créixer, musicalment parlant, d'un grup de joves que gràcies a la confraria Santa Maria Magdalena de Castelló van conèixer el món dels Tambors i Bombos tant en l'àmbit de la Setmana Santa com en l'àmbit festiu de la ciutat junt amb la Germandat dels Cavallers de la Conquesta.",
              'La decisió de formar un grup nou de Tambors en la nostra ciutat no va ser fàcil, ja que no es fàcil crear una secció sense material, membres i sense possibles actes per a donar-se a conèixer. Una vegada presa la decisió, i gràcies a la Germandat dels Cavallers de la Conquesta, la secció va prendre forma dins del sí de la associació amb només 7 membres (14 a hores d\'ara) i en el mes d\'Octubre del 2012 van començar amb els assajos i la creació de nous tocs, així com l\'elecció d\'un nom adequat ("Tambors i Bombos de combat - Desperta Ferro! -") i de la redacció dels seus estatuts o reglament intern.',
              "La secció té al capdavant de l'àmbit musical al jove de 17 anys Eduardo Picazo Ferreiro, que des de ben xicotet ha demostrat els seus dots en el món de la percussió i la passió que sent per colpejar qualsevol tipus d'instrument. Edu està estudiant el grau professional de percussió en el Conservatori de música de la ciutat i, gràcies principalment a la seua habilitat, la secció ha anat avançant amb les noves marxes i tocs.",
              "La secció es va fixar com a data d'estrena la Proclamació de la màxima representant de la Germandat per a les festes de la Magdalena 2013, Marta Font Ramos. Aquell acte va marcar l'inici d'un nou any fester i va permetre donar a conèixer el nou grup de joves que, a partir d'eixe dia, posarien el ritme en les desfilades i actes dels Cavallers.",
            ],
          },
          {
            title: "Per què “DESPERTA, FERRO!”?",
            paragraphs: [
              "Quan pensàvem en un nom adequat per a una secció de tambors i bombos integrada en el si de la Germandat dels Cavallers de la Conquesta era necessari posar a funcionar les “peroles”. L'objectiu era trobar un nom medieval, relacionat amb la nostra història i l'època de Jaume I, i alhora poderós, contundent i ple de força.",
              "Després de nombroses disquisicions, un nom va destacar sobre els altres: Desperta, ferro! Era el crit característic de les temibles tropes almogàvers, avantguarda de molts episodis de les conquestes de la Corona d'Aragó, també en temps del rei Conqueridor.",
              "El nom casava a la perfecció amb l'esperit d'esforç, superació i força que preteníem que caracteritzara aquesta jove secció. El so de les armes dels almogàvers contra els seus escuts ens recorda la força amb què els nostres components baten les pells dels seus bombos i tambors.",
              "Així va ser com el crit de guerra dels braus almogàvers donaria nom a la nova secció de la Germandat: els Tambors i Bombos de Combat de la Germandat dels Cavallers de la Conquesta — Desperta, Ferro! — Milites Carrocius.",
            ],
          },
          {
            title: "La nostra indumentària",
            paragraphs: [
              "Continuem amb la col·laboració del nostre amic Milites Carrocius, aquesta volta amb un article sobre la nostra indumentària. Amb aquesta col·laboració hem pogut donar a conèixer els nostres emblemes, el perquè del nostre nom i ara la nostra uniformitat.",
              "La nostra uniformitat no pretén ser una recreació almogàver, sinó un conjunt senzill, auster, espartà i funcional. Sense passamaneries ni brodats ostentosos, amb colors discrets i còmode per a la pràctica del tambor i el bombo.",
              "A l'interior, samarreta gris fosca o negra i peces del mateix color. Per calcer, sandàlies de tires de cuir negre. Damunt, una vesta negra lleugera, amb una fina tira de passamaneria groga o daurada, sense mànegues i amb obertura lateral ampla.",
              "Sobre aquesta, una peça o peto en color ocre o or vell, cenyida amb cinturó de pell fosca. Al pit, una trova o escut amb les quatre barres de la senyera. El conjunt és auster pel negre, elegant per l'ocre i colorit pel contrast de la senyera.",
              "Desperta, ferro!!\n\nMilites Carrocius",
            ],
            imageLabel: "Imatge de la nostra indumentària",
          },
          {
            title: "Els nostres distintius",
            paragraphs: [
              "Penó de la Secció: l'emblema dissenyat per a la nostra secció es compon, sobre un fons quatribarrat retallat amb la silueta del Penó de la Conquesta, d'un cercle que representa un bombo de fusta i pell. Al centre hi figura el castell de Castelló i, darrere, dos coltells o espases almogàvers disposats en aspa amb una actitud combativa.",
              "Imatge representativa: l'escut dissenyat per a la nostra secció és una adaptació del nostre emblema-penó. Manté la senyera de les quatre barres i l'adapta per representar els instruments de percussió. L'ondulació de les barres transmet la vibració dels instruments i el moviment del penó en la marxa. També porta el nom de la secció i l'escut de la Germandat dels Cavallers de la Conquesta.",
            ],
            imageLabels: ["Penó de la secció", "Imatge representativa", "Emblema de Desperta, Ferro!"],
          },
        ],
      },
      components: {
        eyebrow: "La formació",
        title: "Components",
        lead: "Estructura per presentar els membres, responsables i instruments de la secció.",
        groups: ["Bombos de guerra", "Tambors de mà", "Estandarts i Banderes", "Comisió"],
        sections: [
          { title: "Components actius", text: "Espai per afegir noms, fotografies i funcions dins de la banda." },
          { title: "Aspirants", text: "Components en procés d'incorporar-se a la secció." },
          { title: "Suplents", text: "Components de reserva de la banda." },
        ],
        members: ["Sergio", "Fernando", "Jose V.", "Pablo", "Jose M.", "Gerard", "Pau", "David", "Liam", "Mariete", "Javi", "Miguel"],
        aspirants: ["Aitana", "Ivan", "Victor"],
        substitutes: ["Ruben", "Alex", "Adán"],
      },
      actuacions: {
        eyebrow: "Calendari",
        title: "Actuacions",
        lead: "Agenda preparada per publicar desfilades, assajos oberts i actes especials.",
        events: [
          { day: "03 Octubre", title: "Desfile medieval a València", place: "València", note: "Horari: 11:00" },
          { day: "03 Octubre", title: "Desfile amb Cavallers", place: "Oropesa", note: "Horari: 17:00" },
          { day: "08 Octubre", title: "Vetlla d'armes", place: "Castelló de la Plana", note: "Horari orientatiu: 19:30" },
          { day: "09 Octubre", title: "Desfile 9 d'octubre", place: "Castelló de la Plana", note: "Horari: 11:00" },
          { day: "17 Octubre", title: "Portes obertes de la secció D,F!", place: "Castelló de la Plana", note: "Horari: 10:00 - 12:00" },
          { day: "17 Octubre", title: "Desfile medieval amb Cavallers", place: "Culla", note: "Horari: 17:00" },
          { day: "24 Octubre", title: "Desfile aniversari dels Cavallers", place: "Castelló de la Plana", note: "Hora per confirmar" },
          { day: "Març", title: "Festes de la Magdalena", place: "Castelló de la Plana", note: "Actes i recorreguts per confirmar" },
          { day: "Aviat", title: "Trobades medievals", place: "A concretar", note: "Contractació i disponibilitat" },
        ],
      },
      galeria: {
        eyebrow: "Imatges",
        title: "Galeria",
        lead: "Quadrícula per substituir per fotografies reals de la banda, els instruments i les actuacions.",
        albums: ["Antics membres", "Actuacions", "Assajos", "Detalls medievals", "Magdalena", "Escola"],
      },
      escola: {
        eyebrow: "Formació",
        title: "Escoleta",
        lead: "Escola de percussió per a xiquets, joves i adults que vulguen aprendre el llenguatge del tambor medieval. I a més aprendre els nostres ritmes.",
        sections: [
          { title: "Aprenentatge", text: "Classes pràctiques de ritme, postura, coordinació i treball en grup. No es requereix haver tocat cap instrument prèviament." },
          { title: "Per a totes les edats", text: "L'espai està pensat perquè cada alumne avance al seu ritme i conega la banda des de dins." },
          {
            title: "Inscripció",
            text: "Si vols formar part de l'escola, ompli el formulari d'inscripció i ens posarem en contacte amb tu.",
            linkUrl: "https://forms.gle/ALjHTu7mbhPjz3Wy5",
            linkLabel: "Inscriure's al formulari",
          },
        ],
        mediaSection: {
          kicker: "YouTube",
          title: "Escolta les nostres cançons",
          lead: "Si vols conéixer millor el nostre so, aquí tens alguns dels nostres vídeos de Youtube.",
          followText: "Segueix-nos a YouTube",
          videos: [
            { title: "Vídeo 1", url: "https://www.youtube.com/shorts/p7Hxf5n4cqk", embedUrl: "https://www.youtube.com/embed/p7Hxf5n4cqk?rel=0" },
            { title: "Vídeo 2", url: "https://www.youtube.com/shorts/BTZTmE-T0Mg", embedUrl: "https://www.youtube.com/embed/BTZTmE-T0Mg?rel=0" },
            { title: "Vídeo 3", url: "https://www.youtube.com/watch?v=h0r19T67-hs", embedUrl: "https://www.youtube.com/embed/h0r19T67-hs?rel=0" },
          ],
        },
      },
      merchandising: {
        eyebrow: "Material",
        title: "Merchandising",
        lead: "Catàleg informatiu dels productes de la grup. La compra es fará en mà per simplificar la gestió. Si desitja algun producte posat en contacte amb nosaltres.",
        products: [
          { title: "Samarreta Escut", description: "Samarreta identificativa amb l'escut de la banda.", price: "14.99 €", image: "/fotoCamisetaEscudo_merch.jpeg" },
          { title: "Samarreta DF", description: "Versió clàssica amb el nom DF i el nostre estil.", price: "14.99 €", image: "/fotoCamisetaDF_merch.jpeg" },
          { title: "Samarreta \"Puño\"", description: "Model amb el símbol del puño i l'energia de la secció.", price: "14.99 €", image: "/fotoCamisetaPuño_merch.jpeg" },
          { title: "Mocador", description: "Mocador identificatiu de Magdalena DF.", price: "9.99 €", image: "/fotoPañuelo_merch.jpeg" },
          { title: "Adhesiu", description: "Adhesiu per portar el crit de la banda, dissenyat per a menuts i no tan menuts.", price: "1 €", image: "/fotoAdesivo_merch.jpeg" },
          { title: "Proximament...", description: "Més peces i novetats en preparació.", image: "" },
        ],
        notice: "Compra en mà en assajos, actes o mitjançant contacte previ.",
      },
      contacte: {
        eyebrow: "Parlem",
        title: "Contacte",
        lead: "Canal per demanar actuacions, informació de l'escola o entrada com a component.",
        schedule: "Assajos: DIJOUS a partir de les 20:00h. Fins les 21:00h. A l'Ántic Quarter de Tetuán XIV.",
        contactItems: [
          { title: "Correu electrònic:", value: "tamborsibombos.despertaferro@gmail.com", href: "mailto:tamborsibombos.despertaferro@gmail.com", actionLabel: "Escriure correu" },
          { title: "Telèfon de contacte:", value: "Sergio - 628482355", href: "", actionLabel: "" },
          { title: "Instagram:", value: "@desperta_ferro_cs", href: "", actionLabel: "" },
          { title: "Tik Tok:", value: "", href: "", actionLabel: "" },
        ],
        phoneLabel: "Telèfon de contacte",
        phone: "628482355",
        legal: ["Pertany a: Germandat dels Cavallers de la Conquesta de Castellón.", "NIF G-12.070.090", "Apt. de correus 565", "12080 Castellón", "Associació Provincial 163", "Associació Nacional 14.408", "Fundada el 15/01/1951"],
      },
    },
  },
  es: {
    brand: {
      kickerLeft: "Tambores y Bombos de combate",
      kickerRight: "Hermandad de los Caballeros de la Conquista",
      since: "Desde 2012",
      place: "Castelló de la Plana",
      nameA: "DESPERTA,",
      nameB: "FERRO!",
      language: "Idioma",
      menu: "Menú",
      close: "Cerrar",
      footer: "2026 By Pau Madueño © Desperta, Ferro! ",
      contactCta: "Contacto",
    },
    nav: {
      home: "INICIO",
      info: "INFO",
      components: "COMPONENTES",
      actuacions: "ACTUACIONES",
      galeria: "GALERÍA",
      escola: "ESCUELA DF!",
      merchandising: "MERCHANDAISING",
      contacte: "CONTACTO",
    },
    home: {
      heroAlt: "Espacio principal para una imagen de la banda en actuación",
      heroCaption: "Ritmos de combate, calle y fiesta medieval",
      introTitle: "Tambores que abren paso a la historia",
      introText:
        "Desperta, Ferro! reúne percusión, hermandad y ambiente medieval para acompañar actos y celebraciones con la fuerza de bombos y tambores.",
      newsTitle: "ÚLTIMAS NOTICIAS",
      datesTitle: "PRÓXIMAS FECHAS",
      moreTitle: "MÁS ACTUACIONES",
      viewAll: "Ver agenda",
      news: [
        {
          month: "Sep",
          title: "Ensayos abiertos para nuevos componentes",
          text: [
            "Las personas interesadas pueden acercarse, probar instrumentos y conocer de cerca el funcionamiento de la banda.",
          ],
        },
        {
          month: "Ene",
          title: "Nueva temporada de ritmos medievales",
          text: [
            "La sección prepara nuevos ensayos, nuevas entradas y un calendario de actos para volver a llenar las calles de sonido y energía.",
          ],
        },
      ],
      dates: ["Ensayo de la sección — Jueves 19:30", "Acto medieval — Próximamente"],
      highlights: ["Bombos", "Tambores", "Pasión", "Hermandad"],
    },
    pages: {
      info: {
        eyebrow: "El Grupo",
        title: "Información",
        lead: "Un lugar para contar el origen, el carácter y la relación de la banda con la fiesta medieval de Castelló.",
        sections: [
          { title: "Esperit", text: "Percusión de calle con presencia de combate, ritmos contundentes y puesta en escena inspirada en la Edad Media." },
          { title: "Raíces", text: "Nacemos dentro del entorno de la Hermandad de los Caballeros de la Conquista y mantenemos vivo el imaginario de Na Violant y el Rey Jaime I." },
          { title: "Participación", text: "El grupo acompaña proclamaciones, homenajes, encuentros y actos donde el bombo y el tambor marcan el paso." },
        ],
        timeline: ["2012 — Inicio del camino", "2013 — Ensayos semanales", "2016 — Creación de canciones", "2022 — Nueva generación de jóvenes", "2026 — Nuevos componentes y escuela"],
        articles: [
          {
            title: "Historia",
            paragraphs: [
              "Todo comenzó con las ganas de superación y de crecer, musicalmente hablando, de un grupo de jóvenes que, gracias a la cofradía Santa Maria Magdalena de Castellón, conocieron el mundo de los Tambores y Bombos tanto en el ámbito de la Semana Santa como en el ámbito festivo de la ciudad junto con la Hermandad de los Caballeros de la Conquista.",
              "La decisión de formar un grupo nuevo de Tambores en nuestra ciudad no fue fácil, ya que no es fácil crear una sección sin material, miembros y sin posibles actos para darse a conocer. Una vez tomada la decisión, y gracias a la Hermandad de los Caballeros de la Conquista, la sección tomó forma dentro del seno de la asociación con solo 7 miembros (14 a día de hoy) y en el mes de octubre de 2012 comenzaron con los ensayos y la creación de nuevos toques, así como la elección de un nombre adecuado (\"Tambores y Bombos de combate - Desperta Ferro! -\") y la redacción de sus estatutos o reglamento interno.",
              "La sección tiene al frente del ámbito musical al joven de 17 años Eduardo Picazo Ferreiro, que desde muy pequeño ha demostrado sus dotes en el mundo de la percusión y la pasión que siente por golpear cualquier tipo de instrumento. Edu está estudiando el grado profesional de percusión en el Conservatorio de música de la ciudad y, gracias principalmente a su habilidad, la sección ha ido avanzando con nuevas marchas y toques.",
              "La sección se fijó como fecha de estreno la Proclamación de la máxima representante de la Hermandad para las fiestas de la Magdalena de 2013, Marta Font Ramos. Aquello marcó el inicio de un nuevo año festivo y permitió dar a conocer al nuevo grupo de jóvenes que, a partir de ese día, pondrían el ritmo en los desfiles y actos de los Caballeros.",
            ],
          },
          {
            title: "¿Por qué “DESPERTA, FERRO!”?",
            paragraphs: [
              "Cuando pensábamos en un nombre adecuado para una sección de tambores y bombos integrada en el seno de la Hermandad de los Caballeros de la Conquista era necesario poner a funcionar las \"peroles\". El objetivo era encontrar un nombre medieval, relacionado con nuestra historia y la época de Jaime I, y al mismo tiempo poderoso, contundente y lleno de fuerza.",
              "Tras numerosas discusiones, un nombre destacó sobre los demás: Desperta, ferro! Era el grito característico de las temibles tropas almogávares, avanzadilla de muchos episodios de las conquistas de la Corona de Aragón, también en tiempos del rey Conquistador.",
              "El nombre encajaba a la perfección con el espíritu de esfuerzo, superación y fuerza que pretendíamos que caracterizara a esta joven sección. El sonido de las armas de los almogávares contra sus escudos nos recuerda la fuerza con la que nuestros componentes golpean los parches de sus bombos y tambores.",
              "Así fue como el grito de guerra de los valientes almogávares daría nombre a la nueva sección de la Hermandad: los Tambores y Bombos de Combate de la Hermandad de los Caballeros de la Conquista — Desperta, Ferro! — Milites Carrocius.",
            ],
          },
          {
            title: "Nuestra indumentaria",
            paragraphs: [
              "Continuamos con la colaboración de nuestro amigo Milites Carrocius, esta vez con un artículo sobre nuestra indumentaria. Con esta colaboración hemos podido dar a conocer nuestros emblemas, el porqué de nuestro nombre y ahora nuestra uniformidad.",
              "Nuestra uniformidad no pretende ser una recreación almogávar, sino un conjunto sencillo, austero, espartano y funcional. Sin pasamanería ni bordados ostentosos, con colores discretos y cómodo para la práctica del tambor y el bombo.",
              "En el interior, camiseta gris oscuro o negra y piezas del mismo color. Para calzado, sandalias de tiras de cuero negro. Encima, una vesta negra ligera, con una fina tira de pasamanería amarilla o dorada, sin mangas y con abertura lateral amplia.",
              "Sobre esta, una pieza o peto en color ocre o oro viejo, ceñida con cinturón de piel oscura. En el pecho, una trova o escudo con las cuatro barras de la senyera. El conjunto es austero por el negro, elegante por el ocre y colorido por el contraste de la senyera.",
              "Desperta, ferro!!\n\nMilites Carrocius",
            ],
            imageLabel: "Imagen de nuestra indumentaria",
          },
          {
            title: "Nuestros distintivos",
            paragraphs: [
              "Pendón de la Sección: el emblema diseñado para nuestra sección se compone, sobre un fondo cuatribarrado recortado con la silueta del Pendón de la Conquista, de un círculo que representa un bombo de madera y piel. En el centro figura el castillo de Castellón y, detrás, dos cuchillos o espadas almogávares dispuestos en aspa con una actitud combativa.",
              "Imagen representativa: el escudo diseñado para nuestra sección es una adaptación de nuestro emblema-pendón. Mantiene la senyera de las cuatro barras y la adapta para representar los instrumentos de percusión. La ondulación de las barras transmite la vibración de los instrumentos y el movimiento del pendón en la marcha. También lleva el nombre de la sección y el escudo de la Hermandad de los Caballeros de la Conquista.",
            ],
            imageLabels: ["Pendón de la sección", "Imagen representativa", "Emblema de Desperta, Ferro!"],
          },
        ],
      },
      components: {
        eyebrow: "La formación",
        title: "Componentes",
        lead: "Estructura para presentar a los miembros, responsables e instrumentos de la sección.",
        groups: ["Bombos de guerra", "Tambores de mano", "Estandartes y banderas", "Comisión"],
        sections: [
          { title: "Componentes activos", text: "Espacio para añadir nombres, fotografías y funciones dentro de la banda." },
          { title: "Aspirantes", text: "Componentes en proceso de incorporarse a la sección." },
          { title: "Suplentes", text: "Componentes de reserva de la banda." },
        ],
        members: ["Sergio", "Fernando", "Jose V.", "Pablo", "Jose M.", "Gerard", "Pau", "David", "Liam", "Mariete", "Javi", "Miguel"],
        aspirants: ["Aitana", "Ivan", "Victor"],
        substitutes: ["Ruben", "Alex", "Adán"],
      },
      actuacions: {
        eyebrow: "Calendario",
        title: "Actuaciones",
        lead: "Agenda preparada para publicar desfiles, ensayos abiertos y actos especiales.",
        events: [
          { day: "03 Octubre", title: "Desfile medieval en Valencia", place: "Valencia", note: "Horario: 11:00" },
          { day: "03 Octubre", title: "Desfile con Cavallers", place: "Oropesa", note: "Horario: 17:00" },
          { day: "08 Octubre", title: "Vetlla d'armes", place: "Castellón de la Plana", note: "Horario orientativo: 19:30" },
          { day: "09 Octubre", title: "Desfile 9 de octubre", place: "Castellón de la Plana", note: "Horario: 11:00" },
          { day: "17 Octubre", title: "Puertas abiertas de la sección D,F!", place: "Castellón de la Plana", note: "Horario: 10:00 - 12:00" },
          { day: "17 Octubre", title: "Desfile medieval con Cavallers", place: "Culla", note: "Horario: 17:00" },
          { day: "24 Octubre", title: "Desfile aniversario de los Cavallers", place: "Castellón de la Plana", note: "Hora por confirmar" },
          { day: "Marzo", title: "Fiestas de la Magdalena", place: "Calles de Castelló", note: "Actos y recorridos por confirmar" },
          { day: "Pronto", title: "Encuentros medievales", place: "Por concretar", note: "Contratación y disponibilidad" },
        ],
      },
      galeria: {
        eyebrow: "Imágenes",
        title: "Galería",
        lead: "Cuadrícula para sustituir por fotografías reales de la banda, los instrumentos y las actuaciones.",
        albums: ["Antiguos miembros", "Actuaciones", "Ensayos", "Detalles medievales", "Magdalena", "Escuela"],
      },
      escola: {
        eyebrow: "Formación",
        title: "Escoleta",
        lead: "Escuela de percusión para niños, jóvenes y adultos que quieran aprender el lenguaje del tambor medieval. Además, aprender nuestros ritmos.",
        sections: [
          { title: "Aprendizaje", text: "Clases prácticas de ritmo, postura, coordinación y trabajo en grupo. No se requiere haber tocado ningún instrumento previamente." },
          { title: "Para todas las edades", text: "El espacio está pensado para que cada alumno avance a su ritmo y conozca la banda desde dentro." },
          {
            title: "Inscripción",
            text: "Si quieres formar parte de la escuela, rellena el formulario de inscripción y nos pondremos en contacto contigo.",
            linkUrl: "https://forms.gle/ALjHTu7mbhPjz3Wy5",
            linkLabel: "Inscribirse al formulario",
          },
        ],
        mediaSection: {
          kicker: "YouTube",
          title: "Escucha nuestras canciones",
          lead: "Si quieres conocer mejor nuestro sonido, aquí tienes algunos de nuestros vídeos más recientes.",
          followText: "Síguenos en YouTube",
          videos: [
            { title: "Vídeo 1", url: "https://www.youtube.com/shorts/p7Hxf5n4cqk", embedUrl: "https://www.youtube.com/embed/p7Hxf5n4cqk?rel=0" },
            { title: "Vídeo 2", url: "https://www.youtube.com/shorts/BTZTmE-T0Mg", embedUrl: "https://www.youtube.com/embed/BTZTmE-T0Mg?rel=0" },
            { title: "Vídeo 3", url: "https://www.youtube.com/watch?v=h0r19T67-hs", embedUrl: "https://www.youtube.com/embed/h0r19T67-hs?rel=0" },
          ],
        },
      },
      merchandising: {
        eyebrow: "Material",
        title: "Merchandising",
        lead: "Catálogo informativo de los productos del grupo. La compra se hará en mano para simplificar la gestión. Si desea algún producto, póngase en contacto con nosotros.",
        products: [
          { title: "Camiseta Escudo", description: "Camiseta identificativa con el escudo de la banda.", price: "14.99 €", image: "/fotoCamisetaEscudo_merch.jpeg" },
          { title: "Camiseta DF", description: "Versión clásica con el nombre DF y el estilo de la sección.", price: "14.99 €", image: "/fotoCamisetaDF_merch.jpeg" },
          { title: "Camiseta \"Puño\"", description: "Modelo con el símbolo del puño y la energía del grupo.", price: "14.99 €", image: "/fotoCamisetaPuño_merch.jpeg" },
          { title: "Pañuelo", description: "Pañuelo identificativo de Magdalena DF.", price: "9.99 €", image: "/fotoPañuelo_merch.jpeg" },
          { title: "Adhesivo", description: "Adhesivo para llevar el grito de la banda, diseñado para pequeños y no tan pequeños.", price: "1 €", image: "/fotoAdesivo_merch.jpeg" },
          { title: "Próximamente...", description: "Más piezas y novedades en preparación.", image: "" },
        ],
        notice: "Compra en mano en ensayos, actos o mediante contacto previo.",
      },
      contacte: {
        eyebrow: "Hablamos",
        title: "Contacto",
        lead: "Canal para solicitar actuaciones, información de la escuela o entrada como componente.",
        schedule: "Ensayos: JUEVES a partir de las 20:00 h. Hasta las 21:00 h. En el Antiguo Cuartel de Tetuán XIV.",
        contactItems: [
          { title: "Correo electrónico:", value: "tamborsibombos.despertaferro@gmail.com", href: "mailto:tamborsibombos.despertaferro@gmail.com", actionLabel: "Escribir correo" },
          { title: "Teléfono de contacto:", value: "Sergio - 628482355", href: "", actionLabel: "" },
          { title: "Instagram:", value: "@desperta_ferro_cs", href: "", actionLabel: "" },
          { title: "Tik Tok:", value: "", href: "", actionLabel: "" },
        ],
        phoneLabel: "Teléfono de contacto",
        phone: "628482355",
        legal: ["Pertenece a: Germandat dels Cavallers de la Conquesta de Castellón.", "NIF G-12.070.090", "Apartado de correos 565", "12080 Castellón", "Asociación Provincial 163", "Asociación Nacional 14.408", "Fundada el 15/01/1951"],
      },
    },
  },
  en: {
    brand: {
      kickerLeft: "Battle drums and bass drums",
      kickerRight: "Brotherhood of the Knights of the Conquest",
      since: "Since 2012",
      place: "Castelló de la Plana",
      nameA: "DESPERTA,",
      nameB: "FERRO!",
      language: "Language",
      menu: "Menu",
      close: "Close",
      footer: "2026 By Pau Madueño © Desperta, Ferro! ",
      contactCta: "Contact",
    },
    nav: {
      home: "HOME",
      info: "INFO",
      components: "MEMBERS",
      actuacions: "PERFORMANCES",
      galeria: "GALLERY",
      escola: "SCHOOL DF!",
      merchandising: "MERCHANDISING",
      contacte: "CONTACT",
    },
    home: {
      heroAlt: "Main space for a performance image of the band",
      heroCaption: "Battle rhythms, street presence and medieval celebration",
      introTitle: "Drums that open the way to history",
      introText:
        "Desperta, Ferro! brings together percussion, brotherhood and medieval atmosphere for events and celebrations powered by bass drums and drums.",
      newsTitle: "LATEST NEWS",
      datesTitle: "UPCOMING DATES",
      moreTitle: "MORE PERFORMANCES",
      viewAll: "View agenda",
      news: [
        {
          month: "Sep",
          title: "Open rehearsals for new members",
          text: [
            "Interested people can come along, try the instruments and discover how the band works from the inside.",
          ],
        },
        {
          month: "Jan",
          title: "A new season of medieval rhythms",
          text: [
            "The section is preparing rehearsals, new entrances and a calendar of events to fill the streets with sound and energy again.",
          ],
        },
      ],
      dates: ["Section rehearsal — Thursday 19:30", "Medieval event — Coming soon"],
      highlights: ["Bass drums", "Drums", "Passion", "Brotherhood"],
    },
    pages: {
      info: {
        eyebrow: "The Group",
        title: "Information",
        lead: "A place to tell the band's origin, character and connection with Castelló's medieval celebrations.",
        sections: [
          { title: "Spirit", text: "Street percussion with a battle presence, powerful rhythms and staging inspired by the Middle Ages." },
          { title: "Roots", text: "Born around the Brotherhood of the Knights of the Conquest, keeping the imagery of Na Violant and King James I alive." },
          { title: "Participation", text: "The group accompanies proclamations, tributes, gatherings and events where the bass drum and drum mark the pace." },
        ],
        timeline: ["2012 — The path begins", "2013 — Weekly rehearsals", "2016 — Song creation", "2022 — New generation of young people", "2026 — New members and school"],
        articles: [
          {
            title: "History",
            paragraphs: [
              "It began with the desire of a group of young people to grow musically after discovering drums and bass drums through the Santa Maria Magdalena Brotherhood of Castelló and the Brotherhood of the Knights of the Conquest.",
              "The decision to form a new drum section in our city was not easy, because it is not easy to create a section without material, members and without possible events to get known. Once the decision was made, and thanks to the Brotherhood of the Knights of the Conquest, the section took shape within the association with only 7 members (14 today) and in October 2012 they began rehearsals and the creation of new rhythms, as well as choosing an appropriate name (\"Battle drums and bass drums - Desperta Ferro! -\") and drafting their internal statutes or regulations.",
              "The section is led musically by the 17-year-old Eduardo Picazo Ferreiro, who from a very young age has shown his talents in the world of percussion and the passion he feels for striking any kind of instrument. Edu is studying the professional percussion degree at the city's Conservatory of Music and, thanks mainly to his skill, the section has continued to advance with new marches and rhythms.",
              "The section set the premiere date for the Proclamation of the Brotherhood's leading representative for the Magdalena festivities in 2013, Marta Font Ramos. That event marked the start of a new festive year and allowed the new group of young people to be known, who from that day on would set the rhythm of the parades and events of the Knights.",
            ],
          },
          {
            title: "Why “DESPERTA, FERRO!”?",
            paragraphs: [
              "When we were thinking of a suitable name for a section of drums and bass drums integrated into the Brotherhood of the Knights of the Conquest, it was necessary to put the \"peroles\" to work. The aim was to find a medieval name related to our history and the era of James I, while also powerful, forceful and full of strength.",
              "After numerous discussions, one name stood out above the rest: Desperta, ferro! It was the characteristic cry of the formidable Almogavars, vanguard of many episodes of the conquests of the Crown of Aragon, also in the time of the Conqueror king.",
              "The name fit perfectly with the spirit of effort, improvement and strength that we wanted to characterize this young section. The sound of the Almogavars' weapons against their shields reminds us of the force with which our members beat the skins of their drums and bass drums.",
              "This is how the war cry of the brave Almogavars would give a name to the new section of the Brotherhood: the Drums and Bass Drums of Combat of the Brotherhood of the Knights of the Conquest — Desperta, Ferro! — Milites Carrocius.",
            ],
          },
          {
            title: "Our clothing",
            paragraphs: [
              "We continue with the collaboration of our friend Milites Carrocius, this time with an article about our clothing. With this collaboration we have been able to share our emblems, the reason for our name and now our uniform.",
              "Our uniform is not intended to be an Almogavar recreation, but a simple, austere, Spartan and functional ensemble. Without trimmings or ostentatious embroidery, with discreet colours and comfortable for playing the drum and bass drum.",
              "Underneath, a dark grey or black T-shirt and matching pieces. For footwear, sandals with black leather straps. Over that, a light black vest with a thin strip of yellow or gold braid, no sleeves and with a wide lateral opening.",
              "Over this, a piece or chestplate in ochre or old gold, fastened with a dark leather belt. On the chest, a badge or shield with the four bars of the senyera. The overall look is austere in black, elegant in ochre and colourful in the contrast of the senyera.",
              "Desperta, ferro!!\n\nMilites Carrocius",
            ],
            imageLabel: "Image of our clothing",
          },
          {
            title: "Our insignia",
            paragraphs: [
              "Section banner: the emblem designed for our section is composed, on a four-barred background cut with the silhouette of the Banner of the Conquest, of a circle representing a bass drum made of wood and skin. In the centre is the castle of Castellón and, behind it, two knives or Almogavar swords arranged in an X with a combative attitude.",
              "Representative image: the shield designed for our section is an adaptation of our banner emblem. It keeps the senyera of the four bars and adapts it to represent the percussion instruments. The undulation of the bars conveys the vibration of the instruments and the movement of the banner in the march. It also bears the name of the section and the crest of the Brotherhood of the Knights of the Conquest.",
            ],
            imageLabels: ["Section banner", "Representative image", "Desperta, Ferro! emblem"],
          },
        ],
      },
      components: {
        eyebrow: "The formation",
        title: "Members",
        lead: "Structure for presenting the members, leaders and instruments of the section.",
        groups: ["War bass drums", "Hand drums", "Standards and banners", "Committee"],
        sections: [
          { title: "Active members", text: "Space to add names, photographs and roles within the band." },
          { title: "Applicants", text: "Members in the process of joining the section." },
          { title: "Substitutes", text: "Reserve members of the band." },
        ],
        members: ["Sergio", "Fernando", "Jose V.", "Pablo", "Jose M.", "Gerard", "Pau", "David", "Liam", "Mariete", "Javi", "Miguel"],
        aspirants: ["Aitana", "Ivan", "Victor"],
        substitutes: ["Ruben", "Alex", "Adán"],
      },
      actuacions: {
        eyebrow: "Calendar",
        title: "Performances",
        lead: "Agenda prepared for parades, open rehearsals and special events.",
        events: [
          { day: "03 October", title: "Medieval parade in Valencia", place: "Valencia", note: "Time: 11:00" },
          { day: "03 October", title: "Parade with Cavallers", place: "Oropesa", note: "Time: 17:00" },
          { day: "08 October", title: "Vetlla d'armes", place: "Castelló de la Plana", note: "Indicative time: 19:30" },
          { day: "09 October", title: "Parade 9 October", place: "Castelló de la Plana", note: "Time: 11:00" },
          { day: "17 October", title: "Open doors of the D,F! section", place: "Castelló de la Plana", note: "Time: 10:00 - 12:00" },
          { day: "17 October", title: "Medieval parade with Cavallers", place: "Culla", note: "Time: 17:00" },
          { day: "24 October", title: "Cavallers anniversary parade", place: "Castelló de la Plana", note: "Time to be confirmed" },
          { day: "March", title: "Magdalena festivities", place: "Streets of Castelló", note: "Events and routes to be confirmed" },
          { day: "Soon", title: "Medieval gatherings", place: "To be confirmed", note: "Bookings and availability" },
        ],
      },
      galeria: {
        eyebrow: "Images",
        title: "Gallery",
        lead: "Grid ready to replace with real photographs of the band, instruments and performances.",
        albums: ["Former members", "Performances", "Rehearsals", "Medieval details", "Magdalena", "School"],
      },
      escola: {
        eyebrow: "Training",
        title: "Escoleta",
        lead: "Percussion school for children, young people and adults who want to learn the language of medieval drums and, in addition, our rhythms.",
        sections: [
          { title: "Learning", text: "Practical classes in rhythm, posture, coordination and group work. No previous experience playing an instrument is required." },
          { title: "For all ages", text: "A space designed so every student can progress at their own pace and discover the band from within." },
          {
            title: "Registration",
            text: "If you want to join the school, complete the registration form and we will get in touch with you.",
            linkUrl: "https://forms.gle/ALjHTu7mbhPjz3Wy5",
            linkLabel: "Register through the form",
          },
        ],
        mediaSection: {
          kicker: "YouTube",
          title: "Listen to our songs",
          lead: "If you want to discover our sound a bit more, here are some of our latest videos.",
          followText: "Follow us on YouTube",
          videos: [
            { title: "Video 1", url: "https://www.youtube.com/shorts/p7Hxf5n4cqk", embedUrl: "https://www.youtube.com/embed/p7Hxf5n4cqk?rel=0" },
            { title: "Video 2", url: "https://www.youtube.com/shorts/BTZTmE-T0Mg", embedUrl: "https://www.youtube.com/embed/BTZTmE-T0Mg?rel=0" },
            { title: "Video 3", url: "https://www.youtube.com/watch?v=h0r19T67-hs", embedUrl: "https://www.youtube.com/embed/h0r19T67-hs?rel=0" },
          ],
        },
      },
      merchandising: {
        eyebrow: "Items",
        title: "Merchandising",
        lead: "Informative catalog of the group’s products. Purchases will be made in person to simplify management. If you want any item, please get in touch with us.",
        products: [
          { title: "Escut T-shirt", description: "Official shirt featuring the band crest.", price: "14.99 €", image: "/fotoCamisetaEscudo_merch.jpeg" },
          { title: "DF T-shirt", description: "Classic version with the DF name and our section style.", price: "14.99 €", image: "/fotoCamisetaDF_merch.jpeg" },
          { title: "\"Puño\" T-shirt", description: "Model with the fist symbol and the energy of the group.", price: "14.99 €", image: "/fotoCamisetaPuño_merch.jpeg" },
          { title: "Scarf", description: "Identifying scarf for Magdalena DF.", price: "9.99 €", image: "/fotoPañuelo_merch.jpeg" },
          { title: "Sticker", description: "Sticker to carry the band’s cry, designed for kids and not-so-kids.", price: "1 €", image: "/fotoAdesivo_merch.jpeg" },
          { title: "Coming soon...", description: "More pieces and news in preparation.", image: "" },
        ],
        notice: "In-person purchase at rehearsals, events or after prior contact.",
      },
      contacte: {
        eyebrow: "Talk to us",
        title: "Contact",
        lead: "Channel for performance requests, school information or joining as a member.",
        schedule: "Rehearsals: THURSDAY from 20:00 to 21:00. At the Tetuán XIV Old Barracks.",
        contactItems: [
          { title: "Email:", value: "tamborsibombos.despertaferro@gmail.com", href: "mailto:tamborsibombos.despertaferro@gmail.com", actionLabel: "Write email" },
          { title: "Contact phone:", value: "Sergio - 628482355", href: "", actionLabel: "" },
          { title: "Instagram:", value: "@desperta_ferro_cs", href: "", actionLabel: "" },
          { title: "Tik Tok:", value: "", href: "", actionLabel: "" },
        ],
        phoneLabel: "Contact phone",
        phone: "628482355",
        legal: ["Belongs to: Germandat dels Cavallers de la Conquesta de Castellón.", "NIF G-12.070.090", "PO Box 565", "12080 Castellón", "Provincial Association 163", "National Association 14,408", "Founded on 15/01/1951"],
      },
    },
  },
} as const;
