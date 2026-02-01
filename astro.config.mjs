// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  devToolbar: {
    enabled: false,
  },

  integrations: [icon({
    include: {
      pixel: ["code-block-solid"],
      ep: ["arrow-up-bold"],
      "material-symbols": ["menu-rounded"]
    }
  })]
});