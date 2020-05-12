import React, { useMemo } from 'react';
import { Link } from 'umi';
import './index.css';

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
  const Home = useMemo(() => (
    <span data-separator={routesDatas.length === 0 ? '' : '/'}>
      <Link to="/">
        <span>首页</span>
      </Link>
    </span>
  ));
  return (
    <span className="antdp-global-breadcrumb">
      {Home}
      {routesDatas.map((item, index) => {
        if (!item.path || !item.breadcrumbName) return null;
        if (index === routesDatas.length - 1) {
          return <span key={index}>{item.breadcrumbName}</span>;
        }
        return (
          <span data-separator="/">
            <Link to={item.path} key={index}>
              {index === 0 && <HomeOutlined />}
              <span>{item.breadcrumbName}</span>
            </Link>
          </span>
        );
      })}
    </span>
  );
};
