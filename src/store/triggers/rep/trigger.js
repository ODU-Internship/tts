import { addRepMessage, updateRepMessages, updateRepUser } from '../../actions';
import {
  postRepLogin, getRepDetails, getRepMessages, postRepMessage,
} from '../../apis';
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

export const updateRepMessagesDispatch = () => async (dispatch) => {
  const { data: messages } = await getRepMessages();
  dispatch(updateRepMessages(messages));
};

export const addRepMessageDispatch = (
  custName,
  custDetails,
  category,
  message,
  company,
  type,
) => async (dispatch) => {
  const { data: newMessage } = await postRepMessage(
    custName,
    custDetails,
    category,
    message,
    company,
    type,
  );
  dispatch(addRepMessage(newMessage));
};
