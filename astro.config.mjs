// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// import node from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://hackerdays.org',
  integrations: [tailwind()],
  i18n: {
    locales: ["es", "gl", "en"],
    defaultLocale: "es",
  },
  output: 'static',
  // adapter: node({
  //   includeFiles: ['public/locales/**/*'],
  // }),
});