import {
  addAdminSupervisor,
  updateAdminSupervisors,
  updateAdminUser,
  removeAdminRep,
  removeAdminSupervisor,
  updateAdminReps,
  addAdminRep,
} from '../../actions';
import {
  deleteAdminRep,
  deleteAdminSupervisor,
  getAdminReps,
  getAdminSupervisors,
  postAdminCustRep,
  postAdminLogin,
  postAdminSupervisor,
} from '../../apis';

export const adminLoginDispatch = (aid, password) => async (dispatch) => {
  const { data: admin } = await postAdminLogin(aid, password);
  dispatch(updateAdminUser(admin));
};

export const adminSupervisorsDispatch = () => async (dispatch) => {
  const { data: supervisors } = await getAdminSupervisors();
  dispatch(updateAdminSupervisors(supervisors));
  return supervisors;
};

export const adminAddSupervisorDispatch = (
  name,
  sid,
  password,
  phone,
  email,
  gender,
) => async (dispatch) => {
  const { data: supervisor } = await postAdminSupervisor(
    name,
    sid,
    password,
    phone,
    email,
    gender,
  );
  dispatch(addAdminSupervisor(supervisor));
  return supervisor;
};

export const adminDeleteSupervisorDispatch = (sid) => async (dispatch) => {
  await deleteAdminSupervisor(sid);
  dispatch(removeAdminSupervisor(sid));
};

export const adminRepsDispatch = () => async (dispatch) => {
  const { data: reps } = await getAdminReps();
  dispatch(updateAdminReps(reps));
  return reps;
};

export const adminAddRepDispatch = (
  name,
  sid,
  password,
  phone,
  email,
  gender,
) => async (dispatch) => {
  const { data: rep } = await postAdminCustRep(
    name,
    sid,
    password,
    phone,
    email,
    gender,
  );
  dispatch(addAdminRep(rep));
  return rep;
};

export const adminDeleteRepDispatch = (cid) => async (dispatch) => {
  await deleteAdminRep();
  dispatch(removeAdminRep(cid));
};
