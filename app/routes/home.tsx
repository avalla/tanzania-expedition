import {
  ArrowDown,
  ArrowRight,
  Facebook,
  HeartHandshake,
  Instagram,
  MapPin,
  Music2,
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

const sectionH2 =
  "text-balance font-display text-4xl font-black uppercase leading-[0.95] md:text-6xl";

function EditorialBlock({
  eyebrow,
  title,
  paragraphs,
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  paragraphs: [string, string];
  tone?: "dark" | "light";
}) {
  const light = tone === "light";

  return (
    <div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-16">
      <div>
        {eyebrow && (
          <p
            className={cn(
              "mb-4 text-sm font-bold",
              light ? "text-[#b52b37]" : "text-[#fab937]",
            )}
          >
            {eyebrow}
          </p>
        )}
        <h2
          className={cn(
            sectionH2,
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
              "max-w-[68ch] text-lg leading-8",
              light ? "text-[#504e53]/90" : "text-[#efe6d1]/88",
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

  const socials = [
    { href: INSTAGRAM_URL, Icon: Instagram, name: "Instagram", handle: "@drops.in.the.ocean" },
    { href: FACEBOOK_URL, Icon: Facebook, name: "Facebook", handle: "Tanzania Expedition" },
    { href: YOUTUBE_URL, Icon: Youtube, name: "YouTube", handle: "Tanzania 2022" },
  ];

  return (
    <SiteShell lang={lang}>
      <main>
        <section className="relative flex min-h-[94svh] overflow-hidden bg-[#545156] pt-20 text-[#efe6d1]">
          <div className="communique-zigzag absolute right-[5%] top-20 hidden h-10 w-48 opacity-90 lg:block" />
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-[#df3946]" />

          <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 pb-8 pt-14 sm:pt-20 lg:grid-cols-12 lg:items-center lg:gap-12 lg:px-8 lg:pb-8">
            <div className="relative z-10 lg:col-span-7">
              <p className="mb-5 flex items-center gap-2 text-sm font-bold text-[#fab937]">
                <MapPin className="size-4" aria-hidden="true" />
                {copy.hero.eyebrow}
              </p>

              <h1 className="text-balance font-display text-[clamp(3.3rem,8vw,8rem)] font-black uppercase leading-[0.9] tracking-[-0.03em]">
                <span className="block">{copy.hero.title.split(".")[0]}.</span>
                <span className="mt-2 block text-[#fab937]">
                  {copy.hero.title.split(".").slice(1).join(".").trim()}
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-7 text-[#efe6d1]/90 md:text-lg">
                {copy.hero.lead}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  to={hrefFor(lang, "support")}
                  className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#df3946] px-7 py-3.5 font-bold text-white transition-colors hover:bg-[#eb4854]"
                >
                  {copy.hero.primary}
                  <HeartHandshake className="size-5" aria-hidden="true" />
                </Link>
                <a
                  href="#documentary"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#efe6d1]/45 px-7 py-3.5 font-bold text-[#efe6d1] transition-colors hover:bg-white/10"
                >
                  <Youtube className="size-5 text-[#fab937]" aria-hidden="true" />
                  {editorial.documentaryEyebrow}
                </a>
              </div>

              <a
                href="#promise"
                className="mt-14 inline-flex items-center gap-2 text-sm font-bold text-[#efe6d1]/75 transition-colors hover:text-[#efe6d1]"
              >
                <ArrowDown className="size-4" aria-hidden="true" />
                {copy.hero.scroll}
              </a>
            </div>

            <div
              aria-hidden="true"
              className="relative mx-auto flex min-h-[320px] w-full max-w-[620px] items-end justify-center self-end overflow-hidden sm:min-h-[440px] lg:col-span-5 lg:min-h-[520px]"
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
          <div className="mx-auto max-w-7xl px-5 py-20 sm:py-24 lg:px-8 lg:py-28">
            <EditorialBlock
              eyebrow={editorial.originEyebrow}
              title={editorial.originTitle}
              paragraphs={editorial.originParagraphs}
              tone="light"
            />

            <ol className="mt-16 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {copy.promise.pillars.map(([title, body], index) => (
                <li key={title} className="border-t-2 border-[#504e53] pt-5">
                  <span
                    aria-hidden="true"
                    className="font-display text-5xl font-black leading-none text-[#b52b37]"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-3xl font-black uppercase leading-none">
                    {title}
                  </h3>
                  <p className="mt-3 max-w-[40ch] text-base leading-7 text-[#504e53]/90">
                    {body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#545156] text-[#efe6d1]">
          <div className="communique-slashes absolute -right-16 top-10 h-52 w-72 opacity-30" />
          <div className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
            <EditorialBlock
              title={editorial.restartTitle}
              paragraphs={editorial.restartParagraphs}
            />
            <blockquote className="mx-auto mt-24 max-w-5xl text-balance text-center font-display text-5xl font-black uppercase leading-[0.95] text-[#fab937] md:text-7xl lg:text-8xl">
              “{editorial.bridgeQuote}”
            </blockquote>
          </div>
        </section>

        <section id="documentary" className="bg-[#efe6d1] text-[#504e53]">
          <div className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
            <div className="grid min-w-0 gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
              <div className="min-w-0 lg:col-span-5">
                <h2 className={sectionH2}>{editorial.documentaryTitle}</h2>
                <p className="mt-6 max-w-[48ch] text-lg leading-8 text-[#504e53]/90">
                  {editorial.documentaryBody}
                </p>
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#b52b37] px-7 py-3.5 font-bold text-white transition-colors hover:bg-[#9d2330]"
                >
                  <Youtube className="size-5" aria-hidden="true" />
                  {editorial.documentaryCta}
                </a>
              </div>

              <div className="min-w-0 overflow-hidden rounded-xl border-4 border-[#545156] bg-[#2b292d] lg:col-span-7">
                <div className="aspect-video">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube-nocookie.com/embed/51VFiMRKIp8?rel=0"
                    title={editorial.documentaryIframeTitle}
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
          <div className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[.86fr_1.14fr] lg:gap-16">
              <div>
                <h2 className={sectionH2}>{editorial.kimotorokTitle}</h2>
                <div className="mt-7 space-y-5">
                  {editorial.kimotorokParagraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="max-w-[68ch] text-lg leading-8 text-[#efe6d1]/88"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                <Link
                  to={hrefFor(lang, "project")}
                  className="mt-8 inline-flex items-center gap-2 font-bold text-[#fab937] underline decoration-2 underline-offset-4 hover:text-[#ffd06e]"
                >
                  {copy.current.cta}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>

              <ul className="content-start divide-y divide-[#efe6d1]/25 border-y border-[#efe6d1]/25 self-start">
                {copy.current.cards.map(([title, body]) => (
                  <li key={title} className="py-6">
                    <h3 className="font-display text-3xl font-black uppercase leading-none text-[#fab937]">
                      {title}
                    </h3>
                    <p className="mt-3 max-w-[52ch] text-base leading-7 text-[#efe6d1]/88">
                      {body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-[#efe6d1] text-[#504e53]">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:py-16 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-start lg:gap-16">
              <h2 className={sectionH2}>{editorial.socialTitle}</h2>
              <div>
                <p className="max-w-[68ch] text-lg leading-8 text-[#504e53]/90">
                  {editorial.socialBody}
                </p>
                <ul
                  aria-label={editorial.socialLinksLabel}
                  className="mt-8 flex flex-wrap gap-x-8 gap-y-4"
                >
                  {socials.map(({ href, Icon, name, handle }) => (
                    <li key={name}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex min-h-11 items-center gap-3 font-bold underline decoration-2 underline-offset-4 hover:text-[#b52b37]"
                      >
                        <Icon className="size-5" aria-hidden="true" />
                        <span>
                          {name}
                          <span className="ml-2 font-normal text-[#504e53]/80 no-underline">
                            {handle}
                          </span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#b52b37] text-white">
          <div className="communique-zigzag absolute right-8 top-8 h-12 w-56 opacity-45" />
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
            <div className="min-w-0 max-w-3xl">
              <p className="flex items-center gap-2 text-sm font-bold text-[#fab937]">
                <Music2 className="size-4" aria-hidden="true" />
                {copy.events.eyebrow}
              </p>
              <h2 className={cn(sectionH2, "mt-4")}>{copy.events.title}</h2>
              <p className="mt-6 max-w-[68ch] text-lg leading-8 text-white/92">
                {editorial.eventsLongBody}
              </p>
              <p className="mt-4 text-base text-white/80">{copy.events.empty}</p>
              <Link
                to={hrefFor(lang, "events")}
                className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#efe6d1] px-7 py-3.5 font-bold text-[#504e53] transition-colors hover:bg-white"
              >
                {copy.events.cta}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#545156] text-[#efe6d1]">
          <div className="absolute inset-x-0 top-0 h-3 bg-[#fab937]" />
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-24 lg:grid-cols-[1fr_280px] lg:items-center lg:px-8 lg:py-28">
            <div>
              <p className="text-sm font-bold text-[#fab937]">
                {editorial.donateEyebrow}
              </p>
              <h2 className="text-balance mt-4 max-w-4xl font-display text-6xl font-black uppercase leading-[0.92] md:text-8xl">
                {editorial.donateTitle}
              </h2>
              <p className="mt-6 max-w-[60ch] text-lg leading-8 text-[#efe6d1]/88">
                {editorial.donateBody}
              </p>
              <Link
                to={hrefFor(lang, "support")}
                className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#df3946] px-7 py-3.5 font-bold text-white transition-colors hover:bg-[#eb4854]"
              >
                <Waves className="size-5 text-[#fab937]" aria-hidden="true" />
                {editorial.donateCta}
                <ArrowRight className="size-5" aria-hidden="true" />
              </Link>
            </div>

            <div className="mx-auto w-full max-w-[280px] rounded-xl bg-[#efe6d1] p-5 text-center text-[#504e53] lg:mx-0">
              <img
                src="/media/qr-donation.webp"
                alt={editorial.qrAlt}
                className="mx-auto block aspect-square w-full max-w-[220px] rounded-lg bg-[#545156] object-contain"
              />
              <p className="mt-4 text-sm font-bold text-[#b52b37]">
                {editorial.qrLabel}
              </p>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
