let urls = {
  test: `http://localhost:5000`,
  development: 'https://sungym.herokuapp.com',
  production: 'https://sungym.herokuapp.com',
};

const baseURL = urls[process.env.NODE_ENV];

export default baseURL;
