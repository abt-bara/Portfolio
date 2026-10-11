// Files in /public are served from the site's base path, which differs on GitHub Pages
// ("/repo-name/"). Never hard-code "/images/x.png": build the URL from BASE_URL instead.
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`
