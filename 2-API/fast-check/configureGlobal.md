[Home](/) &gt; [fast-check](../fast-check.md) &gt; [configureGlobal](configureGlobal.md)

## configureGlobal variable

Define global parameters that will be used by all the runners

```typescript
fc.configureGlobal({ numRuns: 10 });
//...
fc.assert(
  fc.property(
    fc.nat(), fc.nat(),
    (a, b) => a + b === b + a
  ), { seed: 42 }
) // equivalent to { numRuns: 10, seed: 42 }

```

<b>Signature:</b>

```typescript
configureGlobal: (parameters: GlobalParameters) => void
```
