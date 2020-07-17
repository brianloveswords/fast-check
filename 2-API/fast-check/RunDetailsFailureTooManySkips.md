[Home](/) &gt; [fast-check](../fast-check.md) &gt; [RunDetailsFailureTooManySkips](RunDetailsFailureTooManySkips.md)

## RunDetailsFailureTooManySkips type

Run reported as failed because too many retries have been attempted to generate valid values

<b>Signature:</b>

```typescript
export declare type RunDetailsFailureTooManySkips<Ts> = RunDetailsWithDoc<Ts> & {
    failed: true;
    interrupted: false;
    counterexample: null;
    counterexamplePath: null;
    error: null;
};
```
