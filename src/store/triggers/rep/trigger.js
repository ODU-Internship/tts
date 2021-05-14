import { updateRepUser } from '../../actions';
import { postRepLogin, getRepDetails } from '../../apis';
import { setRepHeader } from '../../apis/axios';

export const repLoginDispatch = (sid, password) => async (dispatch) => {
  const { data: rep } = await postRepLogin(sid, password);
  setRepHeader(rep.tokens[0].accessToken);
  dispatch(updateRepUser(rep));
  return rep;
};

export const repTokenDispatch = (accessToken) => async (dispatch) => {
  setRepHeader(accessToken);
  const { data: rep } = await getRepDetails();
  dispatch(updateRepUser(rep));
};
