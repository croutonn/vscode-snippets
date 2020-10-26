---
prefix: [nget, gsp]
description: Next.js GetStaticProps
scope: typescriptreact
---

```typescript
import { GetStaticProps } from 'next'

type ${1:$TM_FILENAME_BASE}Params = {
	slug: string
}

type ${1:$TM_FILENAME_BASE}Props = {}

export const getStaticProps: GetStaticProps<${1:$TM_FILENAME_BASE}Props, ${1:$TM_FILENAME_BASE}Params> = async (context) => {
    const props: ${1:$TM_FILENAME_BASE}Props = {}
	return {
		props,
	}
}
```