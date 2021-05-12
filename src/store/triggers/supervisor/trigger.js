import { updateSupervisorUser } from '../../actions';
import { postSupervisorLogin } from '../../apis';

// eslint-disable-next-line import/prefer-default-export
export const supervisorLoginDispatch = (sid, password) => async (dispatch) => {
  const { data: supervisor } = await postSupervisorLogin(sid, password);
  dispatch(updateSupervisorUser(supervisor));
  return supervisor;
};
