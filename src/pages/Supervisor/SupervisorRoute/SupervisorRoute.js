/** @jsxImportSource  @emotion/react */

import { useDispatch, useSelector } from 'react-redux';
import { Route, Redirect, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useLocalStorage } from 'react-use';
import { useEffect, useState } from 'react';
import { SUPERVISOR_ACCESS_TOKEN } from '../../../constants';
import { supervisorTokenDispatch } from '../../../store/triggers';
import { FullscreenSpinner } from '../../../components';

const SupervisorRoute = ({ component, ...rest }) => {
  const [loading, setLoading] = useState(true);
  const user = useSelector(({ supervisorData }) => supervisorData.user);
  const [token] = useLocalStorage(SUPERVISOR_ACCESS_TOKEN);
  const dispatch = useDispatch();
  useEffect(async () => {
    try {
      if (token) { await supervisorTokenDispatch(token)(dispatch); }
    } catch (e) {
      //
    }
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
SupervisorRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default SupervisorRoute;
