import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import zlib from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const sourceFilePath = path.join(__dirname, 'files', 'archive.gz');
const destFilePath = path.join(__dirname, 'files', 'fileToCompress.txt');

const decompress = async () => {
  fs.createReadStream(sourceFilePath).pipe(zlib.createGunzip()).pipe(fs.createWriteStream(destFilePath));
};

await decompress();
