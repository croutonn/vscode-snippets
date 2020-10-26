---
prefix: [npage, nextpage, npssr]
description: Next.js Page for SSR
scope: typescriptreact
---

```typescript
import { GetServerSideProps, NextPage } from 'next'

type ${1:$TM_FILENAME_BASE}Params = {
	slug: string
}

type ${1:$TM_FILENAME_BASE}Props = {}

const ${1:$TM_FILENAME_BASE}: NextPage<${1:$TM_FILENAME_BASE}Props> = (props) => {
	return (
		<>
			${2}
		</>
	)
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