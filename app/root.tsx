import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";

import type { Route } from "./+types/root";
import { isLang } from "~/lib/i18n";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=Inter:wght@400;500;600;700&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const pathLang = location.pathname.split("/")[1];
  const lang = isLang(pathLang) ? pathLang : "it";

  return (
    <html lang={lang}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#11100f" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let title = "Qualcosa non ha funzionato";
  let details = "Si è verificato un errore inatteso.";

  if (isRouteErrorResponse(error)) {
    title = error.status === 404 ? "404" : "Errore";
    details =
      error.status === 404
        ? "La pagina richiesta non esiste."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error instanceof Error) {
    details = error.message;
  }

  return (
    <main className="grid min-h-screen place-items-center bg-[#11100f] px-6 text-[#f5eddd]">
      <div className="max-w-xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#e94235]">
          Tanzania Expedition
        </p>
        <h1 className="mt-4 font-display text-6xl font-black uppercase">
          {title}
        </h1>
        <p className="mt-4 text-white/60">{details}</p>
        <a
          href="/it"
          className="mt-8 inline-flex rounded-full bg-[#f5b73b] px-6 py-3 font-semibold text-[#171411]"
        >
          Torna alla home
        </a>
      </div>
    </main>
  );
}
