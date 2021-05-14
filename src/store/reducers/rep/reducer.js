import { UPDATE_REP_USER, UPDATE_REP_MESSAGES, ADD_REP_MESSAGE } from '../../actions';

const repReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_REP_USER:
      return { ...state, user: action.user };
    case UPDATE_REP_MESSAGES:
      return { ...state, messages: action.messages };
    case ADD_REP_MESSAGE:
      return { ...state, messages: [...state.messages, action.message] };
    default:
      return state;
  }
};

export default repReducer;
