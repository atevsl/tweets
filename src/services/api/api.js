import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://6492a0b8428c3d2035d0615f.mockapi.io/api',
});

export default axiosInstance;
