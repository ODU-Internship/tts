/** @jsxImportSource  @emotion/react */

import { useSelector } from 'react-redux';
import { Route, Redirect, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

const SupervisorRoute = ({ component, ...rest }) => {
  const supervisor = useSelector(({ supervisorData }) => supervisorData.user);
  const { path } = useRouteMatch();
  if (!supervisor) {
    return <Redirect to={`${path}/login`} />;
  }
  return <Route {...rest} component={component} />;
};

SupervisorRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default SupervisorRoute;
