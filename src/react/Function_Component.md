---
prefix: fc
description: React Function Component
scope: typescriptreact
---

```typescript
import * as React from 'react'

type ${1:$TM_FILENAME_BASE}Props = {
}

const ${1:$TM_FILENAME_BASE} = ({
	children,
	${2}
}: React.PropsWithChildren<${1:$TM_FILENAME_BASE}Props>) => {
	return (
		<>
			{children}
		</>
	)
}

export default ${1:$TM_FILENAME_BASE}
```
