# Hideout Polito website

Sito istituzionale della community Hideout del Politecnico di Torino, realizzato con Next.js (App Router), TypeScript, Tailwind CSS e componenti shadcn/ui.

## Requisiti

- Node.js 18.18+ (si consiglia l'uso di `corepack` per abilitare pnpm)
- pnpm 9+

## Installazione

```bash
pnpm install
```

## Script disponibili

```bash
pnpm dev     # Avvia l'ambiente di sviluppo su http://localhost:3000
pnpm build   # Esegue la build ottimizzata per la produzione
pnpm start   # Avvia il server Next.js in modalità produzione (richiede pnpm build)
pnpm lint    # Esegue ESLint sui file del progetto
pnpm test    # Esegue i test Jest/React Testing Library
```

## Componenti shadcn/ui

Il progetto è stato inizializzato con `pnpm dlx shadcn-ui@latest init` e sono stati generati i seguenti componenti:

- Button
- Card
- Tabs
- Badge
- Avatar
- NavigationMenu
- Input

È disponibile anche l'helper `lib/utils.ts` con la funzione `cn`.

Per aggiungere nuovi componenti in futuro:

```bash
pnpm dlx shadcn-ui@latest add <nome-componente>
```

## Struttura principali cartelle

- `app/`: pagine e layout Next.js (App Router)
- `components/`: componenti condivisi e UI shadcn
- `data/`: dati statici (es. elenco membri del team)
- `public/`: asset statici (logo, favicon, manifest, immagini)

## Test

È presente un test di base (`__tests__/team.test.tsx`) che verifica il rendering della pagina Team. Per eseguirlo:

```bash
pnpm test
```

## Credits

Design e sviluppo a cura della community Hideout Polito.
