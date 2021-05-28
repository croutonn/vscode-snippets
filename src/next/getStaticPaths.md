---
prefix: [nget, gsp]
description: Next.js GetStaticPaths
scope: typescriptreact
---

```typescript
import type { GetStaticPathsContext, GetStaticPathsResult } from 'next'

type ${1:$TM_FILENAME_BASE}Params = {
	slug: string
}

export async function getStaticPaths(context: GetStaticPathsContext): Promise<GetStaticPathsResult<${1:$TM_FILENAME_BASE}Params>> {
  return {
		paths: [],
		fallback: false,
	}
}
```
