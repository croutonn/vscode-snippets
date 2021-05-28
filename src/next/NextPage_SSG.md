---
prefix: [npage, nextpage, npssg]
description: Next.js Page for SSG
scope: typescriptreact
---

```typescript
import React from 'react'
import type { GetStaticPathsContext, GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next'

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

async function getStaticPaths(context: GetStaticPathsContext): Promise<GetStaticPathsResult<${1:$TM_FILENAME_BASE}Params>> {
  return {
		paths: [],
		fallback: false,
	}
}

async function getStaticProps(context: GetStaticPropsContext<${1:$TM_FILENAME_BASE}Params>): Promise<GetStaticPropsResult<${1:$TM_FILENAME_BASE}Props>> {
  const props: ${1:$TM_FILENAME_BASE}Props = {}
	return {
		props,
	}
}

export default ${1:$TM_FILENAME_BASE}
export { getStaticPaths, getStaticProps }
```
