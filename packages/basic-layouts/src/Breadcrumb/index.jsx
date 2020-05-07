import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'umi';

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//   },
//   {
//     path: 'first',
//     name: 'first',
//   },
//   {
//     path: 'second',
//     name: 'second',
//   },
// ];

function itemRender(route, params, routes, paths) {
  const last = routes.indexOf(route) === routes.length - 1;
  return last ? (
    <span>{route.name}</span>
  ) : (
    <Link to={paths.join('/')}>{route.name}</Link>
  );
}

export default class BreadcrumbView extends Component {
  render() {
    const { location, routeData } = this.props;
    let routes = [{ path: '/', name: '首页' }];
    if (!/^(\/|\/welcome)$/.test(location.pathname)) {
      const data = routeData.filter(item => item.path === location.pathname);
      routes = routes.concat(data);
    }
    return <Breadcrumb itemRender={itemRender} routes={routes} />;
  }
}
