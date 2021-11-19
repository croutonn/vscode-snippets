---
prefix: frec
description: ForwardRefRenderFunction Component
scope: typescriptreact
---

```typescript
import * as React from 'react'

const NAME =  "${1:$TM_FILENAME_BASE}"

type BaseElement = React.ElementRef<"div">;
type BaseElementProps = JSX.IntrinsicElements["div"];
export interface ${1:$TM_FILENAME_BASE}Props
  extends React.PropsWithChildren<BaseElementProps> {

}

const ${1:$TM_FILENAME_BASE} = React.forwardRef<BaseElement, ${1:$TM_FILENAME_BASE}Props>((props, forwardedRef) => (
	<${2:TARGET_COMPONENT} {...props} ref={forwardedRef} />
))

${1:$TM_FILENAME_BASE}.displayName = NAME

export default ${1:$TM_FILENAME_BASE}
```
