import fs from 'fs';
import path from 'path';
import { stdout } from 'process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  const stream = fs.createReadStream(filePath);

  stream.on('end', () => {
    console.log('\nRead stream finished');
    process.exit(0);
  });

  stream.pipe(stdout);
};

await read();
