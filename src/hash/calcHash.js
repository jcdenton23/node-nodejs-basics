import { createHash } from 'crypto';
import fs from 'fs';
import path from 'path';
import { stdout } from 'process';
import { fileURLToPath } from 'url';

const hash = createHash('sha256');
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  const input = fs.createReadStream(filePath);
  input.pipe(hash).setEncoding('hex').pipe(stdout);
};

await calculateHash();
