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
  Link,
  useLocation,
} from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';
import { data } from './route';
import { ReactComponent as Logo } from './assets/logo.svg';

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
      zIndex={9999}
      target="__blank"
    />
    <Router>
      <Layout style={{ height: '100%' }}>
        <Sider
          width={230}
          style={{
            boxShadow: '2px 0 8px 0 rgb(29 35 41 / 5%)',
            overflow: 'auto',
          }}
        >
          <Link to="/" className="logo">
            <Logo width={28} height={28} />
            <span>Antd Project</span>
          </Link>
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
                    return <Route key={key} exact {...item} />;
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
