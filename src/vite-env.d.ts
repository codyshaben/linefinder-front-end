/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MAPS_API_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module '*.svg' {
  const src: string
  export default src
}
declare module '*.jpg' {
  const src: string
  export default src
}
declare module '*.png' {
  const src: string
  export default src
}

declare module 'react-star-ratings'
