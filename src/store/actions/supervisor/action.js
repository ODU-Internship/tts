export const UPDATE_SUPERVISOR_USER = 'UPDATE_SUPERVISOR_USER';

export const UPDATE_SUPERVISOR_MESSAGES = 'UPDATE_SUPERVISOR_MESSAGES';

export const UPDATE_SUPERVISOR_MESSAGE = 'UPDATE_SUPERVISOR_MESSAGE';

export const updateSupervisorUser = (user) => ({
  type: UPDATE_SUPERVISOR_USER,
  user,
});

export const updateSupervisorMessages = (messages) => ({
  type: UPDATE_SUPERVISOR_MESSAGES,
  messages,
});

export const updateSupervisorMessage = (message) => ({
  type: UPDATE_SUPERVISOR_MESSAGE,
  message,
});
