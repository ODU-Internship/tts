/** @jsxImportSource  @emotion/react */

import { useSelector } from 'react-redux';
import { Route, Redirect, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useLocalStorage } from 'react-use';
import { SUPERVISOR_ACCESS_TOKEN } from '../../../constants';

const SupervisorRoute = ({ component, ...rest }) => {
  const [token] = useLocalStorage(SUPERVISOR_ACCESS_TOKEN);
  const user = useSelector(({ supervisorData }) => supervisorData.user);
  const { path } = useRouteMatch();
  if (!token && !user) {
    return <Redirect to={`${path}/login`} />;
  }
  return <Route {...rest} component={component} />;
};
SupervisorRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default SupervisorRoute;
