import { ArrowLeft, ArrowRight, Facebook, Instagram } from "lucide-react";
import { Link, redirect } from "react-router";

import type { Route } from "./+types/detail";
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  SiteShell,
} from "~/components/site-shell";
import { buttonVariants } from "~/components/ui/button";
import { getEditorialCopy } from "~/lib/editorial";
import { getCopy, hrefFor, isLang, resolvePage } from "~/lib/i18n";
import { cn } from "~/lib/utils";

export function loader({ params }: Route.LoaderArgs) {
  if (!isLang(params.lang)) return redirect("/it");

  const page = resolvePage(params.lang, params.section);
  if (page !== "missions" || params.detail !== "2022") {
    throw new Response("Not found", { status: 404 });
  }

  return {
    lang: params.lang,
    copy: getCopy(params.lang),
    editorial: getEditorialCopy(params.lang),
    detail: "2022",
  };
}

export function meta({ data }: Route.MetaArgs) {
  const title = data
    ? data.copy.mission2022.title + " · Tanzania Expedition"
    : "Mission 2022 · Tanzania Expedition";
  const description = data?.copy.mission2022.body ?? "";

  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
  ];
}

export default function Mission2022({ loaderData }: Route.ComponentProps) {
  const { lang, copy, editorial } = loaderData;

  const impact = [
    copy.promise.pillars[0],
    copy.promise.pillars[2],
    copy.promise.pillars[3],
  ];

  const socials = [
    { href: INSTAGRAM_URL, Icon: Instagram, name: "Instagram" },
    { href: FACEBOOK_URL, Icon: Facebook, name: "Facebook" },
  ];

  return (
    <SiteShell lang={lang} currentPage="missions" detail="2022">
      <main className="pt-20">
        <section className="relative min-h-[60svh] overflow-hidden border-b border-white/10 bg-[#545156]">
          <div className="relative mx-auto flex min-h-[60svh] max-w-7xl items-end px-5 py-20 lg:px-8">
            <div className="w-full">
              <Link
                to={hrefFor(lang, "missions")}
                className="mb-10 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-[#efe6d1]/80 hover:text-white"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
                {copy.nav.missions}
              </Link>
              <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <p className="text-sm font-bold text-[#fab937]">
                    {copy.mission2022.eyebrow}
                  </p>
                  <h1 className="mt-4 font-display text-[clamp(4rem,12vw,10rem)] font-black uppercase leading-[0.85]">
                    Tanzania
                    <span className="block text-[#fab937]">2022</span>
                  </h1>
                </div>
                <p className="max-w-md pb-2 text-base leading-7 text-[#efe6d1]/90">
                  {copy.mission2022.body}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#efe6d1] text-[#504e53]">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
            <ol className="grid gap-x-10 gap-y-10 md:grid-cols-3">
              {impact.map(([title, body], index) => (
                <li key={title} className="border-t-2 border-[#504e53] pt-5">
                  <span
                    aria-hidden="true"
                    className="font-display text-5xl font-black leading-none text-[#b52b37]"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-4 font-display text-3xl font-black uppercase leading-none">
                    {title}
                  </h2>
                  <p className="mt-3 max-w-[40ch] text-base leading-7 text-[#504e53]/90">
                    {body}
                  </p>
                </li>
              ))}
            </ol>

            <blockquote className="mx-auto mt-20 max-w-4xl text-balance text-center font-display text-4xl font-black uppercase leading-[0.95] md:text-6xl">
              “{copy.promise.title}”
            </blockquote>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
            <h2 className="text-balance font-display text-4xl font-black uppercase leading-[0.95] md:text-6xl">
              {copy.mission2022.mediaTitle}
            </h2>
            <div>
              <p className="max-w-[60ch] text-lg leading-8 text-[#efe6d1]/88">
                {copy.mission2022.mediaBody}
              </p>
              <ul
                aria-label={editorial.socialLinksLabel}
                className="mt-8 flex flex-wrap gap-x-8 gap-y-4"
              >
                {socials.map(({ href, Icon, name }) => (
                  <li key={name}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex min-h-11 items-center gap-3 font-bold underline decoration-2 underline-offset-4 hover:text-[#fab937]"
                    >
                      <Icon className="size-5" aria-hidden="true" />
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 rounded-xl bg-[#b52b37] p-8 text-white md:p-10">
            <h2 className="font-display text-4xl font-black uppercase leading-[0.95] md:text-5xl">
              {copy.current.title}
            </h2>
            <p className="mt-4 max-w-[60ch] text-white/92">{copy.current.body}</p>
            <Link
              to={hrefFor(lang, "project")}
              className={cn(buttonVariants({ variant: "light" }), "mt-7")}
            >
              {copy.current.cta}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
