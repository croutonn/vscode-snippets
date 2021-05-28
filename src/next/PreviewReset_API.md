---
prefix: nprev
description: Next.js Preview Reset API
scope: typescript
---

```typescript
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseBodyType = unknown

function previewResetHandler(
  request: NextApiRequest,
  response: NextApiResponse<ResponseBodyType>
): void | Promise<void> {
  response.clearPreviewData()
  response.status(200).end()
}

export default previewResetHandler
```
