---
prefix: [npagel, nextpagewithlayout, npwl]
description: Next.js Page With Layout Declaration
scope: typescriptreact
---

```typescript
import * as React from "react";
import { NextPageWithLayout } from "next";
import { AppProps } from "next/app";

declare module "next" {
  export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: React.ReactElement) => React.ReactNode;
  };
}

declare module "next/app" {
  export type AppPropsWithLayout<P = {}, IP = P> = AppProps<P> & {
    Component: NextPageWithLayout<P, IP>;
  };
}
```
