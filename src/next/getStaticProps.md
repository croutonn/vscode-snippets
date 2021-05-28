---
prefix: [nget, gsp]
description: Next.js GetStaticProps
scope: typescriptreact
---

```typescript
import type { GetStaticPropsContext, GetStaticPropsResult } from 'next'

type ${1:$TM_FILENAME_BASE}Params = {
	slug: string
}

type ${1:$TM_FILENAME_BASE}Props = {}

export async function getStaticProps(context: GetStaticPropsContext<${1:$TM_FILENAME_BASE}Params>): Promise<GetStaticPropsResult<${1:$TM_FILENAME_BASE}Props>> {
  const props: ${1:$TM_FILENAME_BASE}Props = {}
	return {
		props,
	}
}
```
