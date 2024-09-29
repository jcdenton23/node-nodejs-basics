const parseArgs = () => {
  process.argv.forEach((arg, index, args) => {
    if (arg.startsWith('--')) {
      const value = args[index + 1];
      if (value && !value.startsWith('--')) {
        console.log(`${arg.slice(2)} is ${value}`);
      }
    }
  });
};

parseArgs();
