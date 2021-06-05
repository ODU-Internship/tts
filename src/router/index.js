/** @jsxImportSource @emotion/react */
import { Flex } from '@chakra-ui/react';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RiTaskLine } from 'react-icons/ri';

const Admin = lazy(() => import('../pages/Admin/Admin'));
const Supervisor = lazy(() => import('../pages/Supervisor/Supervisor'));
const Home = lazy(() => import('../pages/Home/Home'));
const Rep = lazy(() => import('../pages/Rep/Rep'));

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Suspense
        fallback={(
          <Flex justifyContent="center" alignItems="center" width="100vw" height="100vh">
            <RiTaskLine size="40" />
          </Flex>
        )}
      >
        <Route path="/admin" component={Admin} />
        <Route path="/supervisor" component={Supervisor} />
        <Route path="/rep" component={Rep} />
        <Route exact path="/" component={Home} />
      </Suspense>
    </Switch>
  </BrowserRouter>
);

export default Router;
