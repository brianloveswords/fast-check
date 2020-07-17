[Home](/) &gt; [fast-check](../fast-check.md) &gt; [RunDetailsSuccess](RunDetailsSuccess.md)

## RunDetailsSuccess type

Run reported as success

<b>Signature:</b>

```typescript
export declare type RunDetailsSuccess<Ts> = RunDetailsWithDoc<Ts> & {
    failed: false;
    interrupted: boolean;
    counterexample: null;
    counterexamplePath: null;
    error: null;
};
```
