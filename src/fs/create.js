import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'files', 'fresh.txt');
const content = 'I am fresh and young';

const create = async () => {
  try {
    const fileExists = await fs
      .access(filePath)
      .then(() => true)
      .catch(() => false);

    if (fileExists) {
      throw new Error('FS operation failed');
    }
    await fs.writeFile(filePath, content, 'utf8');
    console.log('File has been created');
  } catch (err) {
    console.error(err.message);
  }
};

await create();
