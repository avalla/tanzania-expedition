# Tanzania Expedition

Prima versione del sito ufficiale Tanzania Expedition.

## Stack

- React Router Framework Mode con SSR
- React 19 + TypeScript
- Tailwind CSS 4
- componenti UI in stile shadcn/ui
- Cloudflare Workers + Cloudflare Vite plugin
- Bun
- GitHub Actions per CI e deploy

Non è un monorepo: per questa prima versione aggiungerebbe struttura senza
risolvere un problema reale.

## Sviluppo locale

```bash
bun install
bun run dev
```

Comandi principali:

```bash
bun run typecheck
bun run build
bun run check
bun run deploy
```

## Cloudflare / Wrangler

`wrangler.jsonc` è la source of truth del Worker, che si chiama
`tanzania-expedition`.

Per autenticarti in locale:

```bash
bunx wrangler login
```

Per verificare la configurazione senza pubblicare:

```bash
bunx wrangler deploy --dry-run
```

## CI e deploy

Il workflow `.github/workflows/ci.yml` esegue:

1. installazione con Bun;
2. typecheck;
3. build SSR;
4. dry-run Wrangler;
5. deploy su Cloudflare solo dopo il quality gate.

Il deploy è inizialmente disabilitato tramite una repository variable, così la
prima PR può essere validata senza produrre il tradizionale rituale umano del
"deploy rosso perché mancavano i secrets".

### Secrets GitHub richiesti

In **Settings → Secrets and variables → Actions → Secrets** aggiungere:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Poi in **Settings → Secrets and variables → Actions → Variables** aggiungere:

- `CLOUDFLARE_DEPLOY_ENABLED=true`

A quel punto un push su `main` effettua automaticamente il deploy. È anche
possibile usare **Actions → CI and Deploy → Run workflow**.

Il token Cloudflare deve essere dedicato al deploy e limitato all'account
necessario, con permessi di modifica dei Workers.

Non servono altre chiavi runtime in questa prima versione.

## Dominio

Il primo deploy può usare il sottodominio `workers.dev` di Cloudflare.
Il dominio definitivo si collega da Cloudflare, nelle impostazioni del Worker,
alla sezione **Domains & Routes**.

Quando il dominio finale è noto vanno aggiunti canonical e hreflang assoluti.

## Multilingua

- Italiano: `/it`
- English: `/en`
- Español: `/es`
- Français: `/fr`

Gli slug principali sono localizzati, ad esempio:

- `/it/progetto`
- `/en/project`
- `/es/proyecto`
- `/fr/projet`

La root `/` reindirizza a `/it`.

## SEO

La prima versione include:

- SSR;
- title e description per pagina/lingua;
- Open Graph di base;
- `robots.txt`;
- `sitemap.xml` generata dinamicamente;
- URL localizzati;
- HTML semantico e responsive.

Da completare con il dominio e i media definitivi:

- canonical;
- hreflang assoluti;
- immagine Open Graph;
- JSON-LD definitivo per progetto ed eventi.

## Contenuti e media

I testi sono basati sul comunicato Tanzania Expedition 2026.

La missione 2022 è documentata nei materiali forniti. Gli archivi social
ufficiali sono linkati, ma i singoli post Meta non sono stati usati come fonte
automatica perché non risultano indicizzati in modo affidabile.

Per questo gli slot fotografici della missione 2022 sono predisposti ma non
mostrano immagini inventate o attribuite senza verifica.

Vedi `docs/content-roadmap.md`.

## Social

- Instagram: https://www.instagram.com/drops.in.the.ocean
- Facebook: https://www.facebook.com/profile.php?id=61589198731985
