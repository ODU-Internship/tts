import {
  updateSupervisorMessage,
  updateSupervisorMessages,
  updateSupervisorUser,
} from '../../actions';
import {
  postSupervisorLogin,
  getSupervisorDetails,
  getSupervisorMessages,
  getSupervisorMessage,
  putSupervisorMessage,
  postRetrains,
} from '../../apis';
import { setSupervisorHeader } from '../../apis/axios';

export const supervisorLoginDispatch = (sid, password) => async (dispatch) => {
  const { data: supervisor } = await postSupervisorLogin(sid, password);
  setSupervisorHeader(supervisor.tokens[0].accessToken);
  dispatch(updateSupervisorUser(supervisor));
  return supervisor;
};

export const supervisorTokenDispatch = (accessToken) => async (dispatch) => {
  setSupervisorHeader(accessToken);
  const { data: supervisor } = await getSupervisorDetails();
  dispatch(updateSupervisorUser(supervisor));
};

export const supervisorMessagesDispatch = () => async (dispatch) => {
  const { data: messages } = await getSupervisorMessages();
  dispatch(updateSupervisorMessages(messages));
  return messages;
};

export const supervisorMessageDispatch = (messageID) => async (dispatch) => {
  const { data: message } = await getSupervisorMessage(messageID);
  dispatch(updateSupervisorMessage(message));
};

export const supervisorUpdateMessageDispatch = (messageID, message) => async (dispatch) => {
  const { data: newMessage } = await putSupervisorMessage(messageID, message);
  postRetrains(message.message, message.label);
  dispatch(updateSupervisorMessage(newMessage));
};
