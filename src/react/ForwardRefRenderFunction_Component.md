---
prefix: frrfc
description: ForwardRefRenderFunction Component
scope: typescriptreact
---

```typescript
import React, { ForwardRefRenderFunction, useImperativeHandle } from 'react'

type ${1:$TM_FILENAME_BASE}Props = {}

type ${1:$TM_FILENAME_BASE}Handles = {}

function ${1:$TM_FILENAME_BASE}({ ${2} }: React.PropsWithChildren<${1:$TM_FILENAME_BASE}Props>, ref: ((instance: T | null) => void) | React.MutableRefObject<T | null> | null): React.ReactElement | null {
	useImperativeHandle(ref, () => ({
		${4:handles}
	}), [${5:dependencies}])
	return (
		<>
			${3}
		</>
	)
}

export default ${1:$TM_FILENAME_BASE}
```
