# GitHub PR Examples

## Review Comment

Input:

```text
Why did you do this here?
```

Improved:

```text
Question: is there a reason this validation lives in the controller instead of the existing request schema? Keeping it in the schema would make the behavior consistent with the other endpoints and easier to test.
```
