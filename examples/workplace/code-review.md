# Code Review Examples

```text
Observation: this query loads all records before filtering by account.

Risk: it can become expensive for larger tenants and may expose data if a later filter is changed.

Suggestion: apply the account filter in the database query and add a regression test for cross-account isolation.
```
