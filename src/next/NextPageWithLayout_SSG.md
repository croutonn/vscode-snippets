---
prefix: [npagel, nextpagel, npssgl]
description: Next.js Page with layout for SSG
scope: typescriptreact
---

```typescript
import * as React from 'react'
import { GetStaticPaths, GetStaticProps, NextPageWithLayout } from 'next'

type ${1:$TM_FILENAME_BASE}Params = {
	slug: string
}

type ${1:$TM_FILENAME_BASE}Props = {}

const ${1:$TM_FILENAME_BASE}: NextPageWithLayout<${1:$TM_FILENAME_BASE}Props> = ({
	${2}
}) => {
	return (
		<>
			${3}
		</>
	)
}

${1:$TM_FILENAME_BASE}.getLayout = (page) => {
	return <${2:BasicLayout}></${2:BasicLayout}>
}

const getStaticPaths: GetStaticPaths<${1:$TM_FILENAME_BASE}Params> = async (context) => {
	return {
		paths: [],
		fallback: false,
	}
}

const getStaticProps: GetStaticProps<${1:$TM_FILENAME_BASE}Params> = async (context) => {
	const props: ${1:$TM_FILENAME_BASE}Props = {}

	return {
		props,
	}
}

export default ${1:$TM_FILENAME_BASE}
export { getStaticPaths, getStaticProps }
```
