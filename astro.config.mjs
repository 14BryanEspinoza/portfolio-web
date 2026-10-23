// @ts-check
import { defineConfig, sharpImageService } from "astro/config";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon(), sitemap()],

  prefetch: true,

  site: "https://14bryanespinoza.github.io/portfolio-web/",
  base: "/portfolio-web/",
  build: { assets: "assets" },

  image: {
    service: sharpImageService({
      avif: { effort: 4, chromaSubsampling: "4:2:0" },
      webp: { effort: 5 },
      jpeg: { mozjpeg: true },
      png: { compressionLevel: 9 },
    }),
  },
});
