const config = {
    PORT: parseInt(process.env.PORT as string, 10) ? parseInt(process.env.PORT as string, 10) : 8080,
  };
  
  export default config;