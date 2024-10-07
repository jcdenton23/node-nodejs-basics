import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sourceFile = path.join(__dirname, 'files', 'wrongFilename.txt');
const destFile = path.join(__dirname, 'files', 'properFilename.md');

const fileExists = async (filePath) => {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
};

const rename = async () => {
  try {
    const sourceFileExists = await fileExists(sourceFile);
    const destFileExists = await fileExists(destFile);

    if (!sourceFileExists || destFileExists) {
      throw new Error('FS operation failed');
    }

    await fs.rename(sourceFile, destFile);
    console.log('The file was renamed successfully');
  } catch (err) {
    console.error(err.message);
  }
};

await rename();
