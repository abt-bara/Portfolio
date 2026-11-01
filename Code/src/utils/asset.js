// Prefix asset paths with Vite's configured base URL.
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`
