[Home](/) &gt; [fast-check](../fast-check.md) &gt; [scheduledModelRun](scheduledModelRun.md)

## scheduledModelRun variable

Run asynchronous and scheduled commands over a `Model` and the `Real` system

Throw in case of inconsistency

<b>Signature:</b>

```typescript
scheduledModelRun: <Model extends object, Real, CheckAsync extends boolean, InitialModel extends Model>(scheduler: Scheduler, s: Setup<InitialModel, Real> | AsyncSetup<InitialModel, Real>, cmds: Iterable<AsyncCommand<Model, Real, CheckAsync>> | CommandsIterable<Model, Real, Promise<void>, CheckAsync>) => Promise<void>
```
