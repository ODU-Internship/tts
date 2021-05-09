/** @jsxImportSource  @emotion/core */

import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Login } from './pages';

const AdminRoute = ({ component, ...rest }) => {
  const admin = useSelector(({ adminData }) => adminData.user);
  if (!admin) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Route {...rest} component={Login} />;
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={component} />;
};

AdminRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default AdminRoute;
