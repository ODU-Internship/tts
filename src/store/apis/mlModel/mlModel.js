import axios from 'axios';
import baseAxios from '../axios';

export const postRetrains = (message, label) => baseAxios.post('/retrains', { message, label });

export const testModel = async (message) => {
  const { data } = await axios.post('https://tts-model-alpha.herokuapp.com/predict', {
    emails: [message],
  });
  const senti = await axios.post('https://vader-model-alpha.herokuapp.com/predict', {
    message,
  });
  return { label: [data.sentiment[0]], prediction: data.probability[0], vader: senti.data };
};

export const trainModel = (messages) => baseAxios.post('/trains', messages);

export const getRetrainData = () => baseAxios.get('/retrains');
