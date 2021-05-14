import { sAxios } from '../axios';

export const getSupervisorDetails = () => sAxios.get('/me');

export const getSupervisorMessages = () => sAxios.get('/messages');
