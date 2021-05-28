---
prefix: [npage, nextpage, npssr]
description: Next.js Page for SSR
scope: typescriptreact
---

```typescript
import React from 'react'
import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'

type ${1:$TM_FILENAME_BASE}Params = {
	slug: string
}

type ${1:$TM_FILENAME_BASE}Props = {}

function ${1:$TM_FILENAME_BASE}({ ${2} }: React.PropsWithChildren<${1:$TM_FILENAME_BASE}Props>): React.ReactElement | null {
	return (
		<>
			${3}
		</>
	)
}

async function getServerSideProps(context: GetServerSidePropsContext<${1:$TM_FILENAME_BASE}Params>): Promise<GetServerSidePropsResult<${1:$TM_FILENAME_BASE}Props>> {
	const props: ${1:$TM_FILENAME_BASE}Props = {}
	return {
		props,
	}
}
export default ${1:$TM_FILENAME_BASE}
export { getServerSideProps }
```
