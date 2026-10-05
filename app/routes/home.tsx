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
} from "lucide-react";
import { Link, redirect } from "react-router";

import type { Route } from "./+types/home";
import { SavannaBackdrop } from "~/components/savanna-backdrop";
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  SiteShell,
} from "~/components/site-shell";
import { buttonVariants } from "~/components/ui/button";
import { getCopy, hrefFor, isLang } from "~/lib/i18n";
import { cn } from "~/lib/utils";

export function loader({ params }: Route.LoaderArgs) {
  if (!isLang(params.lang)) return redirect("/it");
  return { lang: params.lang, copy: getCopy(params.lang) };
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

export default function Home({ loaderData }: Route.ComponentProps) {
  const { lang, copy } = loaderData;

  const promiseCards = [
    { Icon: Droplets, title: copy.promise.pillars[0][0], body: copy.promise.pillars[0][1] },
    { Icon: Sparkles, title: copy.promise.pillars[1][0], body: copy.promise.pillars[1][1] },
    { Icon: PackageOpen, title: copy.promise.pillars[2][0], body: copy.promise.pillars[2][1] },
    { Icon: Users, title: copy.promise.pillars[3][0], body: copy.promise.pillars[3][1] },
  ];

  const currentCards = [
    { Icon: Droplets, title: copy.current.cards[0][0], body: copy.current.cards[0][1] },
    { Icon: HeartHandshake, title: copy.current.cards[1][0], body: copy.current.cards[1][1] },
    { Icon: MapPin, title: copy.current.cards[2][0], body: copy.current.cards[2][1] },
  ];

  return (
    <SiteShell lang={lang}>
      <main>
        <section className="relative flex min-h-[92svh] items-end overflow-hidden pt-20">
          <SavannaBackdrop />
          <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-28 lg:px-8 lg:pb-24">
            <div className="max-w-4xl">
              <p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#f5b73b]">
                <MapPin className="size-4" />
                {copy.hero.eyebrow}
              </p>
              <h1 className="text-balance font-display text-[clamp(4rem,10vw,9rem)] font-black uppercase leading-[0.82] tracking-[-0.035em] text-white">
                {copy.hero.title}
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
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
                  className={buttonVariants({ variant: "secondary", size: "lg" })}
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
            <div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr]">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#e94235]">
                  {copy.promise.eyebrow}
                </p>
                <h2 className="text-balance mt-5 font-display text-5xl font-black uppercase leading-[0.92] md:text-7xl">
                  {copy.promise.title}
                </h2>
              </div>
              <div>
                <p className="max-w-2xl text-lg leading-8 text-[#171411]/70">
                  {copy.promise.body}
                </p>
                <div className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-black/10 bg-black/10 sm:grid-cols-2">
                  {promiseCards.map(({ Icon, title, body }) => (
                    <article key={title} className="bg-[#fbf6eb] p-7">
                      <Icon className="size-6 text-[#149784]" />
                      <h3 className="mt-5 font-display text-3xl font-black uppercase">
                        {title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-black/55">
                        {body}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-white/10 bg-[#131211]">
          <div className="absolute -left-44 top-0 size-96 rounded-full bg-[#149784]/8 blur-3xl" />
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
                className={cn(buttonVariants({ variant: "secondary" }), "mt-8")}
              >
                {copy.mission2022.cta}
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="relative min-h-[350px] overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_70%_20%,rgba(245,183,59,.25),transparent_22%),linear-gradient(145deg,#2a1915,#11100f_66%)] p-7">
              <div className="grain absolute inset-0 opacity-40" />
              <div className="relative flex h-full min-h-[300px] flex-col justify-between">
                <span className="w-fit rounded-full border border-white/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                  2022 · Tanzania
                </span>
                <div>
                  <div className="font-display text-8xl font-black leading-none text-[#f5b73b]">
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

        <section className="bg-[#1b1714]">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#f5b73b]">
                  {copy.current.eyebrow}
                </p>
                <h2 className="text-balance mt-5 font-display text-6xl font-black uppercase leading-[0.9] md:text-8xl">
                  {copy.current.title}
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-8 text-white/62">
                  {copy.current.body}
                </p>
                <Link
                  to={hrefFor(lang, "project")}
                  className={cn(buttonVariants(), "mt-8")}
                >
                  {copy.current.cta}
                  <ArrowRight className="size-4" />
                </Link>
              </div>
              <div className="grid gap-4">
                {currentCards.map(({ Icon, title, body }) => (
                  <article
                    key={title}
                    className="rounded-3xl border border-white/10 bg-white/[0.035] p-7"
                  >
                    <div className="flex items-start gap-5">
                      <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#f5b73b] text-[#171411]">
                        <Icon className="size-6" />
                      </div>
                      <div>
                        <h3 className="font-display text-3xl font-black uppercase">
                          {title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-white/55">
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

        <section className="bg-[#0f0e0d]">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#149784]">
                {copy.stories.eyebrow}
              </p>
              <h2 className="text-balance mt-4 font-display text-6xl font-black uppercase leading-[0.9] md:text-8xl">
                {copy.stories.title}
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/60">
                {copy.stories.body}
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="group relative min-h-[320px] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,#34201b,#151312)] p-8"
              >
                <div className="grain absolute inset-0 opacity-35" />
                <Instagram className="relative size-8 text-[#e94235]" />
                <div className="relative mt-28">
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
                className="group relative min-h-[320px] overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,#132825,#111211)] p-8"
              >
                <div className="grain absolute inset-0 opacity-35" />
                <Facebook className="relative size-8 text-[#149784]" />
                <div className="relative mt-28">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">
                    Tanzania Expedition
                  </p>
                  <h3 className="mt-3 font-display text-4xl font-black uppercase">
                    {copy.stories.facebook}
                  </h3>
                  <ArrowRight className="mt-5 size-5 transition group-hover:translate-x-1" />
                </div>
              </a>
            </div>

            <div className="mt-5 rounded-3xl border border-dashed border-white/15 px-7 py-6 text-sm text-white/45">
              {copy.stories.pending}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#e94235] text-white">
          <div className="grain absolute inset-0 opacity-30" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[1fr_.8fr] lg:px-8 lg:py-28">
            <div>
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-white/70">
                <Music2 className="size-4" />
                {copy.events.eyebrow}
              </p>
              <h2 className="text-balance mt-4 font-display text-6xl font-black uppercase leading-[0.9] md:text-8xl">
                {copy.events.title}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
                {copy.events.body}
              </p>
              <Link
                to={hrefFor(lang, "events")}
                className={cn(buttonVariants({ variant: "light" }), "mt-8")}
              >
                {copy.events.cta}
                <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="flex items-end">
              <div className="w-full rounded-[2rem] border border-white/25 bg-[#161311]/90 p-8 shadow-2xl">
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
                <p className="mt-6 text-sm text-white/50">{copy.events.empty}</p>
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
