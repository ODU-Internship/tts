/** @jsxImportSource @emotion/react */

import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Login from './Login/Login';
import AdminRoute from './AdminRoute/AdminRoute';

const Admin = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/login`} component={Login} />
    </Switch>
  );
};

export default Admin;
