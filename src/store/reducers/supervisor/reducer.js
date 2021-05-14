import { UPDATE_SUPERVISOR_USER, UPDATE_SUPERVISOR_MESSAGES } from '../../actions';

const supervisorReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_SUPERVISOR_USER:
      return { ...state, user: action.user };
    case UPDATE_SUPERVISOR_MESSAGES:
      return { ...state, messages: action.messages };
    default:
      return state;
  }
};

export default supervisorReducer;
