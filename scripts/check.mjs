import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

function run(command) {
  execSync(command, {
    cwd: projectRoot,
    stdio: 'inherit',
  });
}

function assertExists(relativePath) {
  const fullPath = path.join(projectRoot, relativePath);
  if (!existsSync(fullPath)) {
    throw new Error(`Missing required file: ${relativePath}`);
  }
}

run('npm run build');

const requiredPaths = [
  'src/main.tsx',
  'src/App.tsx',
  'src/pages/Index.tsx',
  'dist/index.html',
];

requiredPaths.forEach(assertExists);

const packageJson = JSON.parse(readFileSync(path.join(projectRoot, 'package.json'), 'utf8'));
if (!packageJson.name || packageJson.name === 'vite_react_shadcn_ts') {
  throw new Error('Package name was not updated to the project name.');
}

console.log('Automated check passed: build succeeded and required app files exist.');
