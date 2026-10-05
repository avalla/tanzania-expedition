import {
  ArrowRight,
  CalendarDays,
  Droplets,
  Facebook,
  HeartHandshake,
  Instagram,
  MapPin,
  Music2,
  Shirt,
  Youtube,
} from "lucide-react";
import { Link, redirect } from "react-router";

import type { Route } from "./+types/section";
import { CopyIbanButton } from "~/components/copy-iban-button";
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  YOUTUBE_URL,
  SiteShell,
} from "~/components/site-shell";
import { getEditorialCopy } from "~/lib/editorial";
import {
  getCopy,
  hrefFor,
  isLang,
  resolvePage,
  type PageKey,
} from "~/lib/i18n";

export function loader({ params }: Route.LoaderArgs) {
  if (!isLang(params.lang)) return redirect("/it");
  const page = resolvePage(params.lang, params.section);
  if (!page) throw new Response("Not found", { status: 404 });
  return {
    lang: params.lang,
    page,
    copy: getCopy(params.lang),
    editorial: getEditorialCopy(params.lang),
  };
}

export function meta({ data }: Route.MetaArgs) {
  if (!data) return [{ title: "Tanzania Expedition" }];

  const label = data.copy.nav[data.page];
  const title = label + " · Tanzania Expedition";
  const descriptions: Record<PageKey, string> = {
    project: data.copy.current.body,
    missions: data.copy.mission2022.body,
    stories: data.copy.stories.body,
    events: data.copy.events.body,
    about: data.copy.about.body,
    support: data.copy.support.body,
  };

  return [
    { title },
    { name: "description", content: descriptions[data.page] },
    { property: "og:title", content: title },
    { property: "og:description", content: descriptions[data.page] },
  ];
}

function PageIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="max-w-4xl">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#fab937]">
        {eyebrow}
      </p>
      <h1 className="text-balance mt-5 font-display text-6xl font-black uppercase leading-[0.88] md:text-8xl lg:text-9xl">
        {title}
      </h1>
      <p className="mt-7 max-w-2xl text-lg leading-8 text-white/62">{body}</p>
    </div>
  );
}

function LongCopy({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: [string, string];
}) {
  return (
    <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
      <h2 className="text-balance font-display text-5xl font-black uppercase leading-[0.92] text-[#fab937] md:text-7xl">
        {title}
      </h2>
      <div className="space-y-6">
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-lg leading-8 text-white/64">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function SectionPage({ loaderData }: Route.ComponentProps) {
  const { lang, page, copy, editorial } = loaderData;

  const projectCards = [
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

  const supportCards = [
    { Icon: HeartHandshake, label: copy.support.donate },
    { Icon: Music2, label: copy.support.attend },
    { Icon: Shirt, label: copy.support.tshirt },
  ];

  return (
    <SiteShell lang={lang} currentPage={page}>
      <main className="pt-20">
        <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_85%_10%,rgba(245,183,59,.18),transparent_18%),linear-gradient(145deg,#1d1512,#545156_60%)]">
          <div className="communique-slashes absolute -right-20 top-8 h-52 w-80 opacity-25" />
          <div className="grain absolute inset-0 opacity-25" />
          <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
            {page === "project" && (
              <PageIntro
                eyebrow={copy.current.eyebrow}
                title={copy.current.title}
                body={copy.current.body}
              />
            )}
            {page === "missions" && (
              <PageIntro
                eyebrow={copy.mission2022.eyebrow}
                title={copy.nav.missions}
                body={copy.mission2022.body}
              />
            )}
            {page === "stories" && (
              <PageIntro
                eyebrow={copy.stories.eyebrow}
                title={copy.stories.title}
                body={copy.stories.body}
              />
            )}
            {page === "events" && (
              <PageIntro
                eyebrow={copy.events.eyebrow}
                title={copy.events.title}
                body={copy.events.body}
              />
            )}
            {page === "about" && (
              <PageIntro
                eyebrow="Tanzania Expedition"
                title={copy.about.title}
                body={copy.about.body}
              />
            )}
            {page === "support" && (
              <PageIntro
                eyebrow={copy.support.eyebrow}
                title={copy.support.title}
                body={copy.support.body}
              />
            )}
          </div>
        </section>

        {page === "project" && (
          <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
            <LongCopy
              title={editorial.kimotorokTitle}
              paragraphs={editorial.kimotorokParagraphs}
            />

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {projectCards.map(({ Icon, title, body }) => (
                <article
                  key={title}
                  className="rounded-3xl border border-white/10 bg-white/[0.035] p-7"
                >
                  <Icon className="size-7 text-[#fab937]" />
                  <h2 className="mt-6 font-display text-4xl font-black uppercase">
                    {title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/55">{body}</p>
                </article>
              ))}
            </div>

            <div className="expedition-pattern mt-10 overflow-hidden rounded-[2rem] border border-[#00a875]/25 bg-[#00a875]/8 p-8 lg:p-10">
              <p className="relative max-w-3xl text-lg leading-8 text-white/72">
                {copy.promise.body}
              </p>
            </div>
          </section>
        )}

        {page === "missions" && (
          <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
            <Link
              to={hrefFor(lang, "missions", "2022")}
              className="group block rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 transition hover:border-[#fab937]/30 lg:p-10"
            >
              <div className="grid gap-10 md:grid-cols-[.4fr_1fr] md:items-end">
                <div className="font-display text-[8rem] font-black leading-none text-[#fab937]">
                  22
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/40">
                    Tanzania · 2022
                  </p>
                  <h2 className="mt-3 font-display text-5xl font-black uppercase">
                    {copy.mission2022.title}
                  </h2>
                  <p className="mt-4 max-w-2xl text-white/55">
                    {copy.mission2022.body}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-white">
                    {copy.mission2022.cta}
                    <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          </section>
        )}

        {page === "stories" && (
          <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
              <h2 className="text-balance font-display text-5xl font-black uppercase leading-[0.92] text-[#fab937] md:text-7xl">
                {editorial.socialTitle}
              </h2>
              <p className="text-lg leading-8 text-white/64">
                {editorial.socialBody}
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-[2rem] border border-[#df3946]/30 bg-[#df3946] p-8"
              >
                <Instagram className="size-8 text-[#fab937]" />
                <h2 className="mt-20 font-display text-5xl font-black uppercase">
                  Instagram
                </h2>
                <p className="mt-3 text-sm text-white/50">
                  @drops.in.the.ocean
                </p>
              </a>

              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-[2rem] border border-[#00a875]/30 bg-[#00a875] p-8"
              >
                <Facebook className="size-8 text-[#fab937]" />
                <h2 className="mt-20 font-display text-5xl font-black uppercase">
                  Facebook
                </h2>
                <p className="mt-3 text-sm text-white/50">
                  Tanzania Expedition
                </p>
              </a>

              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-[2rem] border border-[#fab937]/30 bg-[#15466c] p-8"
              >
                <Youtube className="size-8 text-[#df3946]" />
                <h2 className="mt-20 font-display text-5xl font-black uppercase">
                  YouTube
                </h2>
                <p className="mt-3 text-sm text-white/50">
                  Tanzania 2022 documentary
                </p>
              </a>
            </div>

            <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-black">
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

            <div className="mt-5 rounded-3xl border border-dashed border-white/15 p-8 text-white/50">
              {copy.mission2022.mediaBody}
            </div>
          </section>
        )}

        {page === "events" && (
          <section className="relative overflow-hidden">
            <div className="expedition-party-grid absolute inset-0 opacity-15" />
            <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-[2rem] bg-[#df3946] p-8 text-white">
                  <Music2 className="size-8 text-[#fab937]" />
                  <h2 className="mt-16 font-display text-5xl font-black uppercase">
                    Benefit parties
                  </h2>
                  <p className="mt-4 max-w-md text-white/82">
                    {editorial.eventsLongBody}
                  </p>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8">
                  <CalendarDays className="size-8 text-[#fab937]" />
                  <h2 className="mt-16 font-display text-5xl font-black uppercase">
                    Coming soon
                  </h2>
                  <p className="mt-4 text-white/50">{copy.events.empty}</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {page === "about" && (
          <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
            <LongCopy
              title={editorial.originTitle}
              paragraphs={editorial.originParagraphs}
            />

            <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_.8fr]">
              <div className="rounded-[2rem] border border-white/10 p-8 lg:p-10">
                <h2 className="font-display text-4xl font-black uppercase text-[#00a875]">
                  {editorial.restartTitle}
                </h2>
                <div className="mt-5 space-y-5">
                  {editorial.restartParagraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-lg leading-8 text-white/66"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <aside className="rounded-[2rem] bg-[#efe6d1] p-8 text-[#504e53] lg:p-10">
                <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#df3946]">
                  2026
                </p>
                <p className="mt-5 leading-7 text-black/65">
                  {copy.about.note}
                </p>
              </aside>
            </div>
          </section>
        )}

        {page === "support" && (
          <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
            <div className="grid gap-5 md:grid-cols-3">
              {supportCards.map(({ Icon, label }) => (
                <article
                  key={label}
                  className="rounded-3xl border border-white/10 bg-white/[0.035] p-7"
                >
                  <Icon className="size-7 text-[#00a875]" />
                  <h2 className="mt-6 font-display text-4xl font-black uppercase">
                    {label}
                  </h2>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-[2rem] bg-[#fab937] p-8 text-[#504e53] lg:p-10">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#9f281f]">
                {editorial.donateEyebrow}
              </p>
              <h2 className="mt-4 max-w-3xl font-display text-5xl font-black uppercase leading-[0.92] md:text-7xl">
                {editorial.donateTitle}
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-black/65">
                {editorial.donateBody}
              </p>
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_300px]">
              <div className="rounded-[2rem] bg-[#efe6d1] p-8 text-[#504e53] lg:p-10">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#df3946]">
                {copy.support.donationTitle}
              </p>
              <div className="mt-7 grid gap-8 md:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold text-black/45">Name</p>
                  <p className="mt-1 text-lg font-bold">
                    {copy.support.accountName}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-black/45">
                    {copy.support.bicLabel}
                  </p>
                  <p className="mt-1 font-mono text-lg font-bold">
                    {copy.support.bic}
                  </p>
                </div>
              </div>
              <div className="mt-8 border-t border-black/10 pt-8">
                <p className="text-sm font-semibold text-black/45">
                  {copy.support.ibanLabel}
                </p>
                <p className="mt-2 break-all font-mono text-xl font-bold md:text-2xl">
                  {copy.support.iban}
                </p>
                <div className="mt-5">
                  <CopyIbanButton
                    iban={copy.support.iban}
                    copyLabel={copy.support.copy}
                    copiedLabel={copy.support.copied}
                  />
                </div>
              </div>
            </div>

              <aside className="rounded-[2rem] border border-[#fab937]/30 bg-[#545156] p-6 text-center">
                <img
                  src="/media/qr-donation.webp"
                  alt="QR code Tanzania Expedition"
                  className="mx-auto w-full max-w-[240px] rounded-2xl"
                />
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#fab937]">
                  QR · Tanzania Expedition
                </p>
              </aside>
            </div>
          </section>
        )}
      </main>
    </SiteShell>
  );
}
