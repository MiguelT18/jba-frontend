// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  devToolbar: {
    enabled: false,
  },

  integrations: [
    icon({
      include: {
        pixel: ['code-block-solid'],
        ep: ['arrow-up-bold'],
        'material-symbols': [
          'menu-rounded',
          'chevron-left-rounded',
          'chevron-right-rounded',
          'license',
        ],
        lucide: [
          'users',
          'graduation-cap',
          'alarm-clock',
          'chart-no-axes-combined',
          'file-check',
          'circle-check-big',
          'clock',
          'award',
          'star',
        ],
        carbon: ['document-set'],
        iconamoon: ['shield-yes'],
        'bitcoin-icons': ['verify-filled'],
        mdi: ['register-outline'],
      },
    }),
    react(),
  ],
});
