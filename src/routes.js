import {
  Suspense,
  Fragment,
  lazy
} from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import LoadingScreen from './components/LoadingScreen';
import GuestGuard from './components/GuestGuard';

export const renderRoutes = (routes = []) => (
  <Suspense fallback={<LoadingScreen />}>
    <Switch>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <Guard>
                <Layout>
                  {route.routes
                    ? renderRoutes(route.routes)
                    : <Component {...props} />}
                </Layout>
              </Guard>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

const routes = [
  {
    exact: true,
    path: '/404',
    component: lazy(() => import('./pages/errors/NotFound'))
  },
  {
    exact: true,
    guard: GuestGuard,
    path: '/products',
    component: lazy(() => import('./pages/Products'))
  },
  {
    exact: true,
    guard: GuestGuard,
    path: '/product/:productId',
    component: lazy(() => import('./pages/Products/Product'))
  },
  {
    exact: true,
    guard: GuestGuard,
    path: '/add-product',
    component: lazy(() => import('./pages/Products/AddProduct'))
  },
  {
    exact: true,
    guard: GuestGuard,
    path: '/edit-product/:productId',
    component: lazy(() => import('./pages/Products/EditProduct'))
  },
  {
    exact: true,
    guard: GuestGuard,
    path: '/',
    component: () => <Redirect to="/products" />
  },
  {
    component: () => <Redirect to="/404" />
  }
];

export default routes;
