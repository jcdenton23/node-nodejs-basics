import { stdin, stdout } from 'process';
import { Transform } from 'stream';

const reverseTransform = new Transform({
  transform(chunk, _, callback) {
    const reversed = chunk.toString().split('').reverse().join('');
    callback(null, reversed);
  },
});

const transform = async () => {
  stdin.pipe(reverseTransform).pipe(stdout);
};

await transform();
