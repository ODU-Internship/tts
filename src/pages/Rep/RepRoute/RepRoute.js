/** @jsxImportSource  @emotion/react */

import { useDispatch, useSelector } from 'react-redux';
import { Route, Redirect, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useLocalStorage } from 'react-use';
import { useEffect, useState } from 'react';
import { REP_ACCESS_TOKEN } from '../../../constants';
import { repTokenDispatch } from '../../../store/triggers';
import { FullscreenSpinner } from '../../../components';

const RepRoute = ({ component, ...rest }) => {
  const [loading, setLoading] = useState(true);
  const user = useSelector(({ repData }) => repData.user);
  const [token] = useLocalStorage(REP_ACCESS_TOKEN);
  const dispatch = useDispatch();
  useEffect(async () => {
    if (token) { await repTokenDispatch(token)(dispatch); }
    setLoading(false);
  }, [token]);
  const { path } = useRouteMatch();
  if (loading) {
    return <FullscreenSpinner />;
  }
  if (!user) {
    return <Redirect to={`${path}/login`} />;
  }
  return <Route {...rest} component={component} />;
};
RepRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default RepRoute;
