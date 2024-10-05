import path from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';
import { cpus } from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'worker.js');

const createWorker = (workerData) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(path.join(filePath), { workerData });

    worker.on('message', (result) => resolve({ status: 'resolved', data: result }));

    worker.on('error', () => resolve({ status: 'error', data: null }));

    worker.on('exit', (code) => {
      if (code !== 0) reject(new Error(`Worker exited with code ${code}.`));
    });
  });
};

const performCalculations = async () => {
  const numCores = cpus().length;
  const tasks = Array.from({ length: numCores }, (_, index) => createWorker(10 + index));

  try {
    const result = await Promise.all(tasks);
    console.log(result);
  } catch (error) {
    console.error('Error:', error.message);
  }
};

await performCalculations();
