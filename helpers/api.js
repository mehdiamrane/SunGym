import Axios from 'axios';
import baseURL from 'helpers/baseURL';

const api = Axios.create({
  baseURL: baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default api;
