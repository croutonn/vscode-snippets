---
prefix: nprev
description: Next.js Preview API
scope: typescript
---

```typescript
import { NextApiHandler } from "next";

type ResponseBodyType = unknown;

const previewHandler: NextApiHandler<ResponseBodyType> = (
  request,
  response
) => {
  const previewData = {};
  response.setPreviewData(previewData);
  response.status(200).end();
};

export default previewHandler;
```
