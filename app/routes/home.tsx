import {
  ArrowDown,
  ArrowRight,
  Droplets,
  Facebook,
  HeartHandshake,
  Instagram,
  MapPin,
  Music2,
  PackageOpen,
  Sparkles,
  Users,
  Waves,
  Youtube,
} from "lucide-react";
import { Link, redirect } from "react-router";

import type { Route } from "./+types/home";
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  YOUTUBE_URL,
  SiteShell,
} from "~/components/site-shell";
import { buttonVariants } from "~/components/ui/button";
import { getEditorialCopy } from "~/lib/editorial";
import { getCopy, hrefFor, isLang } from "~/lib/i18n";
import { cn } from "~/lib/utils";

export function loader({ params }: Route.LoaderArgs) {
  if (!isLang(params.lang)) return redirect("/it");
  return {
    lang: params.lang,
    copy: getCopy(params.lang),
    editorial: getEditorialCopy(params.lang),
  };
}

export function meta({ data }: Route.MetaArgs) {
  const copy = data?.copy;
  const title = copy
    ? "Tanzania Expedition · " + copy.hero.title
    : "Tanzania Expedition";
  const description = copy?.hero.lead ?? "Tanzania Expedition";

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}

function EditorialBlock({
  eyebrow,
  title,
  paragraphs,
  tone = "dark",
}: {
  eyebrow: string;
  title: string;
  paragraphs: [string, string];
  tone?: "dark" | "light";
}) {
  const light = tone === "light";

  return (
    <div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-16">
      <div>
        <p
          className={cn(
            "text-xs font-extrabold uppercase tracking-[0.28em]",
            light ? "text-[#df3946]" : "text-[#fab937]",
          )}
        >
          {eyebrow}
        </p>
        <h2
          className={cn(
            "text-balance mt-5 font-display text-5xl font-black uppercase leading-[0.9] md:text-7xl",
            light ? "text-[#504e53]" : "text-[#efe6d1]",
          )}
        >
          {title}
        </h2>
      </div>
      <div className="space-y-6">
        {paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className={cn(
              "text-lg leading-8",
              light ? "text-[#504e53]/76" : "text-[#efe6d1]/78",
            )}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { lang, copy, editorial } = loaderData;

  const promiseCards = [
    {
      Icon: Droplets,
      title: copy.promise.pillars[0][0],
      body: copy.promise.pillars[0][1],
      accent: "#00a875",
    },
    {
      Icon: Sparkles,
      title: copy.promise.pillars[1][0],
      body: copy.promise.pillars[1][1],
      accent: "#fab937",
    },
    {
      Icon: PackageOpen,
      title: copy.promise.pillars[2][0],
      body: copy.promise.pillars[2][1],
      accent: "#df3946",
    },
    {
      Icon: Users,
      title: copy.promise.pillars[3][0],
      body: copy.promise.pillars[3][1],
      accent: "#15466c",
    },
  ];

  const currentCards = [
    {
      Icon: Droplets,
      title: copy.current.cards[0][0],
      body: copy.current.cards[0][1],
    },
    {
      Icon: HeartHandshake,
      title: copy.current.cards[1][0],
      body: copy.current.cards[1][1],
    },
    {
      Icon: MapPin,
      title: copy.current.cards[2][0],
      body: copy.current.cards[2][1],
    },
  ];

  const documentary = {
    it: {
      eyebrow: "Documentario · Tanzania 2022",
      title: "La spedizione del 2022, raccontata dalle immagini.",
      body: "Il documentario raccoglie la missione svolta in Tanzania nel 2022: luoghi, incontri e momenti del progetto da cui è nata la promessa di tornare.",
      cta: "Guarda su YouTube",
    },
    en: {
      eyebrow: "Documentary · Tanzania 2022",
      title: "The 2022 expedition, told through images.",
      body: "The documentary follows the 2022 mission in Tanzania: places, encounters and moments from the project that led to the promise to return.",
      cta: "Watch on YouTube",
    },
    es: {
      eyebrow: "Documental · Tanzania 2022",
      title: "La expedición de 2022, contada a través de imágenes.",
      body: "El documental recoge la misión realizada en Tanzania en 2022: lugares, encuentros y momentos del proyecto del que nació la promesa de volver.",
      cta: "Ver en YouTube",
    },
    fr: {
      eyebrow: "Documentaire · Tanzanie 2022",
      title: "L'expédition de 2022 racontée en images.",
      body: "Le documentaire retrace la mission menée en Tanzanie en 2022 : lieux, rencontres et moments du projet à l'origine de la promesse de revenir.",
      cta: "Voir sur YouTube",
    },
  }[lang];

  const qrLabel = {
    it: "Scansiona il QR",
    en: "Scan the QR",
    es: "Escanea el QR",
    fr: "Scannez le QR",
  }[lang];

  return (
    <SiteShell lang={lang}>
      <main>
        <section className="relative flex min-h-[94svh] overflow-hidden bg-[#545156] pt-20 text-[#efe6d1]">
          <div className="communique-zigzag absolute right-[5%] top-20 hidden h-10 w-48 opacity-90 lg:block" />
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-[#df3946]" />

          <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-5 pb-8 pt-20 lg:grid-cols-[1.04fr_.96fr] lg:items-center lg:px-8 lg:pb-8">
            <div className="relative z-10">
              <p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-[#fab937]">
                <MapPin className="size-4" />
                {copy.hero.eyebrow}
              </p>

              <h1 className="text-balance font-display text-[clamp(3.3rem,8vw,8rem)] font-black uppercase leading-[0.82] tracking-[-0.035em]">
                <span className="block">{copy.hero.title.split(".")[0]}.</span>
                <span className="mt-2 block text-[#fab937]">
                  {copy.hero.title.split(".").slice(1).join(".").trim()}
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-7 text-[#efe6d1]/82 md:text-lg">
                {copy.hero.lead}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  to={hrefFor(lang, "support")}
                  className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#df3946] px-7 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#eb4854]"
                >
                  {copy.hero.primary}
                  <HeartHandshake className="size-5" />
                </Link>
                <a
                  href="#documentary"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#efe6d1]/35 px-7 py-3.5 font-bold text-[#efe6d1] transition hover:bg-white/8"
                >
                  <Youtube className="size-5 text-[#fab937]" />
                  {documentary.eyebrow}
                </a>
              </div>

              <a
                href="#promise"
                className="mt-14 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#efe6d1]/55 transition hover:text-[#efe6d1]"
              >
                <ArrowDown className="size-4" />
                {copy.hero.scroll}
              </a>
            </div>

            <div
              aria-hidden="true"
              className="relative mx-auto flex min-h-[520px] w-full max-w-[620px] items-end justify-center self-end overflow-hidden"
            >
              <img
                src="/media/communique-illustration-updated.svg"
                alt=""
                className="max-h-[500px] w-auto max-w-full object-contain object-bottom"
              />
            </div>
          </div>
        </section>

        <section id="promise" className="bg-[#efe6d1] text-[#504e53]">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
            <EditorialBlock
              eyebrow={editorial.originEyebrow}
              title={editorial.originTitle}
              paragraphs={editorial.originParagraphs}
              tone="light"
            />

            <div className="mt-16 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {promiseCards.map(({ Icon, title, body, accent }) => (
                <article
                  key={title}
                  className="relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-[#504e53]/12 bg-[#f8f1e2] p-6 sm:p-7"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-2"
                    style={{ backgroundColor: accent }}
                  />
                  <Icon className="size-7" style={{ color: accent }} />
                  <h3 className="mt-6 font-display text-3xl font-black uppercase">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#504e53]/80">
                    {body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#545156] text-[#efe6d1]">
          <div className="communique-slashes absolute -right-16 top-10 h-52 w-72 opacity-30" />
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
            <EditorialBlock
              eyebrow={editorial.restartEyebrow}
              title={editorial.restartTitle}
              paragraphs={editorial.restartParagraphs}
            />
            <blockquote className="mx-auto mt-20 max-w-5xl text-balance text-center font-display text-5xl font-black uppercase leading-[0.92] text-[#fab937] md:text-7xl">
              “{editorial.bridgeQuote}”
            </blockquote>
          </div>
        </section>

        <section id="documentary" className="bg-[#efe6d1] text-[#504e53]">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
            <div className="grid min-w-0 gap-10 lg:grid-cols-[minmax(0,.82fr)_minmax(0,1.18fr)] lg:items-center">
              <div>
                <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.25em] text-[#df3946]">
                  <Youtube className="size-4" />
                  {documentary.eyebrow}
                </p>
                <h2 className="text-balance mt-5 font-display text-6xl font-black uppercase leading-[0.9] md:text-8xl">
                  {documentary.title}
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-[#504e53]/72">
                  {documentary.body}
                </p>
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#df3946] px-7 py-3.5 font-bold text-white transition hover:-translate-y-0.5"
                >
                  <Youtube className="size-5" />
                  {documentary.cta}
                </a>
              </div>

              <div className="min-w-0 overflow-hidden rounded-[1.8rem] border-[4px] border-[#545156] bg-black shadow-xl">
                <div className="aspect-video">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube-nocookie.com/embed/51VFiMRKIp8?rel=0"
                    title="Tanzania Expedition 2022 documentary"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#545156] text-[#efe6d1]">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-[.86fr_1.14fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#00a875]">
                  {editorial.kimotorokEyebrow}
                </p>
                <h2 className="text-balance mt-5 font-display text-6xl font-black uppercase leading-[0.9] md:text-8xl">
                  {editorial.kimotorokTitle}
                </h2>
                <div className="mt-7 space-y-5">
                  {editorial.kimotorokParagraphs.map((paragraph) => (
                    <p key={paragraph} className="text-lg leading-8 text-[#efe6d1]/76">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <Link
                  to={hrefFor(lang, "project")}
                  className="mt-8 inline-flex items-center gap-2 font-bold text-[#fab937]"
                >
                  {copy.current.cta}
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              <div className="grid content-start gap-4">
                {currentCards.map(({ Icon, title, body }, index) => (
                  <article
                    key={title}
                    className="rounded-[1.6rem] border border-white/12 bg-white/[0.045] p-6 sm:p-7"
                  >
                    <div className="flex items-start gap-5">
                      <div
                        className={cn(
                          "grid size-12 shrink-0 place-items-center rounded-full",
                          index === 0 && "bg-[#00a875] text-white",
                          index === 1 && "bg-[#fab937] text-[#504e53]",
                          index === 2 && "bg-[#df3946] text-white",
                        )}
                      >
                        <Icon className="size-6" />
                      </div>
                      <div>
                        <h3 className="font-display text-3xl font-black uppercase">
                          {title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-[#efe6d1]/80">
                          {body}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#efe6d1] text-[#504e53]">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
            <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#00a875]">
                  {copy.stories.eyebrow}
                </p>
                <h2 className="text-balance mt-4 font-display text-6xl font-black uppercase leading-[0.9] md:text-8xl">
                  {editorial.socialTitle}
                </h2>
              </div>
              <p className="text-lg leading-8 text-[#504e53]/72">
                {editorial.socialBody}
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="group rounded-[1.6rem] bg-[#df3946] p-8 text-white transition-transform hover:-translate-y-1 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#15466c]"
              >
                <Instagram className="size-8 text-[#fab937]" />
                <h3 className="mt-20 font-display text-4xl font-black uppercase">
                  Instagram
                </h3>
                <p className="mt-3 text-sm text-white/90">@drops.in.the.ocean</p>
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noreferrer"
                className="group rounded-[1.6rem] bg-[#00a875] p-8 text-white transition-transform hover:-translate-y-1 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#15466c]"
              >
                <Facebook className="size-8 text-[#fab937]" />
                <h3 className="mt-20 font-display text-4xl font-black uppercase">
                  Facebook
                </h3>
                <p className="mt-3 text-sm text-white/90">Tanzania Expedition</p>
              </a>
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noreferrer"
                className="group rounded-[1.6rem] bg-[#15466c] p-8 text-white transition-transform hover:-translate-y-1 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#df3946]"
              >
                <Youtube className="size-8 text-[#fab937]" />
                <h3 className="mt-20 font-display text-4xl font-black uppercase">
                  YouTube
                </h3>
                <p className="mt-3 text-sm text-white/90">Tanzania 2022</p>
              </a>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#df3946] text-white">
          <div className="communique-zigzag absolute right-8 top-8 h-12 w-56 opacity-45" />
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,.82fr)] lg:items-center lg:px-8 lg:py-28">
            <div>
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#fab937]">
                <Music2 className="size-4" />
                {copy.events.eyebrow}
              </p>
              <h2 className="text-balance mt-4 font-display text-6xl font-black uppercase leading-[0.88] md:text-8xl">
                {copy.events.title}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
                {editorial.eventsLongBody}
              </p>
              <Link
                to={hrefFor(lang, "events")}
                className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#efe6d1] px-7 py-3.5 font-bold text-[#504e53]"
              >
                {copy.events.cta}
                <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="min-w-0 self-center rounded-[1.6rem] bg-[#545156] p-6 sm:p-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#fab937]">
                Benefit calendar
              </span>
              <div className="mt-8 space-y-4">
                {["Italy", "Europe", "Tanzania Expedition"].map((item) => (
                  <div
                    key={item}
                    className="flex flex-wrap items-center justify-between gap-3 border-b border-white/12 pb-4"
                  >
                    <span className="font-display text-2xl font-black uppercase">
                      {item}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-white/50">
                      coming soon
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-white/55">{copy.events.empty}</p>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#545156] text-[#efe6d1]">
          <div className="absolute inset-x-0 top-0 h-3 bg-[#fab937]" />
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-[1fr_280px] lg:items-center lg:px-8 lg:py-28">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.26em] text-[#fab937]">
                {editorial.donateEyebrow}
              </p>
              <h2 className="text-balance mt-4 max-w-4xl font-display text-6xl font-black uppercase leading-[0.88] md:text-8xl">
                {editorial.donateTitle}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#efe6d1]/75">
                {editorial.donateBody}
              </p>
              <Link
                to={hrefFor(lang, "support")}
                className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#df3946] px-7 py-3.5 font-bold text-white"
              >
                <Waves className="size-5 text-[#fab937]" />
                {editorial.donateCta}
                <ArrowRight className="size-5" />
              </Link>
            </div>

            <div className="mx-auto w-full max-w-[280px] rounded-[1.6rem] bg-[#efe6d1] p-5 text-center text-[#504e53] shadow-xl lg:mx-0">
              <img
                src="/media/qr-donation.webp"
                alt="QR code Tanzania Expedition"
                className="mx-auto block aspect-square w-full max-w-[220px] rounded-xl bg-[#545156] object-contain"
              />
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-[#df3946]">
                {qrLabel}
              </p>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
