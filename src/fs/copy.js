import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, 'files');
const destinationDir = path.join(__dirname, 'files_copy');

const dirExists = async (dirPath) => {
  try {
    await fs.access(dirPath);
    return true;
  } catch {
    return false;
  }
};

const copy = async () => {
  try {
    const sourceDirExists = await dirExists(sourceDir);
    const destinationDirExists = await dirExists(destinationDir);

    if (!sourceDirExists || destinationDirExists) {
      throw new Error('FS operation failed');
    }

    await fs.cp(sourceDir, destinationDir, { recursive: true });
    console.log('Directory copied successfully!');
  } catch (err) {
    console.error(err.message);
  }
};

await copy();
