export const UPDATE_ADMIN_USER = 'UPDATE_ADMIN_USER';

export const ADD_CUSTREP = 'ADD_CUSTREP';

export const ADD_SUPERVISOR = 'ADD_SUPERVISOR';

export const updateAdminUser = (user) => ({
  type: UPDATE_ADMIN_USER,
  user,
});

export const addCustRep = (user) => ({
  type: ADD_CUSTREP,
  user,
});

export const addSupervisor = (user) => ({
  type: ADD_SUPERVISOR,
  user,
});
