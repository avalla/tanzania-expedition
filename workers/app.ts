import { createRequestHandler } from "react-router";

type CloudflareContext = {
  waitUntil?: (promise: Promise<unknown>) => void;
  passThroughOnException?: () => void;
};

type CloudflareEnv = Record<string, string | undefined>;

declare module "react-router" {
  export interface AppLoadContext {
    cloudflare: {
      env: CloudflareEnv;
      ctx: CloudflareContext;
    };
  }
}

const requestHandler = createRequestHandler(
  () => import("virtual:react-router/server-build"),
  import.meta.env.MODE,
);

export default {
  fetch(request: Request, env: CloudflareEnv, ctx: CloudflareContext) {
    return requestHandler(request, {
      cloudflare: { env, ctx },
    });
  },
};
