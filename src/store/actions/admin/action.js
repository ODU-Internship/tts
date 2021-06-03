export const UPDATE_ADMIN_USER = 'UPDATE_ADMIN_USER';

export const UPDATE_ADMIN_REPS = 'UPDATE_ADMIN_REPS';

export const ADD_ADMIN_REP = 'ADD_ADMIN_REP';

export const REMOVE_ADMIN_REP = 'REMOVE_ADMIN_REP';

export const UPDATE_ADMIN_SUPERVISORS = 'UPDATE_ADMIN_SUPERVISORS';

export const ADD_ADMIN_SUPERVISOR = 'ADD_ADMIN_SUPERVISOR';

export const REMOVE_ADMIN_SUPERVISOR = 'REMOVE_ADMIN_SUPERVISOR';

export const updateAdminUser = (user) => ({
  type: UPDATE_ADMIN_USER,
  user,
});

export const updateAdminReps = (reps) => ({
  type: UPDATE_ADMIN_REPS,
  reps,
});

export const addAdminRep = (rep) => ({
  type: ADD_ADMIN_REP,
  rep,
});

export const removeAdminRep = (cid) => ({
  type: REMOVE_ADMIN_REP,
  cid,
});

export const updateAdminSupervisors = (supervisors) => ({
  type: UPDATE_ADMIN_SUPERVISORS,
  supervisors,
});

export const addAdminSupervisor = (supervisor) => ({
  type: ADD_ADMIN_SUPERVISOR,
  supervisor,
});

export const removeAdminSupervisor = (sid) => ({
  type: REMOVE_ADMIN_SUPERVISOR,
  sid,
});
