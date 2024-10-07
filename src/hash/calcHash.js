import { createHash } from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHashHelper = () => {
  return new Promise((resolve, reject) => {
    const hash = createHash('sha256');
    const input = fs.createReadStream(filePath);

    input.on('error', (err) => {
      reject(`Error reading file: ${err.message}`);
    });

    hash.on('finish', () => {
      resolve(hash.digest('hex'));
    });

    input.pipe(hash);
  });
};

const calculateHash = async () => {
  try {
    const hashValue = await calculateHashHelper();
    console.log(hashValue);
  } catch (error) {
    console.error(error);
  }
};

await calculateHash();
