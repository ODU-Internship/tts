import { sAxios } from '../axios';

// eslint-disable-next-line import/prefer-default-export
export const getSupervisorDetails = () => sAxios.get('/me');
