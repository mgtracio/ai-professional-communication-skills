# APCS Examples

## Slack

Input:

```text
This is still broken. Can someone fix it?
```

Review:

```text
Status: NEEDS_REVISION
Risks: The message lacks context, owner, and urgency.
Suggestion: Include observed behavior, impact, and the action requested.
```

Improved:

```text
The checkout callback is still failing in UAT. Impact: QA cannot complete the payment regression. Can the payments owner check the callback logs and confirm the next step today?
```

## Pull Request

Input:

```text
This approach is bad. Change it.
```

Improved:

```text
I think this path adds risk because it duplicates authorization logic outside the existing middleware. Could we reuse the current middleware and add a focused test for this endpoint?
```
