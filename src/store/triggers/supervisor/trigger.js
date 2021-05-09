/* eslint-disable indent */
import { updateSupervisorUser } from '../../actions';
import { postSupervisorLogin } from '../../apis';

// eslint-disable-next-line import/prefer-default-export
export const supervisorLoginDispatch = (sid, password) => async (dispatch) => {
    // eslint-disable-next-line indent
    const { data: supervisor } = await postSupervisorLogin(sid, password);
    dispatch(updateSupervisorUser(supervisor));
};
