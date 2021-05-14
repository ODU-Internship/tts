import { rAxios } from '../axios';

// eslint-disable-next-line import/prefer-default-export
export const getRepDetails = () => rAxios.get('/me');
