---
prefix: fc
description: React Function Component
scope: typescriptreact
---

```typescript
import * as React from 'react'

export interface ${1:$TM_FILENAME_BASE}Props = React.PropsWithChildren<{
}>

const ${1:$TM_FILENAME_BASE} = ({
	children
}: ${1:$TM_FILENAME_BASE}Props) => {
	return (
		<>
			{children}
		</>
	)
}

export default ${1:$TM_FILENAME_BASE}
```
