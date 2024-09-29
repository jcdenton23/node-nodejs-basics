import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sourceDir = path.join(__dirname, 'files');

const dirExists = async (dirPath) => {
  try {
    await fs.access(dirPath);
    return true;
  } catch {
    return false;
  }
};

const list = async () => {
  try {
    const sourceDirExists = await dirExists(sourceDir);

    if (!sourceDirExists) {
      throw new Error('FS operation failed');
    }

    const fileNames = await fs.readdir(sourceDir);
    fileNames.forEach((fileName) => console.log(fileName));
  } catch (err) {
    console.error(err.message);
  }
};

await list();
