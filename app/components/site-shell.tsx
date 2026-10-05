import { Facebook, Instagram, Menu, Youtube } from "lucide-react";
import { Link } from "react-router";

import {
  getCopy,
  hrefFor,
  LANGUAGES,
  PAGE_KEYS,
  type Lang,
  type PageKey,
} from "~/lib/i18n";
import { cn } from "~/lib/utils";

export const INSTAGRAM_URL = "https://www.instagram.com/drops.in.the.ocean";
export const FACEBOOK_URL =
  "https://www.facebook.com/profile.php?id=61589198731985";
export const YOUTUBE_URL =
  "https://youtu.be/51VFiMRKIp8?is=_tCvaoSDyG-VXLjR";

export function SiteShell({
  lang,
  currentPage,
  detail,
  children,
}: {
  lang: Lang;
  currentPage?: PageKey;
  detail?: string;
  children: React.ReactNode;
}) {
  const copy = getCopy(lang);

  return (
    <div className="min-h-screen bg-[#545156] text-[#efe6d1]">
      <header className="fixed inset-x-0 top-0 z-50 border-t-[6px] border-[#df3946] bg-[#545156]/94 shadow-[0_8px_28px_rgba(0,0,0,.12)] backdrop-blur-xl">
        <div className="mx-auto flex h-[74px] max-w-7xl items-center gap-5 px-5 lg:px-8">
          <Link
            to={hrefFor(lang)}
            className="mr-auto flex items-center"
            aria-label="Tanzania Expedition"
          >
            <img
              src="/media/communique-logo.svg"
              alt="Tanzania Expedition"
              className="h-11 w-auto max-w-[220px]"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {PAGE_KEYS.map((page) => (
              <Link
                key={page}
                to={hrefFor(lang, page)}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium text-white/70 transition hover:bg-white/6 hover:text-white",
                  currentPage === page && "bg-white/7 text-white",
                  page === "support" &&
                    "ml-2 bg-[#df3946] px-4 text-white hover:bg-[#f05245]",
                )}
              >
                {copy.nav[page]}
              </Link>
            ))}
          </nav>

          <details className="relative hidden sm:block">
            <summary className="cursor-pointer list-none rounded-full border border-white/15 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white/80 hover:bg-white/6">
              {lang.toUpperCase()}
            </summary>
            <div className="absolute right-0 mt-3 w-40 rounded-2xl border border-white/10 bg-[#4b494e] p-2 shadow-2xl">
              {LANGUAGES.map((target) => (
                <Link
                  key={target}
                  to={hrefFor(target, currentPage, detail)}
                  className={cn(
                    "block rounded-xl px-3 py-2 text-sm text-white/70 hover:bg-white/7 hover:text-white",
                    target === lang && "bg-white/7 text-white",
                  )}
                >
                  {getCopy(target).localeName}
                </Link>
              ))}
            </div>
          </details>

          <details className="relative lg:hidden">
            <summary className="grid size-10 cursor-pointer list-none place-items-center rounded-full border border-white/15 text-white">
              <Menu className="size-5" />
              <span className="sr-only">{copy.common.menu}</span>
            </summary>
            <div className="absolute right-0 mt-3 w-72 rounded-3xl border border-white/10 bg-[#4b494e] p-3 shadow-2xl">
              <nav className="grid gap-1">
                {PAGE_KEYS.map((page) => (
                  <Link
                    key={page}
                    to={hrefFor(lang, page)}
                    className="rounded-2xl px-4 py-3 text-sm font-semibold text-white/80 hover:bg-white/7 hover:text-white"
                  >
                    {copy.nav[page]}
                  </Link>
                ))}
              </nav>
              <div className="mt-3 grid grid-cols-4 gap-1 border-t border-white/10 pt-3">
                {LANGUAGES.map((target) => (
                  <Link
                    key={target}
                    to={hrefFor(target, currentPage, detail)}
                    className={cn(
                      "rounded-xl px-2 py-2 text-center text-xs font-bold uppercase text-white/60 hover:bg-white/7",
                      target === lang && "bg-white/7 text-white",
                    )}
                  >
                    {target}
                  </Link>
                ))}
              </div>
            </div>
          </details>
        </div>
      </header>

      {currentPage ? (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed bottom-0 right-0 z-20 hidden w-[230px] opacity-[0.12] 2xl:block"
        >
          <img
            src="/media/communique-camel.svg"
            alt=""
            className="h-auto w-full"
          />
        </div>
      ) : null}

      {children}

      <footer className="border-t border-white/10 border-b-[10px] border-b-[#df3946] bg-[#4a484d]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_.8fr] lg:px-8">
          <div>
            <img
              src="/media/communique-logo.svg"
              alt="Tanzania Expedition"
              className="h-14 w-auto max-w-[280px]"
            />
            <p className="mt-3 max-w-xl text-sm leading-6 text-white/55">
              {copy.common.sourceNote}
            </p>
          </div>
          <div className="flex items-start gap-3 md:justify-end">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="grid size-11 place-items-center rounded-full border border-white/12 text-white/70 transition hover:border-[#df3946]/50 hover:text-white"
              aria-label={copy.common.instagram}
            >
              <Instagram className="size-5" />
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noreferrer"
              className="grid size-11 place-items-center rounded-full border border-white/12 text-white/70 transition hover:border-[#00a875]/50 hover:text-white"
              aria-label={copy.common.facebook}
            >
              <Facebook className="size-5" />
            </a>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noreferrer"
              className="grid size-11 place-items-center rounded-full border border-white/12 text-white/70 transition hover:border-[#fab937]/60 hover:text-white"
              aria-label="YouTube"
            >
              <Youtube className="size-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
