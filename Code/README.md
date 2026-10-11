# Developer portfolio

React + Vite single page. All content lives in **`src/portfolio.config.js`**.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
```

## Change content
- Name / description / button text → `owner` in `src/portfolio.config.js`
- Add a project → add one object to `projects` (the carousel and dots update themselves)
- Project screenshot → put the file in `public/images/` and set `preview: 'images/your-file.png'`
- New icon → add one line to `src/iconMap.js` (names: https://react-icons.github.io/react-icons)

## Deploy (GitHub Pages)
1. Push to a repo whose default branch is `main`.
2. Settings → Pages → Source: **GitHub Actions**.
3. Every push to `main` now builds and publishes automatically (`.github/workflows/deploy.yml`).

`base: './'` in `vite.config.js` makes the build work for both `username.github.io` and `username.github.io/repo-name/`.
