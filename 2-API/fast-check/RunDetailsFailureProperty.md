[Home](/) &gt; [fast-check](../fast-check.md) &gt; [RunDetailsFailureProperty](RunDetailsFailureProperty.md)

## RunDetailsFailureProperty type

Run reported as failed because the property failed

<b>Signature:</b>

```typescript
export declare type RunDetailsFailureProperty<Ts> = RunDetailsWithDoc<Ts> & {
    failed: true;
    interrupted: boolean;
    counterexample: Ts;
    counterexamplePath: string;
    error: string;
};
```
