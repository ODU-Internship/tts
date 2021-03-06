import { combineReducers } from 'redux';
import adminReducer from './admin/reducer';
import supervisorReducer from './supervisor/reducer';
import repReducer from './rep/reducer';

const reducer = combineReducers({
  adminData: adminReducer,
  supervisorData: supervisorReducer,
  repData: repReducer,
});

export default reducer;
