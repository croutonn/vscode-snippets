---
prefix: [npage, nextpage, npssr]
description: Next.js Page with layout for SSR
scope: typescriptreact
---

```typescript
import * as React from 'react'
import { GetServerSideProps, NextPageWithLayout } from 'next'

type ${1:$TM_FILENAME_BASE}Params = {
	slug: string
}

type ${1:$TM_FILENAME_BASE}Props = {}

const ${1:$TM_FILENAME_BASE}: NextPageWithLayout<${1:$TM_FILENAME_BASE}Props> = (context) => {
	return (
		<>
			${3}
		</>
	)
}

${1:$TM_FILENAME_BASE}.getLayout = (page) => {
	return <${2:BasicLayout}></${2:BasicLayout}>
}

const getServerSideProps: GetServerSideProps<${1:$TM_FILENAME_BASE}Props, ${1:$TM_FILENAME_BASE}Params> = async (context) => {
	const props: ${1:$TM_FILENAME_BASE}Props = {}

	return {
		props,
	}
}

export default ${1:$TM_FILENAME_BASE}
export { getServerSideProps }
```
