# AISS v1.0 Schema

This schema is expressed as a documentation contract rather than a machine-only format.

## Required Metadata

| Field | Description |
| --- | --- |
| Name | Human-readable skill name. |
| Version | Semantic version of the skill. |
| Purpose | The capability the skill provides. |
| Scope | What the skill should and should not do. |
| Inputs | Inputs the skill expects. |
| Outputs | Stable output formats the skill can produce. |
| Dimensions | Qualities used to review output. |

## Required Sections

```text
# Skill Name

Version:
Purpose:
Scope:
Use When:
Do Not Use When:
Inputs:
Outputs:
Workflow:
Review Dimensions:
Anti-patterns:
Examples:
```

## Version

Skills should use semantic versioning once public:

- patch for clarifications
- minor for backward-compatible behavior additions
- major for output or interpretation changes
