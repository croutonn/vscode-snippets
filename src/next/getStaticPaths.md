---
prefix: [nget, gsp]
description: Next.js GetStaticPaths
scope: typescriptreact
---

```typescript
import { GetStaticPaths } from 'next'

type ${1:$TM_FILENAME_BASE}Params = {
	slug: string
}

export const getStaticPaths: GetStaticPaths<${1:$TM_FILENAME_BASE}Params> = async () => {
	return {
		paths: [],
		fallback: false,
	}
}
```