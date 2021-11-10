---
prefix: [npage, nextpage, npssg]
description: Next.js Page for SSG
scope: typescriptreact
---

```typescript
import * as React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

type ${1:$TM_FILENAME_BASE}Params = {
	slug: string
}

type ${1:$TM_FILENAME_BASE}Props = {}

const ${1:$TM_FILENAME_BASE}: NextPage<${1:$TM_FILENAME_BASE}Props> = (context) => {
	return (
		<>
			${3}
		</>
	)
}

const getStaticPaths: GetStaticPaths<${1:$TM_FILENAME_BASE}Params> = async (context) => {
	return {
		paths: [],
		fallback: false,
	}
}

const getStaticProps: GetStaticProps<${1:$TM_FILENAME_BASE}Props, ${1:$TM_FILENAME_BASE}Params> = async (context) => {
	const props: ${1:$TM_FILENAME_BASE}Props = {}

	return {
		props,
	}
}

export default ${1:$TM_FILENAME_BASE}
export { getStaticPaths, getStaticProps }
```
