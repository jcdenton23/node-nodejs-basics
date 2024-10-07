const parseArgs = () => {
  const result = [];

  process.argv.forEach((arg, index, args) => {
    if (arg.startsWith('--')) {
      const value = args[index + 1];
      if (value && !value.startsWith('--')) {
        result.push(`${arg.slice(2)} is ${value}`);
      }
    }
  });

  console.log(result.join(', '));
};

parseArgs();
