---
prefix: frrfc
description: ForwardRefRenderFunction Component
scope: typescriptreact
---

```typescript
import * as React from 'react'

type ${1:$TM_FILENAME_BASE}Props = {}

const ${1:$TM_FILENAME_BASE} = React.forwardRef<
	React.ElementRef<typeof ${2:$TM_TARGET_COMPONENT}>,
	React.ComponentPropsWithoutRef<typeof ${2:$TM_TARGET_COMPONENT}>
>((props, forwardedRef) => (
	<${2:$TM_TARGET_COMPONENT} {...props} ref={forwardedRef} />
))

export default ${1:$TM_FILENAME_BASE}
```
