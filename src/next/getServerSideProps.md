---
prefix: [nget, gssp]
description: Next.js GetServerSideProps
scope: typescriptreact
---

```typescript
import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'

type ${1:$TM_FILENAME_BASE}Params = {
	slug: string
}

type ${1:$TM_FILENAME_BASE}Props = {}

export async function getServerSideProps(context: GetServerSidePropsContext<${1:$TM_FILENAME_BASE}Params>): Promise<GetServerSidePropsResult<${1:$TM_FILENAME_BASE}Props>> {
	const props: ${1:$TM_FILENAME_BASE}Props = {}
	return {
		props,
	}
}
```
