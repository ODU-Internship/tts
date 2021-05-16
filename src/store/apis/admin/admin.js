import { aAxios } from '../axios';

export const postAdminCustRep = (name, cid, password, phone, email, gender) => aAxios.post('/rep', {
  name, cid, password, phone, email, gender,
});

export const postAdminSupervisor = (name, sid, password, phone, email, gender) => aAxios.post('/supervisor', {
  name, sid, password, phone, email, gender,
});
