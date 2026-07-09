# AI Skill Specification v1.0

AI Skill Specification (AISS) is an open, model-agnostic approach introduced by this project for defining reusable AI capabilities in a portable, version-controlled, and human-readable way.

## Goals

- Define AI skills as durable engineering artifacts.
- Make skills readable and reviewable by humans.
- Keep skills portable across assistants and products.
- Encourage stable output formats.
- Support examples as behavioral tests.

## Skill Definition

An AI skill is a bounded capability that tells an assistant how to perform a class of work. A skill should define:

- purpose
- audience
- principles
- workflow
- inputs
- outputs
- scoring or review dimensions
- examples
- anti-patterns
- version

## Required Files

Every v1.0 skill should include:

- `SKILL.md`
- `principles.md`
- `workflow.md`
- `output-format.md`
- `examples.md`

Additional files are encouraged when they clarify behavior.

## Steering

Steering is the durable guidance that shapes assistant behavior. Good steering is specific, testable, and tied to outcomes.

## Outputs

Outputs should be structured enough to compare across runs. Free-form prose is allowed, but the expected fields should be explicit.

## Examples

Examples are the primary way to make behavior concrete. Each example should include context, input, expected review, and expected improvement when relevant.
