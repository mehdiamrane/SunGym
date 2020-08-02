let urls = {
  test: `http://localhost:3000`,
  development: 'http://localhost:3000',
  production: 'https://sungym69.com',
};

const baseURL = urls[process.env.NODE_ENV];

export default baseURL;
