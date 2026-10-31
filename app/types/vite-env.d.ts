/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MANTINE_DOC: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
