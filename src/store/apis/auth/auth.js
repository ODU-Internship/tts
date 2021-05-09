import axios from '../axios';

// eslint-disable-next-line import/prefer-default-export
export const postAdminLogin = (aid, password) => axios.post('/auth/admin/login', { aid, password });
