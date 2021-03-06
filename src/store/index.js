/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(
  reducers,
  {},
  process.env.REACT_APP_BUILD_ENV !== 'production'
    && window.__REDUX_DEVTOOLS_EXTENSION__
    && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
