import { hrefFor, LANGUAGES, PAGE_KEYS } from "~/lib/i18n";

export function loader({ request }: { request: Request }) {
  const origin = new URL(request.url).origin;
  const paths = LANGUAGES.flatMap((lang) => [
    hrefFor(lang),
    ...PAGE_KEYS.map((page) => hrefFor(lang, page)),
    hrefFor(lang, "missions", "2022"),
  ]);

  const urls = paths
    .map((path) => "  <url><loc>" + origin + path + "</loc></url>")
    .join("\n");

  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls +
    "\n</urlset>\n";

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
