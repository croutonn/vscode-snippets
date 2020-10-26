---
prefix: frrfc
description: ForwardRefRenderFunction Component
scope: typescriptreact
---

```typescript
import { ForwardRefRenderFunction, useImperativeHandle } from 'react'

type ${1:$TM_FILENAME_BASE}Props = {}

type ${1:$TM_FILENAME_BASE}Handles = {}

const ${1:$TM_FILENAME_BASE}: ForwardRefRenderFunction<${1:$TM_FILENAME_BASE}Handles, ${1:$TM_FILENAME_BASE}Props> = (props, ref) => {
	useImperativeHandle(ref, () => ({
		${3:handles}
	}), [${4:dependencies}])
	return (
		<>
			${2}
		</>
	)
}

export default ${1:$TM_FILENAME_BASE}
```