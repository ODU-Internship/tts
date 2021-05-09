import { UPDATE_SUPERVISOR_USER } from '../../actions';

const supervisorReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_SUPERVISOR_USER:
      return { ...state, user: action.user };
    default:
      return state;
  }
};

export default supervisorReducer;
