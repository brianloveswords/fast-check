[Home](/) &gt; [fast-check](../fast-check.md) &gt; [check](check_3.md)

## check() function

<b>Signature:</b>

```typescript
declare function check<Ts>(property: IRawProperty<Ts>, params?: Parameters<Ts>): Promise<RunDetails<Ts>> | RunDetails<Ts>;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  property | <code>IRawProperty&lt;Ts&gt;</code> |  |
|  params | <code>Parameters&lt;Ts&gt;</code> |  |

<b>Returns:</b>

`Promise<RunDetails<Ts>> | RunDetails<Ts>`

