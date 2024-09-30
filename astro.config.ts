import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

import * as path from 'node:path'
import postCssOklabPolyfill from '@csstools/postcss-oklab-function'
import autoprefixer from 'autoprefixer'
import cssDiscardComments from 'postcss-discard-comments'
import tailwindcss from 'tailwindcss'
import tailwindcssNesting from 'tailwindcss/nesting'

export default defineConfig({
  vite: {
    css: {
      postcss: {
        plugins: [
          tailwindcssNesting(),
          tailwindcss({
            config: path.resolve(import.meta.dirname, 'tailwind.config.ts')
          }),

          postCssOklabPolyfill({ preserve: true }),
          autoprefixer(),
          cssDiscardComments({ removeAll: true })
        ]
      }
    }
  },
  output: 'server',
  security: {
    checkOrigin: false
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
      nesting: true
    }),
    react()
  ]
})
