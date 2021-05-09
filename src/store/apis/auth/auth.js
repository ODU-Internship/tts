import axios from '../axios';

// eslint-disable-next-line import/prefer-default-export
export const postAdminLogin = (aid, password) => axios.post('/auth/admin/login', { aid, password });
export const postSupervisorLogin = (sid, password) => axios.post('/auth/supervisor/login', { sid, password });
