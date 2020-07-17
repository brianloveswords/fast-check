[Home](/) &gt; [fast-check](../fast-check.md) &gt; [defaultReportMessage](defaultReportMessage_2.md)

## defaultReportMessage() function

Format output of `fc.check` using the default error reporting of `fc.assert`

Produce a string containing the formated error in case of failed run, undefined otherwise.

<b>Signature:</b>

```typescript
declare function defaultReportMessage<Ts>(out: RunDetails<Ts> & {
    failed: true;
}): string;
```

#### Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  out | <code>RunDetails&lt;Ts&gt; &amp; {`<p/>`    failed: true;`<p/>`}</code> |  |

<b>Returns:</b>

`string`

