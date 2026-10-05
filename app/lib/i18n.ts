export const LANGUAGES = ["it", "en", "es", "fr"] as const;
export type Lang = (typeof LANGUAGES)[number];

export const PAGE_KEYS = [
  "project",
  "missions",
  "stories",
  "events",
  "about",
  "support",
] as const;
export type PageKey = (typeof PAGE_KEYS)[number];

export const PAGE_SLUGS: Record<PageKey, Record<Lang, string>> = {
  project: { it: "progetto", en: "project", es: "proyecto", fr: "projet" },
  missions: { it: "missioni", en: "missions", es: "misiones", fr: "missions" },
  stories: { it: "storie", en: "stories", es: "historias", fr: "histoires" },
  events: { it: "eventi", en: "events", es: "eventos", fr: "evenements" },
  about: {
    it: "chi-siamo",
    en: "about",
    es: "quienes-somos",
    fr: "qui-sommes-nous",
  },
  support: {
    it: "sostienici",
    en: "support",
    es: "apoyanos",
    fr: "soutenez-nous",
  },
};

export function isLang(value: string | undefined): value is Lang {
  return LANGUAGES.includes(value as Lang);
}

export function resolvePage(
  lang: Lang,
  slug: string | undefined,
): PageKey | null {
  if (!slug) return null;
  return PAGE_KEYS.find((page) => PAGE_SLUGS[page][lang] === slug) ?? null;
}

export function hrefFor(
  lang: Lang,
  page?: PageKey,
  detail?: string,
): string {
  if (!page) return "/" + lang;
  const base = "/" + lang + "/" + PAGE_SLUGS[page][lang];
  return detail ? base + "/" + detail : base;
}

const it = {
  localeName: "Italiano",
  nav: {
    project: "Progetto",
    missions: "Missioni",
    stories: "Storie",
    events: "Eventi",
    about: "Chi siamo",
    support: "Sostienici",
  },
  hero: {
    eyebrow: "Tanzania Expedition · ritorno a Kimotorok",
    title: "Una promessa fatta nel 2022. Ora torniamo.",
    lead: "Torniamo nella zona di Kimotorok per costruire un nuovo pozzo in piena savana, pensato per servire più villaggi e sostenere la vita quotidiana delle comunità locali.",
    primary: "Sostieni il progetto",
    secondary: "Missione 2022",
    scroll: "Scopri la storia",
  },
  promise: {
    eyebrow: "La promessa",
    title: "Siamo partiti per aiutare. Siamo tornati con una promessa: tornare.",
    body: "Nel 2022 abbiamo sostenuto comunità swahili e masai con pozzi, accesso all'acqua, materiali essenziali e momenti di condivisione. Quell'esperienza ci ha cambiati e ha dato origine alla nuova missione.",
    pillars: [
      ["Acqua", "Accesso a una risorsa essenziale"],
      ["Pozzi", "Infrastrutture concrete sul territorio"],
      ["Materiali", "Supporto alle necessità quotidiane"],
      ["Comunità", "Relazioni e condivisione"],
    ],
  },
  mission2022: {
    eyebrow: "Missione precedente",
    title: "Tanzania · 2022",
    body: "La missione del 2022 è il punto da cui ripartiamo: interventi legati all'acqua, materiali essenziali e collaborazione con comunità swahili e masai.",
    cta: "Esplora la missione 2022",
    mediaTitle: "Archivio multimediale",
    mediaBody: "Stiamo catalogando foto e video originali delle missioni precedenti. Nel frattempo puoi consultare gli archivi social ufficiali.",
  },
  current: {
    eyebrow: "Prossima missione",
    title: "Kimotorok: un nuovo pozzo in piena savana",
    body: "L'obiettivo è costruire un pozzo con trivella che possa servire più villaggi e rendere l'acqua disponibile per persone, bestiame e attività quotidiane.",
    cards: [
      ["Acqua", "Per cucinare, lavare e lavarsi."],
      ["Bestiame", "Per abbeverare gli animali delle comunità pastorali."],
      ["Più villaggi", "Un'infrastruttura pensata per servire una zona più ampia."],
    ],
    cta: "Scopri il progetto",
  },
  stories: {
    eyebrow: "Storie",
    title: "Volti, luoghi e momenti della Tanzania",
    body: "Il sito nasce anche come archivio delle missioni. Foto, video e racconti verranno organizzati per anno, luogo e progetto, mantenendo il collegamento alla fonte originale quando disponibile.",
    instagram: "Apri Instagram",
    facebook: "Apri Facebook",
    pending: "Media missione 2022 in catalogazione",
  },
  events: {
    eyebrow: "Benefit parties",
    title: "La musica finanzia il ritorno",
    body: "Tanzania Expedition riparte anche attraverso benefit party in Italia e in Europa. Durante gli eventi sarà presente un punto informativo del progetto e sarà possibile sostenerlo.",
    empty: "Le prossime date verranno pubblicate qui.",
    cta: "Vai agli eventi",
  },
  support: {
    eyebrow: "Sostieni la missione",
    title: "Tre modi per camminare con noi",
    body: "Puoi partecipare ai benefit party, fare una donazione oppure sostenere il progetto acquistando una maglietta Tanzania Expedition.",
    donate: "Dona",
    attend: "Partecipa",
    tshirt: "Magliette",
    donationTitle: "Donazione tramite bonifico",
    accountName: "Federico Donatelli",
    ibanLabel: "IBAN",
    iban: "IT53 F036 6901 6004 4424 3232 696",
    bicLabel: "BIC / SWIFT",
    bic: "REVOITM2",
    copy: "Copia IBAN",
    copied: "IBAN copiato",
  },
  about: {
    title: "Tanzania Expedition riparte",
    body: "Dopo alcuni anni di stop il progetto torna con un obiettivo preciso: mantenere la promessa fatta nel 2022 e continuare a sostenere le comunità incontrate in Tanzania.",
    note: "Il progetto non opera più tramite l'associazione Drops in the Ocean, che non esiste più. Tanzania Expedition prosegue oggi in forma indipendente.",
  },
  common: {
    instagram: "Instagram",
    facebook: "Facebook",
    menu: "Menu",
    sourceNote: "Prima versione · contenuti e archivio media in aggiornamento",
  },
};

const en = {
  localeName: "English",
  nav: {
    project: "Project",
    missions: "Missions",
    stories: "Stories",
    events: "Events",
    about: "About",
    support: "Support us",
  },
  hero: {
    eyebrow: "Tanzania Expedition · returning to Kimotorok",
    title: "A promise made in 2022. Now we're going back.",
    lead: "We are returning to the Kimotorok area to build a new drilled well in the heart of the savannah, designed to serve several villages and support everyday life.",
    primary: "Support the project",
    secondary: "2022 mission",
    scroll: "Discover the story",
  },
  promise: {
    eyebrow: "The promise",
    title: "We left to help. We came home with a promise: to return.",
    body: "In 2022 we supported Swahili and Maasai communities with wells, access to water, essential supplies and meaningful moments together. That experience changed us and shaped the new mission.",
    pillars: [
      ["Water", "Access to an essential resource"],
      ["Wells", "Tangible infrastructure on the ground"],
      ["Supplies", "Support for everyday needs"],
      ["Community", "Relationships and shared experience"],
    ],
  },
  mission2022: {
    eyebrow: "Previous mission",
    title: "Tanzania · 2022",
    body: "The 2022 mission is where this new chapter begins: work around water, essential supplies and collaboration with Swahili and Maasai communities.",
    cta: "Explore the 2022 mission",
    mediaTitle: "Media archive",
    mediaBody: "We are cataloguing original photos and videos from previous missions. In the meantime, the official social archives remain available.",
  },
  current: {
    eyebrow: "Next mission",
    title: "Kimotorok: a new well in the savannah",
    body: "The goal is to build a drilled well that can serve multiple villages and provide water for people, livestock and daily activities.",
    cards: [
      ["Water", "For cooking, washing clothes and personal hygiene."],
      ["Livestock", "To provide water for animals in pastoral communities."],
      ["Several villages", "Infrastructure designed to serve a wider area."],
    ],
    cta: "Discover the project",
  },
  stories: {
    eyebrow: "Stories",
    title: "Faces, places and moments from Tanzania",
    body: "The website is also becoming an archive of the missions. Photos, videos and stories will be organised by year, place and project, retaining a link to the original source whenever available.",
    instagram: "Open Instagram",
    facebook: "Open Facebook",
    pending: "2022 mission media being catalogued",
  },
  events: {
    eyebrow: "Benefit parties",
    title: "Music helps fund the return",
    body: "Tanzania Expedition is restarting through benefit parties in Italy and across Europe. Each event will include an information point where people can learn about and support the project.",
    empty: "Upcoming dates will be published here.",
    cta: "See events",
  },
  support: {
    eyebrow: "Support the mission",
    title: "Three ways to walk alongside us",
    body: "You can join a benefit party, make a donation, or support the project by purchasing a Tanzania Expedition T-shirt.",
    donate: "Donate",
    attend: "Attend",
    tshirt: "T-shirts",
    donationTitle: "Donation by bank transfer",
    accountName: "Federico Donatelli",
    ibanLabel: "IBAN",
    iban: "IT53 F036 6901 6004 4424 3232 696",
    bicLabel: "BIC / SWIFT",
    bic: "REVOITM2",
    copy: "Copy IBAN",
    copied: "IBAN copied",
  },
  about: {
    title: "Tanzania Expedition starts again",
    body: "After a few years on hold, the project returns with a clear goal: keep the promise made in 2022 and continue supporting the communities we met in Tanzania.",
    note: "The project no longer operates through the Drops in the Ocean association, which no longer exists. Tanzania Expedition now continues independently.",
  },
  common: {
    instagram: "Instagram",
    facebook: "Facebook",
    menu: "Menu",
    sourceNote: "First draft · content and media archive being updated",
  },
};

const es = {
  localeName: "Español",
  nav: {
    project: "Proyecto",
    missions: "Misiones",
    stories: "Historias",
    events: "Eventos",
    about: "Quiénes somos",
    support: "Apóyanos",
  },
  hero: {
    eyebrow: "Tanzania Expedition · regreso a Kimotorok",
    title: "Una promesa hecha en 2022. Ahora volvemos.",
    lead: "Volvemos a la zona de Kimotorok para construir un nuevo pozo perforado en plena sabana, pensado para abastecer a varios pueblos y apoyar la vida cotidiana.",
    primary: "Apoya el proyecto",
    secondary: "Misión 2022",
    scroll: "Descubre la historia",
  },
  promise: {
    eyebrow: "La promesa",
    title: "Fuimos para ayudar. Volvimos con una promesa: regresar.",
    body: "En 2022 apoyamos a comunidades suajili y masái con pozos, acceso al agua, materiales esenciales y momentos de convivencia. Aquella experiencia nos cambió y dio forma a la nueva misión.",
    pillars: [
      ["Agua", "Acceso a un recurso esencial"],
      ["Pozos", "Infraestructuras concretas sobre el terreno"],
      ["Materiales", "Apoyo a las necesidades cotidianas"],
      ["Comunidad", "Relaciones y convivencia"],
    ],
  },
  mission2022: {
    eyebrow: "Misión anterior",
    title: "Tanzania · 2022",
    body: "La misión de 2022 es el punto de partida de esta nueva etapa: agua, materiales esenciales y colaboración con comunidades suajili y masái.",
    cta: "Explora la misión 2022",
    mediaTitle: "Archivo multimedia",
    mediaBody: "Estamos catalogando las fotos y los vídeos originales de las misiones anteriores. Mientras tanto puedes consultar los archivos sociales oficiales.",
  },
  current: {
    eyebrow: "Próxima misión",
    title: "Kimotorok: un nuevo pozo en la sabana",
    body: "El objetivo es construir un pozo perforado que pueda abastecer a varios pueblos y proporcionar agua para las personas, el ganado y las actividades cotidianas.",
    cards: [
      ["Agua", "Para cocinar, lavar la ropa y asearse."],
      ["Ganado", "Para dar de beber a los animales de las comunidades pastorales."],
      ["Varios pueblos", "Una infraestructura pensada para una zona más amplia."],
    ],
    cta: "Descubre el proyecto",
  },
  stories: {
    eyebrow: "Historias",
    title: "Rostros, lugares y momentos de Tanzania",
    body: "La web también será un archivo de las misiones. Las fotos, vídeos e historias se organizarán por año, lugar y proyecto, manteniendo el enlace a la fuente original cuando esté disponible.",
    instagram: "Abrir Instagram",
    facebook: "Abrir Facebook",
    pending: "Medios de la misión 2022 en catalogación",
  },
  events: {
    eyebrow: "Fiestas benéficas",
    title: "La música financia el regreso",
    body: "Tanzania Expedition vuelve también a través de fiestas benéficas en Italia y por toda Europa. Cada evento incluirá un punto informativo del proyecto.",
    empty: "Las próximas fechas se publicarán aquí.",
    cta: "Ver eventos",
  },
  support: {
    eyebrow: "Apoya la misión",
    title: "Tres formas de caminar con nosotros",
    body: "Puedes participar en las fiestas benéficas, hacer una donación o apoyar el proyecto comprando una camiseta de Tanzania Expedition.",
    donate: "Donar",
    attend: "Participar",
    tshirt: "Camisetas",
    donationTitle: "Donación por transferencia bancaria",
    accountName: "Federico Donatelli",
    ibanLabel: "IBAN",
    iban: "IT53 F036 6901 6004 4424 3232 696",
    bicLabel: "BIC / SWIFT",
    bic: "REVOITM2",
    copy: "Copiar IBAN",
    copied: "IBAN copiado",
  },
  about: {
    title: "Tanzania Expedition vuelve",
    body: "Tras algunos años de pausa, el proyecto regresa con un objetivo claro: cumplir la promesa hecha en 2022 y seguir apoyando a las comunidades que conocimos en Tanzania.",
    note: "El proyecto ya no opera a través de la asociación Drops in the Ocean, que ya no existe. Tanzania Expedition continúa ahora de forma independiente.",
  },
  common: {
    instagram: "Instagram",
    facebook: "Facebook",
    menu: "Menú",
    sourceNote: "Primera versión · contenidos y archivo multimedia en actualización",
  },
};

const fr = {
  localeName: "Français",
  nav: {
    project: "Projet",
    missions: "Missions",
    stories: "Histoires",
    events: "Événements",
    about: "Qui sommes-nous",
    support: "Soutenez-nous",
  },
  hero: {
    eyebrow: "Tanzania Expedition · retour à Kimotorok",
    title: "Une promesse faite en 2022. Aujourd'hui, nous repartons.",
    lead: "Nous retournons dans la région de Kimotorok pour construire un nouveau puits foré en pleine savane, conçu pour desservir plusieurs villages et soutenir la vie quotidienne.",
    primary: "Soutenir le projet",
    secondary: "Mission 2022",
    scroll: "Découvrir l'histoire",
  },
  promise: {
    eyebrow: "La promesse",
    title: "Nous sommes partis pour aider. Nous sommes revenus avec une promesse : revenir.",
    body: "En 2022, nous avons soutenu des communautés swahilies et massaï avec des puits, de l'eau, du matériel essentiel et des moments de partage. Cette expérience nous a transformés et a donné naissance à la nouvelle mission.",
    pillars: [
      ["Eau", "Accès à une ressource essentielle"],
      ["Puits", "Des infrastructures concrètes sur le terrain"],
      ["Matériel", "Un soutien aux besoins quotidiens"],
      ["Communauté", "Relations et moments de partage"],
    ],
  },
  mission2022: {
    eyebrow: "Mission précédente",
    title: "Tanzanie · 2022",
    body: "La mission de 2022 est le point de départ de ce nouveau chapitre : eau, matériel essentiel et collaboration avec les communautés swahilies et massaï.",
    cta: "Explorer la mission 2022",
    mediaTitle: "Archives multimédias",
    mediaBody: "Nous cataloguons les photos et vidéos originales des missions précédentes. En attendant, les archives sociales officielles restent accessibles.",
  },
  current: {
    eyebrow: "Prochaine mission",
    title: "Kimotorok : un nouveau puits dans la savane",
    body: "L'objectif est de construire un puits foré pouvant desservir plusieurs villages et fournir de l'eau aux personnes, au bétail et aux activités quotidiennes.",
    cards: [
      ["Eau", "Pour cuisiner, laver le linge et se laver."],
      ["Bétail", "Pour abreuver les animaux des communautés pastorales."],
      ["Plusieurs villages", "Une infrastructure pensée pour une zone plus large."],
    ],
    cta: "Découvrir le projet",
  },
  stories: {
    eyebrow: "Histoires",
    title: "Visages, lieux et moments de Tanzanie",
    body: "Le site devient aussi une archive des missions. Photos, vidéos et récits seront organisés par année, lieu et projet, avec un lien vers la source originale lorsqu'elle est disponible.",
    instagram: "Ouvrir Instagram",
    facebook: "Ouvrir Facebook",
    pending: "Médias de la mission 2022 en cours de catalogage",
  },
  events: {
    eyebrow: "Soirées caritatives",
    title: "La musique finance le retour",
    body: "Tanzania Expedition repart aussi grâce à des soirées caritatives en Italie et dans toute l'Europe. Chaque événement comprendra un point d'information sur le projet.",
    empty: "Les prochaines dates seront publiées ici.",
    cta: "Voir les événements",
  },
  support: {
    eyebrow: "Soutenir la mission",
    title: "Trois façons de marcher à nos côtés",
    body: "Vous pouvez participer aux soirées caritatives, faire un don ou soutenir le projet en achetant un T-shirt Tanzania Expedition.",
    donate: "Faire un don",
    attend: "Participer",
    tshirt: "T-shirts",
    donationTitle: "Don par virement bancaire",
    accountName: "Federico Donatelli",
    ibanLabel: "IBAN",
    iban: "IT53 F036 6901 6004 4424 3232 696",
    bicLabel: "BIC / SWIFT",
    bic: "REVOITM2",
    copy: "Copier l'IBAN",
    copied: "IBAN copié",
  },
  about: {
    title: "Tanzania Expedition repart",
    body: "Après quelques années d'arrêt, le projet revient avec un objectif clair : tenir la promesse faite en 2022 et continuer à soutenir les communautés rencontrées en Tanzanie.",
    note: "Le projet n'opère plus à travers l'association Drops in the Ocean, qui n'existe plus. Tanzania Expedition poursuit aujourd'hui son chemin de manière indépendante.",
  },
  common: {
    instagram: "Instagram",
    facebook: "Facebook",
    menu: "Menu",
    sourceNote: "Première version · contenus et archives multimédias en cours de mise à jour",
  },
};

export const COPY = { it, en, es, fr } as const;

export function getCopy(lang: Lang) {
  return COPY[lang];
}
