/** @jsxImportSource  @emotion/react */

import { useSelector } from 'react-redux';
import { Route, Redirect, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Login from '../Login/Login';

const AdminRoute = ({ component, ...rest }) => {
  const admin = useSelector(({ adminData }) => adminData.user);
  const { path } = useRouteMatch();
  if (!admin) {
    return <Redirect path={`${path}/login`} />;
  }
  return <Route {...rest} component={component} />;
};

AdminRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default AdminRoute;
