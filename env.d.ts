/// <reference types="vite/client" />
// https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html


// https://vitejs.dev/guide/env-and-mode#intellisense-for-typescript
interface ImportMetaEnv {
  readonly VITE_APP_API_HOST: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}