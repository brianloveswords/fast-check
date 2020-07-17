[Home](/) &gt; [fast-check](../fast-check.md) &gt; [ObjectConstraints](ObjectConstraints.md)

## ObjectConstraints type

Constraints for `fc.anything` and `fc.object`

<b>Signature:</b>

```typescript
export declare type ObjectConstraints = {
    maxDepth?: number;
    maxKeys?: number;
    key?: Arbitrary<string>;
    values?: Arbitrary<unknown>[];
    withBoxedValues?: boolean;
    withSet?: boolean;
    withMap?: boolean;
    withObjectString?: boolean;
    withNullPrototype?: boolean;
    withBigInt?: boolean;
};
```
