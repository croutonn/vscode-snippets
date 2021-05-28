---
prefix: nrund
description: Declaration for Next.js Runtime Configuration
scope: typescript
---

```typescript
declare module 'next/config' {
  import type { PublicRuntimeConfig, ServerRuntimeConfig } from '${1}'

  function getConfig<P = PublicRuntimeConfig, S = ServerRuntimeConfig>(): {
    publicRuntimeConfig: P
    serverRuntimeConfig: S
  }
  export default getConfig
}
```
