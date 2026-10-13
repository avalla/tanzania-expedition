import {
  ArrowRight,
  Facebook,
  Instagram,
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

const sectionH2 =
  "text-balance font-display text-4xl font-black uppercase leading-[0.95] md:text-6xl";

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
    <div className="max-w-5xl">
      <p className="text-sm font-bold text-[#fab937]">{eyebrow}</p>
      <h1 className="text-balance mt-5 font-display text-[clamp(3.5rem,9vw,8rem)] font-black uppercase leading-[0.9]">
        {title}
      </h1>
      <p className="mt-7 max-w-[60ch] text-lg leading-8 text-[#efe6d1]/90">
        {body}
      </p>
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
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
      <h2 className={`${sectionH2} text-[#fab937] lg:col-span-5`}>{title}</h2>
      <div className="space-y-6 lg:col-span-7">
        {paragraphs.map((paragraph) => (
          <p
            key={paragraph}
            className="max-w-[68ch] text-lg leading-8 text-[#efe6d1]/88"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

export default function SectionPage({ loaderData }: Route.ComponentProps) {
  const { lang, page, copy, editorial } = loaderData;

  const socials = [
    { href: INSTAGRAM_URL, Icon: Instagram, name: "Instagram", handle: "@drops.in.the.ocean" },
    { href: FACEBOOK_URL, Icon: Facebook, name: "Facebook", handle: "Tanzania Expedition" },
    { href: YOUTUBE_URL, Icon: Youtube, name: "YouTube", handle: "Tanzania 2022" },
  ];

  const supportWays = [copy.support.donate, copy.support.attend, copy.support.tshirt];

  return (
    <SiteShell lang={lang} currentPage={page}>
      <main className="pt-20">
        <section className="relative overflow-hidden border-b border-white/10 bg-[#545156]">
          <div className="communique-slashes absolute -right-20 top-8 h-52 w-80 opacity-25" />
          <div className="relative mx-auto max-w-7xl px-5 py-20 sm:py-24 lg:px-8 lg:py-28">
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
          <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
            <LongCopy
              title={editorial.kimotorokTitle}
              paragraphs={editorial.kimotorokParagraphs}
            />

            <ul className="mt-14 grid divide-y divide-[#efe6d1]/25 border-y border-[#efe6d1]/25 md:grid-cols-3 md:divide-x md:divide-y-0">
              {copy.current.cards.map(([title, body]) => (
                <li key={title} className="py-7 md:px-7 md:first:pl-0 md:last:pr-0">
                  <h2 className="font-display text-3xl font-black uppercase leading-none text-[#fab937]">
                    {title}
                  </h2>
                  <p className="mt-3 max-w-[40ch] text-base leading-7 text-[#efe6d1]/88">
                    {body}
                  </p>
                </li>
              ))}
            </ul>

            <p className="mt-12 max-w-[68ch] text-lg leading-8 text-[#efe6d1]/88">
              {copy.promise.body}
            </p>
          </section>
        )}

        {page === "missions" && (
          <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
            <Link
              to={hrefFor(lang, "missions", "2022")}
              className="group block border-y border-[#efe6d1]/25 py-10 transition-colors hover:bg-white/5"
            >
              <div className="grid gap-8 md:grid-cols-[.4fr_1fr] md:items-end">
                <div
                  aria-hidden="true"
                  className="font-display text-[8rem] font-black leading-none text-[#fab937]"
                >
                  22
                </div>
                <div>
                  <p className="text-sm font-bold text-[#efe6d1]/75">
                    Tanzania · 2022
                  </p>
                  <h2 className="mt-3 font-display text-4xl font-black uppercase md:text-5xl">
                    {copy.mission2022.title}
                  </h2>
                  <p className="mt-4 max-w-[60ch] text-[#efe6d1]/88">
                    {copy.mission2022.body}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-white underline decoration-2 underline-offset-4">
                    {copy.mission2022.cta}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </Link>
          </section>
        )}

        {page === "stories" && (
          <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
              <h2 className={`${sectionH2} text-[#fab937]`}>
                {editorial.socialTitle}
              </h2>
              <div>
                <p className="max-w-[68ch] text-lg leading-8 text-[#efe6d1]/88">
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
                        className="inline-flex min-h-11 items-center gap-3 font-bold text-[#efe6d1] underline decoration-2 underline-offset-4 hover:text-[#fab937]"
                      >
                        <Icon className="size-5" aria-hidden="true" />
                        <span>
                          {name}
                          <span className="ml-2 font-normal text-[#efe6d1]/80 no-underline">
                            {handle}
                          </span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-14 overflow-hidden rounded-xl border-4 border-[#efe6d1]/25 bg-[#2b292d]">
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

            <p className="mt-6 max-w-[68ch] text-base leading-7 text-[#efe6d1]/80">
              {copy.mission2022.mediaBody}
            </p>
          </section>
        )}

        {page === "events" && (
          <section className="relative overflow-hidden">
            <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
              <div className="max-w-3xl bg-[#b52b37] p-8 text-white md:p-10">
                <h2 className={sectionH2}>{copy.events.title}</h2>
                <p className="mt-5 max-w-[60ch] text-lg leading-8 text-white/92">
                  {editorial.eventsLongBody}
                </p>
                <p className="mt-5 text-base text-white/80">{copy.events.empty}</p>
              </div>
            </div>
          </section>
        )}

        {page === "about" && (
          <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
            <LongCopy
              title={editorial.originTitle}
              paragraphs={editorial.originParagraphs}
            />

            <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_.8fr] lg:gap-16">
              <div className="border-t-2 border-[#efe6d1]/40 pt-8">
                <h2 className="font-display text-4xl font-black uppercase leading-none text-[#fab937]">
                  {editorial.restartTitle}
                </h2>
                <div className="mt-5 space-y-5">
                  {editorial.restartParagraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="max-w-[68ch] text-lg leading-8 text-[#efe6d1]/88"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <aside className="self-start rounded-xl bg-[#efe6d1] p-8 text-[#504e53] lg:p-10">
                <p className="font-display text-4xl font-black text-[#b52b37]">
                  2026
                </p>
                <p className="mt-4 leading-7">{copy.about.note}</p>
              </aside>
            </div>
          </section>
        )}

        {page === "support" && (
          <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
            <ul className="flex flex-wrap gap-x-10 gap-y-3 border-y border-[#efe6d1]/25 py-6">
              {supportWays.map((label, index) => (
                <li
                  key={label}
                  className="flex items-baseline gap-3 font-display text-3xl font-black uppercase"
                >
                  <span aria-hidden="true" className="text-[#fab937]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {label}
                </li>
              ))}
            </ul>

            <div className="mt-12 max-w-4xl">
              <h2 className="text-balance font-display text-5xl font-black uppercase leading-[0.92] text-[#fab937] md:text-7xl">
                {editorial.donateTitle}
              </h2>
              <p className="mt-5 max-w-[60ch] text-lg leading-8 text-[#efe6d1]/88">
                {editorial.donateBody}
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_300px]">
              <div className="rounded-xl bg-[#efe6d1] p-8 text-[#504e53] lg:p-10">
                <h3 className="text-lg font-bold text-[#b52b37]">
                  {copy.support.donationTitle}
                </h3>
                <div className="mt-7 grid gap-8 md:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold text-[#504e53]/80">
                      {editorial.accountNameLabel}
                    </p>
                    <p className="mt-1 text-lg font-bold">
                      {copy.support.accountName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#504e53]/80">
                      {copy.support.bicLabel}
                    </p>
                    <p className="mt-1 font-mono text-lg font-bold">
                      {copy.support.bic}
                    </p>
                  </div>
                </div>
                <div className="mt-8 border-t border-[#504e53]/20 pt-8">
                  <p className="text-sm font-semibold text-[#504e53]/80">
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

              <aside className="self-start rounded-xl border border-[#fab937]/40 bg-[#545156] p-6 text-center">
                <img
                  src="/media/qr-donation.webp"
                  alt={editorial.qrAlt}
                  className="mx-auto w-full max-w-[240px] rounded-lg"
                />
                <p className="mt-5 text-sm font-bold text-[#fab937]">
                  {editorial.qrLabel}
                </p>
              </aside>
            </div>
          </section>
        )}
      </main>
    </SiteShell>
  );
}
