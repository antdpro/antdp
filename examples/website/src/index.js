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
import ReactLogo from './assets/logo.svg';

const { Sider, Content } = Layout;

// 递归实现----菜单渲染
function renderMenu(data) {
  return data.map(({ path, name, icon, childs }) => {
    if (childs) {
      return (
        <Menu.SubMenu key={path} title={name} icon={icon}>
          {renderMenu(childs)}
        </Menu.SubMenu>
      );
    }
    return (
      <Menu.Item key={path} icon={icon}>
        <NavLink to={path}>{name}</NavLink>
      </Menu.Item>
    );
  });
}
// 递归实现----内容渲染
function renderContent(data) {
  return data.map(({ childs, ...item }, key) => {
    if (childs) {
      return renderContent(childs);
    }
    return <Route key={key} exact {...item} />;
  });
}

function MenuContent() {
  let location = useLocation();
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={[location?.pathname]}>
      {renderMenu(data)}
    </Menu>
  );
}

ReactDOM.render(
  <Fragment>
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
            <img src={ReactLogo} width={28} height={28} alt="logo" />
            <span>Antd Project</span>
          </Link>
          <MenuContent />
        </Sider>
        <Layout>
          <Content
            style={{ height: '100%', overflow: 'auto', position: 'relative' }}
          >
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
                <Fragment>{renderContent(data)}</Fragment>
              </Switch>
            </Suspense>
          </Content>
        </Layout>
      </Layout>
    </Router>
  </Fragment>,
  document.getElementById('root'),
);
