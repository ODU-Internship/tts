import { UPDATE_ADMIN_USER } from '../../actions';

const adminReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_ADMIN_USER:
      return { ...state, user: action.user, metadata: action.metadata };
    default:
      return state;
  }
};

export default adminReducer;
