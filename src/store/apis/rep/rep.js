import { rAxios } from '../axios';

export const getRepDetails = () => rAxios.get('/me');

export const getRepMessages = () => rAxios.get('/messages');

export const postRepMessage = (custName, custDetails, category, message, company, type) => rAxios.post('/messages', {
  custName,
  custDetails,
  category,
  message,
  company,
  type,
});
