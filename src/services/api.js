import axios from 'axios';

const api = axios.create({
  baseURL: 'https://financialmodelingprep.com/api/',
});

export default api;
