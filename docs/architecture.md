# Architecture

The repository is organized around one specification and several reference implementations.

```text
spec/
  aiss/
    v1.0/
      specification.md
      schema.md
      versioning.md
      composition.md

skills/
  professional-communication/
  code-review/
  architecture-review/
  incident-response/
  mentoring/
  technical-writing/

examples/
  workplace/

docs/
  project guidance and adoption material
```

## Specification Layer

The AISS layer defines what a skill is, how it is organized, how outputs are specified, and how skills compose.

## Skill Layer

Each skill implements the specification through human-readable Markdown files. A skill can be copied into another project, adapted by a team, or loaded into an AI assistant as steering context.

## Example Layer

Examples are behavioral tests. They show how the skill should respond in realistic scenarios and help reviewers detect drift.

## Validation Layer

`scripts/check-docs.mjs` validates that required files exist and that Markdown files keep the project vocabulary consistent.
