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

## Deploy (Netlify)
1. Import this repository into Netlify.
2. Netlify reads the repository-root `netlify.toml` and builds the app from `Code/`.
3. The build publishes `Code/dist/` and copies `Code/assets/` into the deployed `assets/` directory.
