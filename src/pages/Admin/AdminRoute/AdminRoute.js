/** @jsxImportSource  @emotion/react */

import { useDispatch, useSelector } from 'react-redux';
import { Route, Redirect, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';
import { ADMIN_ACCESS_TOKEN } from '../../../constants';
import { FullscreenSpinner } from '../../../components';
import { adminTokenDispatch } from '../../../store/triggers';

const AdminRoute = ({ component, ...rest }) => {
  const [loading, setLoading] = useState(true);
  const user = useSelector(({ adminData }) => adminData.user);
  const [token] = useLocalStorage(ADMIN_ACCESS_TOKEN);
  const dispatch = useDispatch();
  useEffect(async () => {
    if (token) {
      await adminTokenDispatch(token)(dispatch);
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

AdminRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default AdminRoute;
