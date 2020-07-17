[Home](/) &gt; [fast-check](../fast-check.md) &gt; [RunDetailsFailureInterrupted](RunDetailsFailureInterrupted.md)

## RunDetailsFailureInterrupted type

Run reported as failed because it took too long and thus has been interrupted

<b>Signature:</b>

```typescript
export declare type RunDetailsFailureInterrupted<Ts> = RunDetailsWithDoc<Ts> & {
    failed: true;
    interrupted: true;
    counterexample: null;
    counterexamplePath: null;
    error: null;
};
```
