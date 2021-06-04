import { sAxios } from '../axios';

export const getSupervisorDetails = () => sAxios.get('/me');

export const getSupervisorMessages = () => sAxios.get('/messages');

export const getSupervisorMessage = (messageID) => sAxios.get(`/messages/${messageID}`);

export const putSupervisorMessage = (messageID, data) => sAxios.put(`/messages/${messageID}`, data);
