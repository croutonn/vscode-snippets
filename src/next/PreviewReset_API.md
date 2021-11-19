---
prefix: nprev
description: Next.js Preview Reset API
scope: typescript
---

```typescript
import { NextApiHandler } from "next";

export type ResponseBodyType = unknown;

const previewResetHandler: NextApiHandler<ResponseBodyType> = (
  request,
  response
) => {
  response.clearPreviewData();
  response.status(200).end();
};

export default previewResetHandler;
```
