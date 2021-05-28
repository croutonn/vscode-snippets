---
prefix: nprev
description: Next.js Preview API
scope: typescript
---

```typescript
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseBodyType = unknown

function previewHandler(
  request: NextApiRequest,
  response: NextApiResponse<ResponseBodyType>
): void | Promise<void> {
  const previewData = {}
  response.setPreviewData(previewData)
  response.status(200).end()
}

export default previewHandler
```
