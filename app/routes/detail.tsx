import {
  ArrowLeft,
  ArrowRight,
  Facebook,
  Instagram,
  PackageOpen,
  Users,
  Waves,
} from "lucide-react";
import { Link, redirect } from "react-router";

import type { Route } from "./+types/detail";
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  SiteShell,
} from "~/components/site-shell";
import { buttonVariants } from "~/components/ui/button";
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
  const { lang, copy } = loaderData;

  const impactCards = [
    {
      Icon: Waves,
      title: copy.promise.pillars[0][0],
      body: copy.promise.pillars[0][1],
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

  return (
    <SiteShell lang={lang} currentPage="missions" detail="2022">
      <main className="pt-20">
        <section className="relative min-h-[70svh] overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_70%_25%,rgba(245,183,59,.26),transparent_22%),linear-gradient(140deg,#251711,#11100f_64%)]">
          <div className="grain absolute inset-0 opacity-30" />
          <div className="relative mx-auto flex min-h-[70svh] max-w-7xl items-end px-5 py-20 lg:px-8">
            <div className="w-full">
              <Link
                to={hrefFor(lang, "missions")}
                className="mb-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/50 hover:text-white"
              >
                <ArrowLeft className="size-4" />
                {copy.nav.missions}
              </Link>
              <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f5b73b]">
                    {copy.mission2022.eyebrow}
                  </p>
                  <h1 className="mt-4 font-display text-[clamp(5rem,13vw,11rem)] font-black uppercase leading-[0.78]">
                    Tanzania
                    <span className="block text-[#e94235]">2022</span>
                  </h1>
                </div>
                <p className="max-w-md pb-2 text-base leading-7 text-white/60">
                  {copy.mission2022.body}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5eddd] text-[#171411]">
          <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
            <div className="grid gap-px overflow-hidden rounded-[2rem] border border-black/10 bg-black/10 md:grid-cols-3">
              {impactCards.map(({ Icon, title, body }) => (
                <article key={title} className="bg-[#fbf6eb] p-8">
                  <Icon className="size-7 text-[#149784]" />
                  <h2 className="mt-6 font-display text-4xl font-black uppercase">
                    {title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-black/55">{body}</p>
                </article>
              ))}
            </div>

            <blockquote className="mx-auto mt-20 max-w-4xl text-balance text-center font-display text-5xl font-black uppercase leading-[0.95] md:text-7xl">
              “{copy.promise.title}”
            </blockquote>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#149784]">
                {copy.mission2022.mediaTitle}
              </p>
              <h2 className="mt-4 font-display text-5xl font-black uppercase leading-none md:text-7xl">
                {copy.stories.title}
              </h2>
              <p className="mt-6 text-white/55">
                {copy.mission2022.mediaBody}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="group rounded-3xl border border-white/10 bg-white/[0.035] p-7"
              >
                <Instagram className="size-7 text-[#e94235]" />
                <h3 className="mt-16 font-display text-3xl font-black uppercase">
                  Instagram
                </h3>
                <ArrowRight className="mt-5 size-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noreferrer"
                className="group rounded-3xl border border-white/10 bg-white/[0.035] p-7"
              >
                <Facebook className="size-7 text-[#149784]" />
                <h3 className="mt-16 font-display text-3xl font-black uppercase">
                  Facebook
                </h3>
                <ArrowRight className="mt-5 size-4 transition group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["01", "02", "03", "04"].map((item, index) => (
              <div
                key={item}
                className={cn(
                  "relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10",
                  index % 2 === 0
                    ? "bg-[linear-gradient(155deg,#2a1915,#11100f)]"
                    : "bg-[linear-gradient(155deg,#15302b,#11100f)]",
                )}
              >
                <div className="grain absolute inset-0 opacity-40" />
                <span className="absolute left-5 top-5 text-xs font-bold tracking-[0.2em] text-white/35">
                  {item}
                </span>
                <span className="absolute bottom-5 left-5 right-5 text-xs font-bold uppercase tracking-[0.16em] text-white/45">
                  {copy.stories.pending}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-[2rem] bg-[#e94235] p-8 md:p-10">
            <h2 className="font-display text-5xl font-black uppercase">
              {copy.current.title}
            </h2>
            <p className="mt-4 max-w-2xl text-white/75">{copy.current.body}</p>
            <Link
              to={hrefFor(lang, "project")}
              className={cn(buttonVariants({ variant: "light" }), "mt-7")}
            >
              {copy.current.cta}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
