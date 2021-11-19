---
prefix: [nget, gsp]
description: Next.js GetStaticProps
scope: typescriptreact
---

```typescript
import { GetStaticProps } from 'next'
import type { ParsedUrlQuery } from "querystring";

export interface ${1:$TM_FILENAME_BASE}Params extends ParsedUrlQuery {
	slug: string
}

export interface ${1:$TM_FILENAME_BASE}Props {}

export const getStaticProps: GetStaticProps<${1:$TM_FILENAME_BASE}Params> = async (context) => {
	const props: ${1:$TM_FILENAME_BASE}Props = {}

	return {
		props,
	}
}
```
