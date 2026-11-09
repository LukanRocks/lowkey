# Low Key Estúdios

Static site for [lowkeyestudios.com](https://lowkeyestudios.com), built with Astro and hosted on Vercel. Mobile first and built for social ad traffic: no framework JavaScript, images converted to AVIF/WebP at build time, and about 45 KB per page before photos.

## Commands

```bash
pnpm install
pnpm dev        # http://localhost:4321 while editing
pnpm build      # production build in dist/
pnpm preview    # serve the production build
pnpm format     # Prettier
```

## Where to edit things

| What                                                          | File                                                 |
| ------------------------------------------------------------- | ---------------------------------------------------- |
| Prices, plans, specs, fees, copy for each space               | `src/data/espacos.ts`                                |
| Equipment, how it works, cancellation policy, add-on services | `src/data/compartilhado.ts`                          |
| WhatsApp number, group link, address, social links            | `src/data/site.ts`                                   |
| Logo (placeholder yellow circle for now)                      | `src/components/Logo.astro` and `public/favicon.svg` |
| Colors and type                                               | `src/styles/global.css` (`:root` tokens)             |

Every WhatsApp button opens the chat with a message already typed, naming the space and plan (for example "Quero reservar o Estúdio Galpão – Pro (4h)").

## Adding photos

Put photos in the matching folder; no code changes needed:

```
src/assets/galeria/
  galpao/fundo-infinito/   galpao/chroma-key/   galpao/galpao/   galpao/camarim/   galpao/cozinha/
  casarao/terreo/          casarao/primeiro-andar/          casarao/externo/
  portfolio/
```

- Files are sorted by name, so prefix them `01-`, `02-`… to set the order.
- The **first photo of each space's first folder** is used as the page cover and on the home page card.
- Use the original high-resolution JPGs: the build makes the phone-sized versions.

## Analytics and Meta Pixel

Nothing loads until the visitor taps **Aceitar** on the cookie banner.

- **Vercel Web Analytics:** turn on Analytics in the Vercel project.
- **Meta Pixel:** set `PUBLIC_META_PIXEL_ID` in the Vercel project's environment variables (see `.env.example`) and redeploy.
- Every WhatsApp click is sent as a `Contact` event with the space and plan as `content_name`.

## Deploy

Connect the Git repository to Vercel: every push to `main` deploys to production, and every pull request gets a preview link. `vercel.json` holds clean URLs, the old-URL redirect (`/casaro-antigo` → `/casarao`) and long-lived caching for hashed assets.
