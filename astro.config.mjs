import react from '@astrojs/react'
import postCssOklabPolyfill from '@csstools/postcss-oklab-function'
import tailwindcss from '@tailwindcss/vite'
import autoprefixer from 'autoprefixer'
import cssDiscardComments from 'postcss-discard-comments'
import rehypeExternalLinks from 'rehype-external-links'
import { remarkReadingTime } from './src/lib/readTime.ts'
import cloudflare from '@astrojs/cloudflare'
import { defineConfig, passthroughImageService, sharpImageService } from 'astro/config'
import { loadEnv } from 'vite'

import sitemap from '@astrojs/sitemap';

const ENV = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '')
const IS_PRODUCTION = ENV.NODE_ENV === 'production'

export default defineConfig({
  site: 'https://future.pages.dev',
  vite: {
    build: {
      cssMinify: 'lightningcss'
    },
    ssr: {
      external: ['node:buffer', 'three']
    },
    plugins: [tailwindcss()],
    css: {
      postcss: {
        plugins: [postCssOklabPolyfill({ preserve: true }), autoprefixer(), cssDiscardComments({ removeAll: true })]
      }
    }
  },
  security: {
    checkOrigin: true
  },
  integrations: [react(), sitemap()],
  output: 'server',
  adapter: cloudflare({
    imageService: 'cloudflare',
    platformProxy: {
      enabled: true
    }
  }),
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  image: {
    service: IS_PRODUCTION ? sharpImageService() : passthroughImageService()
  },
  experimental: {
    contentCollectionCache: true
  },
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          content: { type: 'text', value: ' 🔗' },
          target: '_blank',
          rel: ['nofollow', 'noreferrer']
        }
      ]
    ],
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true
    },
    gfm: true
  }
})
