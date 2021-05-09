/** @jsxImportSource @emotion/react */

import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Login from './Login/Login';
import AdminRoute from './AdminRoute/AdminRoute';
import Dashboard from './Dashboard/Dashboard';

const Admin = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/login`} component={Login} />
      <AdminRoute path={path} component={Dashboard} />
    </Switch>
  );
};

export default Admin;
