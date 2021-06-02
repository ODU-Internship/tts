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

export const sAxios = axios.create({
  baseURL: 'https://tts-server-alpha.herokuapp.com/supervisors',
});

export const aAxios = axios.create({
  baseURL: 'https://tts-server-alpha.herokuapp.com/admins',
});

export const rAxios = axios.create({
  baseURL: 'https://tts-server-alpha.herokuapp.com/reps',
});

export const setSupervisorHeader = (accessToken) => {
  sAxios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

export const setRepHeader = (accessToken) => {
  rAxios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

export const setAdminHeader = (accessToken) => {
  aAxios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};
export default baseAxios;
