import React, { Suspense, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import GitHubCorners from '@uiw/react-github-corners';
import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink,
  useLocation,
} from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';
import { data } from './route';

const { Sider, Content } = Layout;

function MenuContent() {
  let location = useLocation();
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname]}>
      {data.map(({ path, name, icon }) => {
        return (
          <Menu.Item key={path} icon={icon}>
            <NavLink to={path}>{name}</NavLink>
          </Menu.Item>
        );
      })}
    </Menu>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <GitHubCorners
      fixed
      href="https://github.com/antdpro/antdp"
      size={60}
      target="__blank"
    />
    <Router>
      <Layout style={{ height: '100%' }}>
        <Sider style={{ overflow: 'auto' }}>
          <div className="logo">antdp</div>
          <MenuContent />
        </Sider>
        <Layout>
          <Content style={{ height: '100%', overflow: 'auto' }}>
            <Suspense
              fallback={
                <Spin
                  indicator={
                    <LoadingOutlined
                      style={{ fontSize: 24, margin: '20px 20px' }}
                      spin
                    />
                  }
                />
              }
            >
              <Switch>
                <Fragment>
                  {data.map(({ name, icon, ...item }, key) => {
                    const { path, component: Comps } = item;
                    console.log('Comps:', item, path, Comps, data);
                    return <Route key={key} {...item} />;
                  })}
                </Fragment>
              </Switch>
            </Suspense>
          </Content>
        </Layout>
      </Layout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
