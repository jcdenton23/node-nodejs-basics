import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
  try {
    const fileExists = await fs
      .access(filePath)
      .then(() => true)
      .catch(() => false);

    if (!fileExists) {
      throw new Error('FS operation failed');
    }

    await fs.unlink(filePath);
    console.log('The file was removed successfully');
  } catch (err) {
    console.error(err.message);
  }
};

await remove();
