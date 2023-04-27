import React from 'react';
import { HashRouter, useNavigate, useRoutes } from 'react-router-dom';
import routesConfig from './config';
import { filterEmptyChildRoutes, handleRoutes } from './utils';

export * from 'react-router';
export * from 'react-router-dom';
const App = (props) => {
  const { routes = routesConfig } = props;
  const navigate = useNavigate();
  const childRoutes = React.useMemo(() => {
    const data = routes.find((item) => item.path === '/');
    if (data && Array.isArray(data.children) && data.children.length) {
      return filterEmptyChildRoutes(data.children);
    }
    return [];
  }, [routes]);
  return useRoutes(handleRoutes(routes, childRoutes, navigate));
};
export default () => (
  <HashRouter>
    <App />
  </HashRouter>
);
