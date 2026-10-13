/** Prefix a /public file with Vite's base so it works on GitHub Pages sub-paths (e.g. /Portfolio/). */
export const asset = (path: string) => import.meta.env.BASE_URL + path.replace(/^\//, "");
