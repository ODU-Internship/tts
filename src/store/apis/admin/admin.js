import { aAxios } from '../axios';

export const getAdminDetails = () => aAxios.get('/me');

export const postAdminCustRep = (name, cid, password, phone, email, gender) => aAxios.post('/reps', {
  name,
  cid,
  password,
  phone,
  email,
  gender,
});

export const postAdminSupervisor = (name, sid, password, phone, email, gender) => aAxios.post('/supervisors', {
  name,
  sid,
  password,
  phone,
  email,
  gender,
});

export const getAdminSupervisors = () => aAxios.get('/supervisors');

export const getAdminReps = () => aAxios.get('/reps');

export const deleteAdminSupervisor = (sid) => aAxios.delete(`/supervisors/${sid}`);

export const deleteAdminRep = (cid) => aAxios.delete(`/reps/${cid}`);
