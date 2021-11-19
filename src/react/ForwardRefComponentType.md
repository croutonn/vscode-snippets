---
prefix: frec
description: ForwardRefComponent
scope: typescript,typescriptreact
---

```typescript
export type ForwardRefComponent<
  T extends
    | Component
    | ForwardRefExoticComponent<any>
    | ClassAttributes<any>
    | keyof JSX.IntrinsicElements
> = T extends Component<infer P>
  ? ForwardRefExoticComponent<P & RefAttributes<T>>
  : T extends ClassAttributes<any>
  ? ForwardRefExoticComponent<PropsWithRef<T>>
  : T extends keyof JSX.IntrinsicElements
  ? ForwardRefExoticComponent<PropsWithRef<JSX.IntrinsicElements[T]>>
  : T;
```
