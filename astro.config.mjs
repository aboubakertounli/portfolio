import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://aboubakertounli.github.io",
  base: "/portfolio",
  trailingSlash: "always",
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  redirects: {
    "/fr/projects/devsecops-gitops": "/portfolio/fr/",
    "/en/projects/devsecops-gitops": "/portfolio/en/",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
