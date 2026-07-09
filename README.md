# AI Professional Communication Skills (APCS)

> An open, model-agnostic AI Skill Specification (AISS) for reviewing, improving, and standardizing professional workplace communication.

**Write less. Communicate better.**

Software engineering evolved from individual coding styles to shared standards, reusable libraries, linters, style guides, and automated reviews.

AI-assisted work deserves the same evolution.

This project introduces **AI Skill Specifications (AISS)**: open, model-agnostic, version-controlled specifications that define expert capabilities in a portable and reusable way.

**AI Professional Communication Skills (APCS)** is the reference implementation of that vision for workplace communication.

## What This Repository Contains

- `spec/aiss/v1.0/`: the AI Skill Specification v1.0.
- `skills/professional-communication/`: the complete APCS reference skill.
- `skills/code-review/`, `skills/architecture-review/`, `skills/incident-response/`, `skills/mentoring/`, `skills/technical-writing/`: additional v1.0 reference implementations.
- `examples/`: realistic communication examples for Slack, email, Jira, GitHub PRs, standups, incidents, reviews, architecture, and 1:1 conversations.
- `docs/`: project philosophy, architecture, roadmap, compatibility, scoring, and adoption guidance.
- `scripts/check-docs.mjs`: dependency-free repository validation used by CI.

## Why AISS Exists

Most AI-assisted work still depends on ad hoc instructions. Those instructions are hard to review, hard to reuse, and hard to improve over time.

AISS treats AI capabilities like engineering assets:

- human-readable
- version-controlled
- model-agnostic
- reviewable
- composable
- testable through examples

The goal is not to publish disposable instruction snippets. The goal is to define durable skill specifications that teams can inspect, adapt, and improve.

## Core Concepts

| Concept | Meaning |
| --- | --- |
| AI Skill Specification (AISS) | The open specification introduced by this project for defining reusable AI capabilities. |
| Skill | A portable capability implemented using AISS. |
| Reference Implementation | A concrete skill that demonstrates the specification. |
| Dimensions | Measurable qualities used to review an output. |
| Patterns | Reusable structures for producing consistent work. |
| Anti-patterns | Common failure modes a skill should detect and correct. |
| Review | A standardized evaluation produced by a skill. |

## Quick Start

Use APCS when you want an AI assistant to review or improve a workplace message.

1. Choose the relevant surface from `examples/`.
2. Give the assistant the APCS skill in `skills/professional-communication/SKILL.md`.
3. Ask for either a `Communication Review` or an improved message.
4. Check the output against `skills/professional-communication/output-format.md`.

Example request:

```text
Use APCS to review this Jira comment for clarity, respectfulness, actionability, and technical accuracy.

[message here]
```

## Communication Review Format

Every APCS review uses a consistent structure:

```text
Communication Review
Status: PASS | NEEDS_REVISION | BLOCKED

Dimensions:
- Professionalism:
- Clarity:
- Respectfulness:
- Collaboration:
- Conciseness:
- Confidence:
- Actionability:
- Technical Accuracy:

Context:
Risks:
Suggestions:
Improved Version:
```

## Repository Status

This repository is at **AISS v1.0 / APCS v1.0**. The first complete version includes the specification, the professional communication reference implementation, additional reference skills, examples, and CI validation.

See [CHANGELOG.md](CHANGELOG.md) for release notes and [docs/roadmap.md](docs/roadmap.md) for future work.

## License

MIT. See [LICENSE](LICENSE).
