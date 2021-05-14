import axios from '../axios';

export const postAdminLogin = (aid, password) => axios.post('/auth/admin/login', { aid, password });
export const postSupervisorLogin = (sid, password) => axios.post('/auth/supervisor/login', { sid, password });
export const postRepLogin = (cid, password) => axios.post('/auth/rep/login', { cid, password });
