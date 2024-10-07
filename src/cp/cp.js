import { fileURLToPath } from 'url';
import path from 'path';
import { fork } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
  const child = fork(filePath, args, { silent: true });

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
  child.stderr.pipe(process.stderr);

  child.on('exit', (code) => {
    console.log(`Child process exited with code: ${code}`);
    process.exit(code);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['1', '2', '3']);
