const parseEnv = () => {
  console.log(
    Object.keys(process.env)
      .filter((env) => env.startsWith('RSS_'))
      .map((key) => `${key}=${process.env[key]}`)
      .join('; ')
  );
};

parseEnv();
