import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'umi';

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

function itemRender(route, params, routes, paths) {
  const last = routes.indexOf(route) === routes.length - 1;
  return last ? (
    <span key={route.path}>{route.breadcrumbName}</span>
  ) : (
    <Link to={paths.join('/')} key={route.path}>
      {route.breadcrumbName}
    </Link>
  );
}

export default class BreadcrumbView extends Component {
  render() {
    const { location, routeData } = this.props;
    let routes = [{ path: '/', breadcrumbName: '首页' }];
    if (!/^(\/|\/welcome)$/.test(location.pathname)) {
      const data = routeData
        .filter((item) => item.path === location.pathname)
        .map((item) => {
          item.breadcrumbName = item.name;
          return item;
        });
      routes = routes.concat(data);
    }
    return <Breadcrumb itemRender={itemRender} routes={routes} />;
  }
}
