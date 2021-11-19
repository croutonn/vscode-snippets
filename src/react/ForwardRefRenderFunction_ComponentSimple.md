---
prefix: frec
description: ForwardRefRenderFunction Component
scope: typescriptreact
---

```typescript
import * as React from 'react'
import { ForwardRefComponent } from '@/lib/types/misc'

const NAME = "${1:$TM_FILENAME_BASE}"

const ${1:$TM_FILENAME_BASE} = ForwardRefComponent<typeof ${2:TARGET_COMPONENT}>((props, forwardedRef) => (
	<${2:TARGET_COMPONENT} {...props} ref={forwardedRef} />
))

${1:$TM_FILENAME_BASE}.displayName = NAME

export default ${1:$TM_FILENAME_BASE}
```
