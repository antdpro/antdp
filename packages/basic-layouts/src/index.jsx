import React, { Component } from 'react';
import { Tabs, Layout } from 'antd';
import { history, Link } from 'umi';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import MeunView from './Menu';
import Breadcrumb from './Breadcrumb';
import { getTreeList } from './utils';
import './index.css';

export default class BaseLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      tabList: [],
      /**
       * tab 所有数据
       */
      routeList: [],
      /**
       * 当前激活 tab 面板的 key
       */
      activeKey: '',
    }
    props.history.listen((location, action) => {
      if (location.pathname === '/') {
        location.pathname = "/welcome";
      }
      const { routeList, tabList } = this.state;
      const data = routeList.filter(item => item.path === location.pathname)[0];
      const include = tabList.filter(item => item.path === location.pathname)[0];
      if (!include) {
        tabList.push(data);
      }
      this.setState({
        activeKey: location.pathname,
        tabList,
      });
    });
  }
  componentDidMount() {
    const { route, location } = this.props;
    const data = getTreeList(route.routes) || [];
    if (location.pathname === '/') {
      location.pathname = '/welcome';
    }

    const tabList = data.filter(item => item.path === location.pathname);
    this.setState({
      activeKey: location.pathname,
      routeList: data,
      tabList,
    });
  }
  onClose = (targetKey, action) => {
    const { tabList } = this.state;
    let index = 0;
    const data = tabList.filter((item, idx) => {
      if (item.path === targetKey) {
        index = idx;
      }
      return item.path !== targetKey;
    });
    let activeKey = '';
    if (data && data.length > 0) {
      activeKey = data[index === 0 ? 0 : index - 1]['path'];
    }
    this.setState({ activeKey, tabList: data }, () => {
      activeKey && this.props.history.push(activeKey);
    });
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  onChange = activeKey => history.push(activeKey);
  render() {
    const { logo, route, projectName } = this.props;
    const { collapsed } = this.state;
    return (
      <Layout>
        <Layout.Sider width={260} collapsed={collapsed}>
          <div className="antdp-global-title">
            <Link to="/">
              {logo && <img src={logo} alt="logo" />}
              {!collapsed && projectName && <h1>{projectName || 'Ant Design Pro'}</h1>}
            </Link>
          </div>
          <MeunView {...this.props} selectedKey={this.state.activeKey} />
        </Layout.Sider>
        <Layout>
          <Layout.Header style={{ padding: 0 }} className="antdp-global-header">
            <div className="antdp-global-header-left">
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,
              })}
              <Breadcrumb routeData={getTreeList(route.routes)} {...this.props} />
            </div>
            <div className="antdp-global-header-right">
              
            </div>
          </Layout.Header>
          <Layout.Content>
            <Tabs
              onChange={this.onChange}
              activeKey={this.state.activeKey}
              type="editable-card"
              hideAdd={true}
              onEdit={this.onClose}
            >
              {this.state.tabList.map(pane => {
                const Comp = /(function|object)/.test(typeof pane.component) ? pane.component : null;
                return (
                  <Tabs.TabPane closable={this.state.tabList.length !== 1} tab={pane.name} key={pane.key}>
                    {Comp &&  <Comp />}
                  </Tabs.TabPane>
                )
              })}
            </Tabs>
          </Layout.Content>
        </Layout>
      </Layout>
    );
  }
}