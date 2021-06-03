import {
  UPDATE_ADMIN_USER,
  UPDATE_ADMIN_REPS,
  ADD_ADMIN_REP,
  DELETE_ADMIN_REP,
  UPDATE_ADMIN_SUPERVISORS,
  ADD_ADMIN_SUPERVISOR,
  DELETE_ADMIN_SUPERVISOR,
} from '../../actions';

const adminReducer = (state = { supervisors: {}, reps: {} }, action) => {
  switch (action.type) {
    case UPDATE_ADMIN_USER:
      return { ...state, user: action.user };
    case UPDATE_ADMIN_REPS:
      return { ...state, reps: action.reps };
    case ADD_ADMIN_REP: {
      const { cid, ...rep } = action.rep;
      return { ...state, reps: { ...state.reps, [cid]: rep } };
    }
    case DELETE_ADMIN_REP: {
      const reps = { ...state.reps };
      delete reps[action.cid];
      return { ...state, reps };
    }
    case UPDATE_ADMIN_SUPERVISORS:
      return { ...state, supervisors: action.supervisors };
    case ADD_ADMIN_SUPERVISOR: {
      const { sid, ...supervisor } = action.supervisor;
      return { ...state, supervisors: { ...state.supervisors, [sid]: supervisor } };
    }
    case DELETE_ADMIN_SUPERVISOR: {
      const supervisors = { ...state.supervisors };
      delete supervisors[action.sid];
      return { ...state, supervisors };
    }
    default:
      return state;
  }
};

export default adminReducer;
