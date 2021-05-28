---
prefix: fc
description: React Function Component
scope: typescriptreact
---

```typescript
import React from 'react'

type ${1:$TM_FILENAME_BASE}Props = {
}

function ${1:$TM_FILENAME_BASE}({ ${2} }: React.PropsWithChildren<${1:$TM_FILENAME_BASE}Props>): React.ReactElement | null {
	return (
		<>
			${3}
		</>
	)
}

export default ${1:$TM_FILENAME_BASE}
```
