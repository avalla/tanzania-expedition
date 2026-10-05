import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home-redirect.ts"),
  route("robots.txt", "routes/robots.ts"),
  route("sitemap.xml", "routes/sitemap.ts"),
  route(":lang", "routes/home.tsx"),
  route(":lang/:section/:detail", "routes/detail.tsx"),
  route(":lang/:section", "routes/section.tsx"),
] satisfies RouteConfig;
