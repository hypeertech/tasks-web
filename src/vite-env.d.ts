/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_GQL_ENDPOINT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}