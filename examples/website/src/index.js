import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Menu } from 'antd';
import { GlobalOutlined, AppstoreAddOutlined } from '@ant-design/icons';
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
import Example from './pages/example';
import BasicLayouts from './pages/basic-layouts';
import Authorized from './pages/authorized';
import Config from './pages/config';

const { Sider, Content } = Layout;

function MenuContent() {
  let location = useLocation();
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={[location.pathname]}>
      <Menu.Item key="/" icon={<GlobalOutlined />}>
        <NavLink to="/">示例</NavLink>
      </Menu.Item>
      <Menu.Item key="/basic-layouts" icon={<AppstoreAddOutlined />}>
        <NavLink to="/basic-layouts">BasicLayouts</NavLink>
      </Menu.Item>
      <Menu.Item key="/authorized" icon={<AppstoreAddOutlined />}>
        <NavLink to="/authorized">Authorized</NavLink>
      </Menu.Item>
      <Menu.Item key="/config" icon={<AppstoreAddOutlined />}>
        <NavLink to="/config">Config</NavLink>
      </Menu.Item>
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
        <Sider>
          <MenuContent />
        </Sider>
        <Layout>
          <Content style={{ height: '100%', overflow: 'auto' }}>
            <Switch>
              <Route exact path="/">
                <Example />
              </Route>
              <Route path="/basic-layouts">
                <BasicLayouts />
              </Route>
              <Route path="/authorized">
                <Authorized />
              </Route>
              <Route path="/config">
                <Config />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
