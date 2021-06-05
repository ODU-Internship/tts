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
  getAdminDetails,
  getAdminReps,
  getAdminSupervisors,
  postAdminCustRep,
  postAdminLogin,
  postAdminSupervisor,
} from '../../apis';
import { setAdminHeader } from '../../apis/axios';

export const adminLoginDispatch = (aid, password) => async (dispatch) => {
  const { data: admin } = await postAdminLogin(aid, password);
  setAdminHeader(admin.tokens[0].accessToken);
  dispatch(updateAdminUser(admin));
  return admin;
};

export const adminTokenDispatch = (accessToken) => async (dispatch) => {
  setAdminHeader(accessToken);
  const { data: rep } = await getAdminDetails();
  dispatch(updateAdminUser(rep));
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
  const { data: supervisor } = await postAdminSupervisor(name, sid, password, phone, email, gender);
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
  const { data: rep } = await postAdminCustRep(name, sid, password, phone, email, gender);
  dispatch(addAdminRep(rep));
  return rep;
};

export const adminDeleteRepDispatch = (cid) => async (dispatch) => {
  await deleteAdminRep();
  dispatch(removeAdminRep(cid));
};
