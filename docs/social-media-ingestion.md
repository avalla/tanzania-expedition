# Social media ingestion

Il sito è predisposto per integrare fotografie e video provenienti dagli
archivi social di Tanzania Expedition.

## Stato attuale

Account ufficiali:

- Instagram: https://www.instagram.com/drops.in.the.ocean
- Facebook: https://www.facebook.com/profile.php?id=61589198731985

L'accesso pubblico automatizzato ai singoli post Meta non è affidabile:
Instagram non espone l'archivio in modo consistente agli strumenti web e
Facebook spesso richiede login. Per questo non vengono copiati asset o
attribuiti contenuti sulla base di risultati incerti.

## Flusso consigliato

Per ogni foto o video:

1. identificare il post originale o il file originale;
2. verificare anno, missione, luogo e contesto;
3. conservare il link al post come provenienza;
4. usare una copia dell'asset di cui Tanzania Expedition dispone dei diritti,
   evitando hotlink verso URL CDN temporanei di Meta;
5. ottimizzare l'asset;
6. aggiungere alt text e caption in IT/EN/ES/FR;
7. registrarlo in `app/lib/media.ts`.

## Storage

Per una quantità limitata di fotografie:

- `public/media/<anno>/...`
- AVIF/WebP per le immagini

Per video o un archivio in crescita:

- Cloudflare R2 per file e immagini
- Cloudflare Stream per video

Cloudflare Stream evita di far transitare video pesanti nel repository Git e
gestisce encoding e delivery.

## Cosa serve per popolare l'archivio

Uno dei seguenti è sufficiente:

- link diretti ai singoli post Instagram/Facebook;
- export/download dell'account social;
- cartella con foto e video originali.

Con i link ai singoli post è possibile associare correttamente i media alla
missione e mantenere la provenienza pubblica nel sito.
