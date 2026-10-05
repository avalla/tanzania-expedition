# Tanzania Expedition

Prima versione del sito ufficiale Tanzania Expedition.

## Stack

- React Router Framework Mode con SSR
- React 19
- TypeScript
- Tailwind CSS 4
- componenti UI in stile shadcn/ui
- Cloudflare Workers + Vite plugin
- Bun
- GitHub Actions per CI e deploy

## Sviluppo locale

```bash
bun install
bun run dev
```

L'app sarà disponibile di default su `http://localhost:5173`.

## Comandi

```bash
bun run dev
bun run typecheck
bun run build
bun run check
bun run deploy
```

## Cloudflare

Il progetto usa `wrangler.jsonc` come source of truth del Worker.

Per autenticarti in locale:

```bash
bunx wrangler login
```

Per il deploy manuale:

```bash
bun run deploy
```

### GitHub Actions

Il workflow `.github/workflows/ci.yml` esegue typecheck e build su push e pull request.

Il workflow `.github/workflows/deploy.yml` pubblica su Cloudflare quando viene effettuato un push su `main`, dopo i controlli.

Configurare nel repository GitHub:

**Settings → Secrets and variables → Actions → Secrets**

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Il token Cloudflare deve essere limitato all'account interessato e avere i permessi necessari per modificare/deployare Workers.

## Multilingua

La prima versione supporta:

- Italiano `/it`
- English `/en`
- Español `/es`
- Français `/fr`

La root `/` reindirizza a `/it`.

## Contenuti

I testi derivano dal comunicato Tanzania Expedition 2026. La missione 2022 è documentata, mentre foto e video social vengono progressivamente catalogati: il sito evita di inventare date, risultati o media non ancora verificati.

Social ufficiali:

- Instagram: https://www.instagram.com/drops.in.the.ocean
- Facebook: https://www.facebook.com/profile.php?id=61589198731985

## Asset e media

Gli asset della missione vanno aggiunti in `public/media/` con formati ottimizzati per il web (AVIF/WebP per immagini, MP4/WebM o provider video dedicato per filmati).

Per ogni media si consiglia di conservare nel modello contenuti:

- anno
- luogo
- missione
- didascalia
- autore/provenienza
- link al post social originale, se presente

## Stato

Questa è una prima bozza visuale e strutturale. È già predisposta per SEO multilingua, SSR e deploy su Cloudflare.
