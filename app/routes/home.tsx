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
} from "lucide-react";
import { Link, redirect } from "react-router";

import type { Route } from "./+types/home";
import { SavannaBackdrop } from "~/components/savanna-backdrop";
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
            light ? "text-[#e94235]" : "text-[#f5b73b]",
          )}
        >
          {eyebrow}
        </p>
        <h2
          className={cn(
            "text-balance mt-5 font-display text-5xl font-black uppercase leading-[0.9] md:text-7xl",
            light ? "text-[#171411]" : "text-white",
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
              light ? "text-[#171411]/68" : "text-white/64",
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
    },
    {
      Icon: Sparkles,
      title: copy.promise.pillars[1][0],
      body: copy.promise.pillars[1][1],
    },
    {
      Icon: PackageOpen,
      title: copy.promise.pillars[2][0],
      body: copy.promise.pillars[2][1],
    },
    {
      Icon: Users,
      title: copy.promise.pillars[3][0],
      body: copy.promise.pillars[3][1],
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
      title: "Guarda la missione attraverso le immagini.",
      body: "Il documentario del 2022 raccoglie luoghi, incontri e momenti del progetto. È il modo più diretto per capire da dove nasce la promessa di tornare.",
      cta: "Apri su YouTube",
    },
    en: {
      eyebrow: "Documentary · Tanzania 2022",
      title: "Watch the mission through its images.",
      body: "The 2022 documentary brings together places, encounters and moments from the project. It is the most direct way to understand where the promise to return began.",
      cta: "Open on YouTube",
    },
    es: {
      eyebrow: "Documental · Tanzania 2022",
      title: "Mira la misión a través de sus imágenes.",
      body: "El documental de 2022 reúne lugares, encuentros y momentos del proyecto. Es la forma más directa de entender dónde nació la promesa de volver.",
      cta: "Abrir en YouTube",
    },
    fr: {
      eyebrow: "Documentaire · Tanzanie 2022",
      title: "Découvrez la mission à travers les images.",
      body: "Le documentaire de 2022 rassemble lieux, rencontres et moments du projet. C'est la manière la plus directe de comprendre d'où vient la promesse de revenir.",
      cta: "Ouvrir sur YouTube",
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
        <div
          aria-hidden="true"
          className="pointer-events-none fixed bottom-0 right-0 z-30 hidden w-[250px] opacity-[0.16] 2xl:block [mask-image:linear-gradient(to_top,black_60%,transparent_100%)]"
        >
          <img
            src="/media/flyer-figure.webp"
            alt=""
            className="h-auto w-full"
          />
        </div>

        <section className="relative flex min-h-[94svh] items-end overflow-hidden pt-20">
          <SavannaBackdrop />
          <div className="expedition-circuit absolute inset-y-0 right-0 hidden w-[34%] opacity-35 lg:block" />
          <img
            src="/media/flyer-celestial.webp"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute right-[12%] top-28 hidden w-80 opacity-75 xl:block"
          />
          <div className="absolute left-0 top-20 h-2 w-full bg-[linear-gradient(90deg,#e94235_0_24%,#f5b73b_24%_49%,#149784_49%_73%,#d33b2f_73%)] opacity-80" />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-28 lg:px-8 lg:pb-24">
            <div className="max-w-5xl">
              <p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#f5b73b]">
                <MapPin className="size-4" />
                {copy.hero.eyebrow}
              </p>
              <h1 className="text-balance font-display text-[clamp(4.6rem,10.7vw,10rem)] font-black uppercase leading-[0.8] tracking-[-0.04em] text-white">
                <span className="block">{copy.hero.title.split(".")[0]}.</span>
                <span className="mt-2 block text-[#f5b73b]">
                  {copy.hero.title.split(".").slice(1).join(".").trim()}
                </span>
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-7 text-white/72 md:text-lg">
                {copy.hero.lead}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to={hrefFor(lang, "support")}
                  className={buttonVariants({ size: "lg" })}
                >
                  {copy.hero.primary}
                  <HeartHandshake className="size-5" />
                </Link>
                <Link
                  to={hrefFor(lang, "missions", "2022")}
                  className={buttonVariants({
                    variant: "secondary",
                    size: "lg",
                  })}
                >
                  {copy.hero.secondary}
                  <ArrowRight className="size-5" />
                </Link>
              </div>
            </div>

            <a
              href="#promise"
              className="mt-16 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/50 transition hover:text-white"
            >
              <ArrowDown className="size-4" />
              {copy.hero.scroll}
            </a>
          </div>
        </section>

        <section id="promise" className="bg-[#f5eddd] text-[#171411]">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
            <EditorialBlock
              eyebrow={editorial.originEyebrow}
              title={editorial.originTitle}
              paragraphs={editorial.originParagraphs}
              tone="light"
            />

            <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
              {promiseCards.map(({ Icon, title, body }) => (
                <article key={title} className="bg-[#fbf6eb] p-7">
                  <Icon className="size-6 text-[#149784]" />
                  <h3 className="mt-5 font-display text-3xl font-black uppercase">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-black/55">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-white/10 bg-[#11100f]">
          <div className="expedition-pattern absolute inset-0 opacity-[0.16]" />
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
            <EditorialBlock
              eyebrow={editorial.restartEyebrow}
              title={editorial.restartTitle}
              paragraphs={editorial.restartParagraphs}
            />

            <blockquote className="mx-auto mt-20 max-w-5xl text-balance text-center font-display text-5xl font-black uppercase leading-[0.9] text-[#f5b73b] md:text-7xl">
              “{editorial.bridgeQuote}”
            </blockquote>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#1a1714]">
          <div className="absolute -left-44 top-0 size-96 rounded-full bg-[#149784]/10 blur-3xl" />
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:py-32">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#149784]">
                {copy.mission2022.eyebrow}
              </p>
              <h2 className="mt-4 font-display text-6xl font-black uppercase leading-none md:text-8xl">
                {copy.mission2022.title}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/62">
                {copy.mission2022.body}
              </p>
              <Link
                to={hrefFor(lang, "missions", "2022")}
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "mt-8",
                )}
              >
                {copy.mission2022.cta}
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="relative min-h-[380px] overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_70%_20%,rgba(245,183,59,.28),transparent_22%),linear-gradient(145deg,#341b13,#11100f_66%)] p-7">
              <div className="grain absolute inset-0 opacity-40" />
              <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#e94235,#f5b73b,#149784,#e94235)]" />
              <div className="relative flex h-full min-h-[326px] flex-col justify-between">
                <span className="w-fit rounded-full border border-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                  2022 · Tanzania
                </span>
                <div>
                  <div className="font-display text-9xl font-black leading-none text-[#f5b73b]">
                    22
                  </div>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/60">
                    {copy.mission2022.mediaBody}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5eddd] text-[#171411]">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
            <EditorialBlock
              eyebrow={editorial.kimotorokEyebrow}
              title={editorial.kimotorokTitle}
              paragraphs={editorial.kimotorokParagraphs}
              tone="light"
            />

            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {currentCards.map(({ Icon, title, body }) => (
                <article
                  key={title}
                  className="rounded-[1.7rem] border border-black/10 bg-[#fffaf0] p-7"
                >
                  <div className="grid size-12 place-items-center rounded-2xl bg-[#f5b73b] text-[#171411]">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-6 font-display text-3xl font-black uppercase">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-black/55">{body}</p>
                </article>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              <Link
                to={hrefFor(lang, "project")}
                className={buttonVariants()}
              >
                {copy.current.cta}
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#11100f]">
          <div className="expedition-pattern absolute inset-0 opacity-[0.12]" />
          <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
            <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
              <div>
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#e94235]">
                  <Youtube className="size-4" />
                  {documentary.eyebrow}
                </p>
                <h2 className="text-balance mt-5 font-display text-6xl font-black uppercase leading-[0.9] md:text-8xl">
                  {documentary.title}
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-white/62">
                  {documentary.body}
                </p>
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(buttonVariants({ variant: "secondary" }), "mt-8")}
                >
                  <Youtube className="size-5" />
                  {documentary.cta}
                </a>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl">
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

        <section className="relative overflow-hidden bg-[#0f0e0d]">
          <div className="expedition-circuit absolute inset-y-0 left-0 w-[38%] opacity-20" />
          <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
            <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#149784]">
                  {copy.stories.eyebrow}
                </p>
                <h2 className="text-balance mt-4 font-display text-6xl font-black uppercase leading-[0.9] md:text-8xl">
                  {editorial.socialTitle}
                </h2>
              </div>
              <div>
                <p className="text-lg leading-8 text-white/62">
                  {editorial.socialBody}
                </p>
                <p className="mt-5 text-sm leading-6 text-white/42">
                  {copy.mission2022.mediaBody}
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="group relative min-h-[340px] overflow-hidden rounded-[2rem] border border-[#e94235]/25 bg-[linear-gradient(145deg,#3c1614,#151312)] p-8"
              >
                <div className="grain absolute inset-0 opacity-35" />
                <Instagram className="relative size-8 text-[#f5b73b]" />
                <div className="relative mt-32">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">
                    @drops.in.the.ocean
                  </p>
                  <h3 className="mt-3 font-display text-4xl font-black uppercase">
                    {copy.stories.instagram}
                  </h3>
                  <ArrowRight className="mt-5 size-5 transition group-hover:translate-x-1" />
                </div>
              </a>

              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noreferrer"
                className="group relative min-h-[340px] overflow-hidden rounded-[2rem] border border-[#149784]/25 bg-[linear-gradient(145deg,#0d332c,#111211)] p-8"
              >
                <div className="grain absolute inset-0 opacity-35" />
                <Facebook className="relative size-8 text-[#f5b73b]" />
                <div className="relative mt-32">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">
                    Tanzania Expedition
                  </p>
                  <h3 className="mt-3 font-display text-4xl font-black uppercase">
                    {copy.stories.facebook}
                  </h3>
                  <ArrowRight className="mt-5 size-5 transition group-hover:translate-x-1" />
                </div>
              </a>

              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noreferrer"
                className="group relative min-h-[340px] overflow-hidden rounded-[2rem] border border-[#f5b73b]/25 bg-[linear-gradient(145deg,#36270d,#11100f)] p-8"
              >
                <div className="grain absolute inset-0 opacity-35" />
                <Youtube className="relative size-8 text-[#e94235]" />
                <div className="relative mt-32">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">
                    Tanzania 2022
                  </p>
                  <h3 className="mt-3 font-display text-4xl font-black uppercase">
                    YouTube
                  </h3>
                  <ArrowRight className="mt-5 size-5 transition group-hover:translate-x-1" />
                </div>
              </a>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {["01", "02", "03", "04"].map((slot, index) => (
                <div
                  key={slot}
                  className={cn(
                    "relative aspect-[4/3] overflow-hidden rounded-3xl border border-dashed border-white/15",
                    index % 2 === 0
                      ? "bg-[linear-gradient(145deg,#281713,#10100f)]"
                      : "bg-[linear-gradient(145deg,#102c27,#10100f)]",
                  )}
                >
                  <div className="grain absolute inset-0 opacity-40" />
                  <span className="absolute left-5 top-5 font-display text-4xl font-black text-white/18">
                    {slot}
                  </span>
                  <span className="absolute bottom-5 left-5 right-5 text-xs font-bold uppercase tracking-[0.16em] text-white/40">
                    {copy.stories.pending}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#e94235] text-white">
          <div className="expedition-party-grid absolute inset-0 opacity-25" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[1fr_.82fr] lg:px-8 lg:py-28">
            <div>
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#f5b73b]">
                <Music2 className="size-4" />
                {copy.events.eyebrow}
              </p>
              <h2 className="text-balance mt-4 font-display text-6xl font-black uppercase leading-[0.88] md:text-8xl">
                {copy.events.title}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/84">
                {editorial.eventsLongBody}
              </p>
              <Link
                to={hrefFor(lang, "events")}
                className={cn(
                  buttonVariants({ variant: "light" }),
                  "mt-8",
                )}
              >
                {copy.events.cta}
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="flex items-end">
              <div className="w-full rounded-[2rem] border border-white/25 bg-[#161311]/92 p-8 shadow-2xl">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5b73b]">
                  Benefit calendar
                </span>
                <div className="mt-8 space-y-4">
                  {["Italy", "Europe", "Tanzania Expedition"].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between border-b border-white/10 pb-4"
                    >
                      <span className="font-display text-2xl font-black uppercase">
                        {item}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-[0.14em] text-white/45">
                        coming soon
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm text-white/50">
                  {copy.events.empty}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#f5b73b] text-[#171411]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(233,66,53,.24),transparent_21%),radial-gradient(circle_at_85%_75%,rgba(20,151,132,.28),transparent_24%)]" />
          <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[1fr_260px] lg:items-center">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.26em] text-[#9f281f]">
                  {editorial.donateEyebrow}
                </p>
                <h2 className="text-balance mt-4 max-w-4xl font-display text-6xl font-black uppercase leading-[0.88] md:text-8xl">
                  {editorial.donateTitle}
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-black/65">
                  {editorial.donateBody}
                </p>
              </div>
              <div className="rounded-[2rem] bg-[#11100f] p-5 text-center text-white shadow-xl">
                <img
                  src="/media/qr-donation.webp"
                  alt="QR code Tanzania Expedition"
                  className="mx-auto w-full max-w-[220px] rounded-2xl"
                />
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-[#f5b73b]">
                  {qrLabel}
                </p>
                <Link
                  to={hrefFor(lang, "support")}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[#f5b73b]"
                >
                  {editorial.donateCta}
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5eddd] text-[#171411]">
          <div className="mx-auto max-w-7xl px-5 py-24 text-center lg:px-8 lg:py-32">
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#149784]">
              {copy.support.eyebrow}
            </p>
            <h2 className="text-balance mx-auto mt-5 max-w-4xl font-display text-6xl font-black uppercase leading-[0.9] md:text-8xl">
              {copy.support.title}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/60">
              {copy.support.body}
            </p>
            <Link
              to={hrefFor(lang, "support")}
              className={cn(buttonVariants({ size: "lg" }), "mt-9")}
            >
              {copy.hero.primary}
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
