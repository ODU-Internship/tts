/** @jsxImportSource @emotion/react */

import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Login from './Login/Login';
import RepRoute from './RepRoute/RepRoute';
import Dashboard from './Dashboard/Dashboard';

const Supervisor = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/login`} component={Login} />
      <RepRoute path={path} component={Dashboard} />
    </Switch>
  );
};

export default Supervisor;
