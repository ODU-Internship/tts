import axios from 'axios';

/**
 * This is the rest end point and
 * REST stands for state transfer.
 *
 * here redux states will be transferred to backend.
 * and nothing more.
 */
const baseAxios = axios.create({
  baseURL: 'https://tts-server-alpha.herokuapp.com/',
});

export default baseAxios;
