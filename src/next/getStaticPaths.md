---
prefix: [nget, gsp]
description: Next.js GetStaticPaths
scope: typescriptreact
---

```typescript
import { GetStaticPaths } from 'next'
import type { ParsedUrlQuery } from "querystring";

export interface ${1:$TM_FILENAME_BASE}Params extends ParsedUrlQuery {
	slug: string
}

export const getStaticPaths: GetStaticPaths<${1:$TM_FILENAME_BASE}Params> = async (context) => {
	return {
		paths: [],
		fallback: false,
	}
}
```
