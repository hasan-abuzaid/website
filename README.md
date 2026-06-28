# Hasan Abuzaid — Portfolio

Personal portfolio website built with React, Vite, Tailwind CSS, and shadcn/ui.

## Local development

```bash
npm install
npm run dev
```

Then open the URL printed in the terminal (usually http://localhost:5173).

## Available scripts

| Command            | Description                              |
| ------------------ | ---------------------------------------- |
| `npm run dev`      | Start the local dev server with HMR      |
| `npm run build`    | Build the production site into `dist/`   |
| `npm run preview`  | Preview the production build locally     |
| `npm run typecheck`| Run the TypeScript type checker          |

## Project structure

```
.
├── index.html            # App entry HTML
├── src/
│   ├── main.tsx          # React entry point
│   ├── App.tsx           # Routes (wouter)
│   ├── pages/            # Home, Engineering, Videography, Leadership, Contact
│   ├── components/       # Nav, AuroraBackground, and shadcn/ui components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utilities
│   └── index.css         # Tailwind + theme tokens
├── public/               # Static assets (favicon, robots.txt)
├── vite.config.ts        # Vite config
└── .github/workflows/    # GitHub Pages deploy workflow
```

## Deployment (GitHub Pages)

This repo auto-deploys to GitHub Pages on every push to `main` via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

One-time setup after pushing to GitHub:

1. Go to your repository's **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab).

The site will be published at `https://<username>.github.io/<repo-name>/`.

The workflow automatically sets the correct base path from the repository name,
so client-side routing works regardless of what you name the repo.
