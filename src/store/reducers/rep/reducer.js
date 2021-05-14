import { UPDATE_REP_USER } from '../../actions';

const repReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_REP_USER:
      return { ...state, user: action.user };
    default:
      return state;
  }
};

export default repReducer;
