import { combineReducers } from 'redux';
import adminReducer from './admin/reducer';
import supervisorReducer from './supervisor/reducer';

const reducer = combineReducers({
  adminData: adminReducer,
  supervisorData: supervisorReducer,
});

export default reducer;
