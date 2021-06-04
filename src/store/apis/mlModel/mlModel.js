import baseAxios from '../axios';

// eslint-disable-next-line import/prefer-default-export
export const postRetrains = (message, label) => baseAxios.post('/retrains', { message, label });
