import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  try {
    const fileExists = await fs
      .access(filePath)
      .then(() => true)
      .catch(() => false);

    if (!fileExists) {
      throw new Error('FS operation failed');
    }
    const content = await fs.readFile(filePath, 'utf-8');
    console.log(content);
  } catch (err) {
    console.error(err.message);
  }
};

await read();
