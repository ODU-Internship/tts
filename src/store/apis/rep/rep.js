import { rAxios } from '../axios';

export const getRepDetails = () => rAxios.get('/me');

export const getRepMessages = () => rAxios.get('/messages');

export const postRepMessage = (category, message, company, type) => rAxios.post('/messages', {
  category, message, company, type,
});
