[Home](/) &gt; [fast-check](../fast-check.md) &gt; [SchedulerReportItem](SchedulerReportItem.md)

## SchedulerReportItem type

Describe a task for the report produced by the scheduler

<b>Signature:</b>

```typescript
export declare type SchedulerReportItem<TMetaData = unknown> = {
    status: 'resolved' | 'rejected' | 'pending';
    schedulingType: 'promise' | 'function' | 'sequence';
    taskId: number;
    label: string;
    metadata?: TMetaData;
    outputValue?: string;
};
```
