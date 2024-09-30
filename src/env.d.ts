/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/astro-jsx" />
/// <reference types="astro/client" />

/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

declare module '*.astro' {
  const Component: React.ComponentType // or use `unknown` if more appropriate
  export default Component
}
