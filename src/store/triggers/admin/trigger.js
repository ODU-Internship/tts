import { updateAdminUser } from '../../actions';
import { postAdminLogin } from '../../apis';

// eslint-disable-next-line import/prefer-default-export
export const adminLoginDispatch = (aid, password) => async (dispatch) => {
  const { data: admin } = await postAdminLogin(aid, password);
  dispatch(updateAdminUser(admin));
};
