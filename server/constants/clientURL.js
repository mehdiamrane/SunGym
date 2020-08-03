let urls = {
  test: `http://localhost:3000/`,
  development: 'http://localhost:3000/',
  production: 'https://sungym.netlify.app/',
};

const clientURL = urls[process.env.NODE_ENV];

module.exports = clientURL;
