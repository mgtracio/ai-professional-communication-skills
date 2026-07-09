import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();

const requiredFiles = [
  'README.md',
  'LICENSE',
  'CONTRIBUTING.md',
  'CHANGELOG.md',
  'CODE_OF_CONDUCT.md',
  'SECURITY.md',
  'spec/aiss/v1.0/specification.md',
  'spec/aiss/v1.0/schema.md',
  'spec/aiss/v1.0/versioning.md',
  'spec/aiss/v1.0/composition.md',
  'skills/professional-communication/SKILL.md',
  'skills/professional-communication/output-format.md',
  'skills/code-review/SKILL.md',
  'skills/architecture-review/SKILL.md',
  'skills/incident-response/SKILL.md',
  'skills/mentoring/SKILL.md',
  'skills/technical-writing/SKILL.md'
];

async function exists(file) {
  try {
    await stat(path.join(root, file));
    return true;
  } catch {
    return false;
  }
}

async function listMarkdownFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name === '.git' || entry.name === 'node_modules') {
      continue;
    }

    const absolute = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...await listMarkdownFiles(absolute));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(absolute);
    }
  }

  return files;
}

const missing = [];

for (const file of requiredFiles) {
  if (!await exists(file)) {
    missing.push(file);
  }
}

if (missing.length > 0) {
  console.error(`Missing required files:\n${missing.map((file) => `- ${file}`).join('\n')}`);
  process.exit(1);
}

const markdownFiles = await listMarkdownFiles(root);
const forbidden = /\bprompt collection\b/i;
const failures = [];

for (const file of markdownFiles) {
  const content = await readFile(file, 'utf8');
  const relative = path.relative(root, file);

  if (!content.startsWith('# ') && relative !== 'LICENSE') {
    failures.push(`${relative}: Markdown files must start with a level-one heading.`);
  }

  if (forbidden.test(content)) {
    failures.push(`${relative}: avoid framing the project as a prompt collection.`);
  }
}

if (failures.length > 0) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Validated ${markdownFiles.length} Markdown files.`);
