/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    '@tailwindcss/postcss': {},
    autoprefixer: {},
    'postcss-import': {},
    '@csstools/postcss-oklab-function': { preserve: true },
    'postcss-preset-env': {
      features: { 'nesting-rules': false }
    }
  }
}

export default config
