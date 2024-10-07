import fs from 'fs';
import path from 'path';
import { stdin } from 'process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
  const stream = fs.createWriteStream(filePath);
  stdin.pipe(stream);
};

await write();
