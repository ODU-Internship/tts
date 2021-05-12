/** @jsxImportSource @emotion/react */

import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Login from './Login/Login';
import SupervisorRoute from './SupervisorRoute/SupervisorRoute';
import Ticket from './Ticket/Ticket';
import Dashboard from './Dashboard/Dashboard';

const Supervisor = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/login`} component={Login} />
      <SupervisorRoute path="/supervisor/:messageID" component={Ticket} />
      <SupervisorRoute path={path} component={Dashboard} />
    </Switch>
  );
};

export default Supervisor;
