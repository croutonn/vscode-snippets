---
prefix: [nget, gssp]
description: Next.js GetServerSideProps
scope: typescriptreact
---

```typescript
import { GetServerSideProps } from 'next'

type ${1:$TM_FILENAME_BASE}Params = {
	slug: string
}

export const getServerSideProps: GetServerSideProps<${1:$TM_FILENAME_BASE}Params> = async (context) => {
	const props: ${1:$TM_FILENAME_BASE}Props = {}

	return {
		props,
	}
}
```
