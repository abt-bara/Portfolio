# Developer portfolio

React + Vite single page. All content lives in **`src/portfolio.config.js`**.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
```

## Change content
- Name / description / hero button labels → `owner` in `src/portfolio.config.js`
- Skill groups, tool icons, and language levels → `skills` in `src/portfolio.config.js`
- Add a project → add one object to `projects` (the carousel and dots update themselves)
- Project screenshot → put the file in `public/images/` and set `preview: 'images/your-file.png'`
- New skill icon key → add an Iconify icon ID to `src/iconMap.js`

## Deploy (Netlify)
1. Import this repository into Netlify.
2. Netlify reads the repository-root `netlify.toml` and builds the app from `Code/`.
3. The build publishes `Code/dist/` and copies `Code/assets/` into the deployed `assets/` directory.
