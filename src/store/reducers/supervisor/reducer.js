import {
  UPDATE_SUPERVISOR_USER,
  UPDATE_SUPERVISOR_MESSAGES,
  UPDATE_SUPERVISOR_MESSAGE,
} from '../../actions';

const supervisorReducer = (state = { messages: {} }, action) => {
  switch (action.type) {
    case UPDATE_SUPERVISOR_USER:
      return { ...state, user: action.user };
    case UPDATE_SUPERVISOR_MESSAGES:
      return {
        ...state,
        messages: {
          ...action.messages.reduce((acc, { _id, ...message }) => ({ [_id]: message, ...acc }), {}),
        },
      };
    case UPDATE_SUPERVISOR_MESSAGE: {
      const { _id, ...message } = action.message;
      return {
        ...state,
        messages: {
          ...state.messages,
          [_id]: {
            ...message,
          },
        },
      };
    }
    default:
      return state;
  }
};

export default supervisorReducer;
