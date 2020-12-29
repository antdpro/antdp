import React, { useMemo } from 'react';
import { Link } from 'umi';
import './index.css';
import { getBreadcrumbNameRouterMap } from './../utils';

// const routes = [
//   {
//     path: '/',
//     breadcrumbName: 'home',
//   },
//   {
//     path: 'first',
//     breadcrumbName: 'first',
//   },
//   {
//     path: 'second',
//     breadcrumbName: 'second',
//   },
// ];

export default (props = {}) => {
  const breadcrumbNameMap = useMemo(
    () => getBreadcrumbNameRouterMap(props.route.routes),
    [props.route.routes],
  );
  const _breadcrumbRender = useMemo(() => {
    const list = breadcrumbNameMap.get(props.location.pathname) || [];
    return list.map((item, index) => {
      let attr = { 'data-separator': '/' };
      if (index === list.length - 1) {
        delete attr['data-separator'];
        return (
          <span key={index} {...attr}>
            <Link to={item.path || '/'}>
              <span>{item.name || null}</span>
            </Link>
          </span>
        );
      }
      return (
        <span key={index} {...attr}>
          {item.name || null}
        </span>
      );
    });
  }, [props.location.pathname, breadcrumbNameMap]);

  function getRoutes(name) {
    let routes = [];
    if (!/^(\/|\/welcome)$/.test(name)) {
      const data = (props.routeData || [])
        .filter((item) => item.path === name)
        .map((item) => {
          item.breadcrumbName = item.name;
          return item;
        });
      routes = routes.concat(data);
    }
    return routes;
  }

  const routesDatas = useMemo(() => getRoutes(props.location.pathname), [
    props.location.pathname,
  ]);
  const Home = useMemo(
    () => (
      <span data-separator={routesDatas.length === 0 ? '' : '/'}>
        <Link to="/">
          <span>首页</span>
        </Link>
      </span>
    ),
    [],
  );

  return (
    <span className="antdp-global-breadcrumb">
      {/* {_breadcrumbRender} */}
      {Home}
      {routesDatas.map((item, index) => {
        if (!item.path || !item.breadcrumbName) return null;
        if (index === routesDatas.length - 1) {
          return <span key={index}>{item.breadcrumbName}</span>;
        }
        return (
          <span data-separator="/">
            <Link to={item.path} key={index}>
              <span>{item.breadcrumbName}</span>
            </Link>
          </span>
        );
      })}
    </span>
  );
};
