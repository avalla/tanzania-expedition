import type { Lang } from "~/lib/i18n";

type EditorialCopy = {
  originEyebrow: string;
  originTitle: string;
  originParagraphs: [string, string];
  restartEyebrow: string;
  restartTitle: string;
  restartParagraphs: [string, string];
  kimotorokEyebrow: string;
  kimotorokTitle: string;
  kimotorokParagraphs: [string, string];
  bridgeQuote: string;
  socialTitle: string;
  socialBody: string;
  eventsLongBody: string;
  donateEyebrow: string;
  donateTitle: string;
  donateBody: string;
  donateCta: string;
};

const editorial: Record<Lang, EditorialCopy> = {
  it: {
    originEyebrow: "2022 · dove tutto ricomincia",
    originTitle: "Non è stato un viaggio da archiviare. È diventato un impegno.",
    originParagraphs: [
      "Nel 2022 Tanzania Expedition ha lavorato accanto a comunità swahili e masai, contribuendo con pozzi, accesso all'acqua e materiali essenziali. Ma la parte che ha lasciato il segno più profondo non entra facilmente in un elenco: sono stati i giorni condivisi, le persone incontrate e la consapevolezza di quanto una risorsa elementare come l'acqua possa cambiare la quotidianità di interi villaggi.",
      "Siamo tornati a casa diversi. Da quell'esperienza è nata una promessa semplice, forse proprio per questo difficile da ignorare: tornare. Non per ripetere lo stesso viaggio, ma per continuare un percorso già iniziato sul territorio.",
    ],
    restartEyebrow: "Oggi ripartiamo",
    restartTitle: "Dopo lo stop, Tanzania Expedition torna in modo indipendente.",
    restartParagraphs: [
      "Dopo alcuni anni di pausa il progetto riparte con la stessa direzione, ma con una struttura diversa. Drops in the Ocean non esiste più e Tanzania Expedition prosegue oggi autonomamente, mantenendo il rapporto con le comunità incontrate e l'obiettivo preso nel 2022.",
      "La raccolta fondi torna a passare anche dalla musica: benefit party in Italia e nel resto d'Europa, un punto informativo durante le serate, magliette e donazioni. Non un contorno al progetto, ma il meccanismo che permette di trasformare una serata in un intervento concreto sul territorio.",
    ],
    kimotorokEyebrow: "Kimotorok",
    kimotorokTitle: "Un pozzo in piena savana, pensato per più villaggi.",
    kimotorokParagraphs: [
      "Il prossimo obiettivo è tornare nella zona di Kimotorok e realizzare un pozzo con trivella in piena savana. L'idea è che possa servire più villaggi, non un singolo punto isolato, rendendo l'acqua disponibile per necessità che fanno parte della vita quotidiana.",
      "Acqua significa poter cucinare, lavare e lavarsi. Significa anche poter abbeverare il bestiame, elemento centrale per molte famiglie e comunità pastorali. Per questo il pozzo non viene raccontato come un simbolo: è un'infrastruttura pratica, con un impatto che continua ogni giorno.",
    ],
    bridgeQuote: "Abbiamo promesso di tornare. Questa volta vogliamo raccontare ogni passo.",
    socialTitle: "L'archivio sociale diventa parte del racconto",
    socialBody: "I contenuti pubblicati negli anni su Instagram e Facebook verranno raccolti qui come testimonianze delle missioni, mantenendo il collegamento al post originale e separando chiaramente ciò che è documentato da ciò che deve ancora essere verificato.",
    eventsLongBody: "Le serate benefit sono il punto in cui l'identità musicale del progetto incontra la missione sul campo. Ogni evento serve a raccogliere risorse, raccontare ciò che è stato fatto e spiegare con chiarezza il prossimo obiettivo. È anche il luogo in cui nasce una comunità europea attorno a un progetto che poi si concretizza in Tanzania.",
    donateEyebrow: "Dona ora",
    donateTitle: "Una donazione può diventare acqua.",
    donateBody: "Il progetto per Kimotorok viene sostenuto direttamente attraverso donazioni, benefit party e magliette. Il bonifico è il modo più immediato per contribuire alla prossima missione.",
    donateCta: "Vai ai dati per la donazione",
  },
  en: {
    originEyebrow: "2022 · where it starts again",
    originTitle: "It was not a trip to file away. It became a commitment.",
    originParagraphs: [
      "In 2022 Tanzania Expedition worked alongside Swahili and Maasai communities, contributing wells, access to water and essential supplies. Yet the deepest part of that experience is harder to reduce to a list: the days shared together, the people we met and the awareness of how something as basic as water can reshape daily life for entire villages.",
      "We came home changed. From that experience came a simple promise, and perhaps that is why it was so hard to ignore: to return. Not to repeat the same journey, but to continue a path that had already begun on the ground.",
    ],
    restartEyebrow: "Starting again",
    restartTitle: "After the pause, Tanzania Expedition returns independently.",
    restartParagraphs: [
      "After a few years on hold, the project starts again with the same direction but a different structure. Drops in the Ocean no longer exists, and Tanzania Expedition now continues independently while keeping faith with the communities we met and the commitment made in 2022.",
      "Fundraising also returns through music: benefit parties in Italy and across Europe, an information point at each event, T-shirts and donations. Music is not decoration around the project. It is one of the mechanisms that turns an evening together into tangible work on the ground.",
    ],
    kimotorokEyebrow: "Kimotorok",
    kimotorokTitle: "A well in the savannah, designed to serve several villages.",
    kimotorokParagraphs: [
      "The next objective is to return to the Kimotorok area and build a drilled well in the heart of the savannah. The goal is for it to serve several villages rather than one isolated point, making water available for everyday needs.",
      "Water means being able to cook, wash clothes and maintain personal hygiene. It also means providing water for livestock, which is central to many families and pastoral communities. The well is therefore not presented as a symbol, but as practical infrastructure with an impact that continues every day.",
    ],
    bridgeQuote: "We promised to return. This time we want to document every step.",
    socialTitle: "The social archive becomes part of the story",
    socialBody: "Photos and videos published over the years on Instagram and Facebook will be collected here as evidence of the missions, preserving links to the original posts and clearly separating verified material from content that still needs context.",
    eventsLongBody: "Benefit parties are where the musical identity of the project meets the work on the ground. Each event raises resources, tells the story of what has already been done and explains the next objective. It also builds a European community around a project that ultimately takes concrete form in Tanzania.",
    donateEyebrow: "Donate now",
    donateTitle: "A donation can become water.",
    donateBody: "The Kimotorok project is supported directly through donations, benefit parties and T-shirts. A bank transfer is the most immediate way to contribute to the next mission.",
    donateCta: "Go to donation details",
  },
  es: {
    originEyebrow: "2022 · donde todo vuelve a empezar",
    originTitle: "No fue un viaje para archivar. Se convirtió en un compromiso.",
    originParagraphs: [
      "En 2022 Tanzania Expedition trabajó junto a comunidades suajili y masái, contribuyendo con pozos, acceso al agua y materiales esenciales. Pero la parte más profunda de aquella experiencia no cabe fácilmente en una lista: fueron los días compartidos, las personas que conocimos y la conciencia de cuánto puede cambiar la vida cotidiana de pueblos enteros algo tan básico como el agua.",
      "Volvimos a casa diferentes. De aquella experiencia nació una promesa sencilla y, quizá por eso, imposible de ignorar: regresar. No para repetir el mismo viaje, sino para continuar un camino ya iniciado sobre el terreno.",
    ],
    restartEyebrow: "Hoy volvemos a empezar",
    restartTitle: "Tras la pausa, Tanzania Expedition regresa de forma independiente.",
    restartParagraphs: [
      "Después de algunos años de pausa, el proyecto retoma la misma dirección con una estructura diferente. Drops in the Ocean ya no existe y Tanzania Expedition continúa hoy de forma autónoma, manteniendo el compromiso con las comunidades conocidas y la promesa hecha en 2022.",
      "La recaudación vuelve a pasar también por la música: fiestas benéficas en Italia y Europa, un punto informativo durante los eventos, camisetas y donaciones. La música no es un adorno del proyecto, sino uno de los mecanismos que convierten una noche compartida en una intervención concreta.",
    ],
    kimotorokEyebrow: "Kimotorok",
    kimotorokTitle: "Un pozo en plena sabana, pensado para varios pueblos.",
    kimotorokParagraphs: [
      "El próximo objetivo es volver a la zona de Kimotorok y construir un pozo perforado en plena sabana. La idea es que pueda abastecer a varios pueblos, no a un único punto aislado, haciendo que el agua esté disponible para necesidades cotidianas.",
      "Agua significa poder cocinar, lavar la ropa y asearse. También significa dar de beber al ganado, fundamental para muchas familias y comunidades pastorales. Por eso el pozo no se presenta como un símbolo, sino como una infraestructura práctica con impacto diario.",
    ],
    bridgeQuote: "Prometimos volver. Esta vez queremos contar cada paso.",
    socialTitle: "El archivo social pasa a formar parte de la historia",
    socialBody: "Las fotos y vídeos publicados durante estos años en Instagram y Facebook se reunirán aquí como testimonios de las misiones, manteniendo el enlace con la publicación original y separando claramente el material verificado de lo que aún necesita contexto.",
    eventsLongBody: "Las fiestas benéficas son el punto donde la identidad musical del proyecto se encuentra con la misión sobre el terreno. Cada evento recauda recursos, cuenta lo que ya se ha hecho y explica el próximo objetivo. También crea una comunidad europea alrededor de un proyecto que después se concreta en Tanzania.",
    donateEyebrow: "Dona ahora",
    donateTitle: "Una donación puede convertirse en agua.",
    donateBody: "El proyecto de Kimotorok se sostiene directamente mediante donaciones, fiestas benéficas y camisetas. La transferencia bancaria es la forma más inmediata de contribuir a la próxima misión.",
    donateCta: "Ver los datos para donar",
  },
  fr: {
    originEyebrow: "2022 · là où tout recommence",
    originTitle: "Ce n'était pas un voyage à classer. C'est devenu un engagement.",
    originParagraphs: [
      "En 2022, Tanzania Expedition a travaillé aux côtés de communautés swahilies et massaï, en contribuant à des puits, à l'accès à l'eau et à du matériel essentiel. Mais la partie la plus profonde de cette expérience tient moins dans une liste que dans les jours partagés, les personnes rencontrées et la prise de conscience de l'impact qu'une ressource aussi fondamentale que l'eau peut avoir sur la vie quotidienne de villages entiers.",
      "Nous sommes rentrés changés. De cette expérience est née une promesse simple, et peut-être pour cela impossible à ignorer : revenir. Non pas pour répéter le même voyage, mais pour poursuivre un chemin déjà commencé sur le terrain.",
    ],
    restartEyebrow: "Aujourd'hui, nous repartons",
    restartTitle: "Après la pause, Tanzania Expedition revient de manière indépendante.",
    restartParagraphs: [
      "Après quelques années d'arrêt, le projet repart dans la même direction mais avec une structure différente. Drops in the Ocean n'existe plus et Tanzania Expedition continue aujourd'hui de façon autonome, en restant fidèle aux communautés rencontrées et à la promesse faite en 2022.",
      "La collecte de fonds repasse aussi par la musique : soirées caritatives en Italie et en Europe, point d'information pendant les événements, T-shirts et dons. La musique n'est pas un décor autour du projet, mais l'un des mécanismes qui transforment une soirée en action concrète sur le terrain.",
    ],
    kimotorokEyebrow: "Kimotorok",
    kimotorokTitle: "Un puits en pleine savane, conçu pour plusieurs villages.",
    kimotorokParagraphs: [
      "Le prochain objectif est de retourner dans la région de Kimotorok pour construire un puits foré en pleine savane. L'idée est qu'il puisse desservir plusieurs villages, et non un seul point isolé, afin de rendre l'eau disponible pour les besoins quotidiens.",
      "L'eau permet de cuisiner, de laver le linge et de se laver. Elle permet aussi d'abreuver le bétail, essentiel pour de nombreuses familles et communautés pastorales. Le puits n'est donc pas présenté comme un symbole, mais comme une infrastructure pratique dont l'impact se poursuit chaque jour.",
    ],
    bridgeQuote: "Nous avons promis de revenir. Cette fois, nous voulons raconter chaque étape.",
    socialTitle: "Les archives sociales deviennent une partie du récit",
    socialBody: "Les photos et vidéos publiées au fil des années sur Instagram et Facebook seront réunies ici comme témoignages des missions, avec un lien vers les publications originales et une distinction claire entre les contenus vérifiés et ceux qui demandent encore du contexte.",
    eventsLongBody: "Les soirées caritatives sont le point de rencontre entre l'identité musicale du projet et la mission sur le terrain. Chaque événement collecte des ressources, raconte ce qui a déjà été réalisé et explique le prochain objectif. Il construit également une communauté européenne autour d'un projet qui prend ensuite une forme concrète en Tanzanie.",
    donateEyebrow: "Faire un don",
    donateTitle: "Un don peut devenir de l'eau.",
    donateBody: "Le projet de Kimotorok est soutenu directement par les dons, les soirées caritatives et les T-shirts. Le virement bancaire est le moyen le plus immédiat de contribuer à la prochaine mission.",
    donateCta: "Voir les informations de don",
  },
};

export function getEditorialCopy(lang: Lang): EditorialCopy {
  return editorial[lang];
}
