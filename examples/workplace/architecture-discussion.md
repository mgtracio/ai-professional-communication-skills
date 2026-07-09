# Architecture Discussion Examples

```text
Decision: use the existing event pipeline instead of a new webhook worker.

Why: it preserves retry behavior, observability, and ownership boundaries.

Risk: the current pipeline has a five-minute retry interval, which may be too slow for this workflow.

Next step: confirm the latency requirement before finalizing.
```
