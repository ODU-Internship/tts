import { updateSupervisorUser } from '../../actions';
import { postSupervisorLogin, getSupervisorDetails } from '../../apis';
import { setSupervisorHeader } from '../../apis/axios';

export const supervisorLoginDispatch = (sid, password) => async (dispatch) => {
  const { data: supervisor } = await postSupervisorLogin(sid, password);
  setSupervisorHeader(supervisor.tokens[0].accessToken);
  dispatch(updateSupervisorUser(supervisor));
  return supervisor;
};

export const supervisorTokenDispatch = (accessToken) => async (dispatch) => {
  setSupervisorHeader(accessToken);
  const { data: supervisor } = await getSupervisorDetails();
  dispatch(updateSupervisorUser(supervisor));
};
