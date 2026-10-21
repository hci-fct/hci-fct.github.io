# Erasmus@FCT – IPM 2026/27

One-page project website for our Human-Computer Interaction (IPM) final project at NOVA FCT:
an information platform for incoming Erasmus students.

Built with Next.js (static export) and Tailwind CSS, deployed to GitHub Pages.

## Editing content

All texts, stages, scenarios and team members are in [`src/content/site.ts`](src/content/site.ts).

- **Reports:** put PDFs in `public/reports/` and set e.g. `report: "/reports/stage3.pdf"`.
- **Photos:** put images in `public/gallery/` and add them to `prototype.gallery`.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export into ./out
```

## Deployment

Every push to `main` builds and deploys the site via GitHub Actions
(`.github/workflows/deploy.yml`). In the repo settings, set **Pages → Source** to **GitHub Actions**.
