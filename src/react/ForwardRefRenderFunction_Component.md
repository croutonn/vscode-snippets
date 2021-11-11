---
prefix: frrfc
description: ForwardRefRenderFunction Component
scope: typescriptreact
---

```typescript
import * as React from 'react'

const ${1:$TM_FILENAME_BASE} = React.forwardRef<
	React.ElementRef<typeof ${2:TARGET_COMPONENT}>,
	React.ComponentPropsWithoutRef<typeof ${2:TARGET_COMPONENT}>
>((props, forwardedRef) => (
	<${2:TARGET_COMPONENT} {...props} ref={forwardedRef} />
))

${1:$TM_FILENAME_BASE}.displayName = "${1:$TM_FILENAME_BASE}"

export default ${1:$TM_FILENAME_BASE}
```
