import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import robotsTxt from 'astro-robots-txt'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), sitemap(), robotsTxt()],
  site: 'https://alejandrofan2.dev'
})
