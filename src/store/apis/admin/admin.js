import { aAxios } from '../axios';

export const postAdminCustRep = (name, cid, password, phone, email, gender) => aAxios.post('/reps', {
  name, cid, password, phone, email, gender,
});

export const postAdminSupervisor = (name, sid, password, phone, email, gender) => aAxios.post('/supervisors', {
  name, sid, password, phone, email, gender,
});
