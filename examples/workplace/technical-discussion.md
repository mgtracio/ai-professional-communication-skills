# Technical Discussion Examples

```text
I prefer option B because it keeps authorization in one place and avoids duplicating policy checks in the handler.

Tradeoff: it adds one dependency to the service layer.

Open question: do we need this behavior for internal callers too, or only public API traffic?
```
