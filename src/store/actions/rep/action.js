export const UPDATE_REP_USER = 'UPDATE_REP_USER';

export const UPDATE_REP_MESSAGES = 'UPDATE_REP_MESSAGES';

export const ADD_REP_MESSAGE = 'ADD_REP_MESSAGE';

export const updateRepUser = (user) => ({
  type: UPDATE_REP_USER,
  user,
});

export const updateRepMessages = (messages) => ({
  type: UPDATE_REP_MESSAGES,
  messages,
});

export const addRepMessage = (message) => ({
  type: ADD_REP_MESSAGE,
  message,
});
