import React, { Component } from 'react';
import { Tabs, Layout } from 'antd';
import { history } from 'umi';
import MeunView from './Menu';
import { getTreeList } from './utils';
import './index.css';

export default class BaseLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.setState({ activeKey, tabList: data });
  }
  onChange = activeKey => history.push(activeKey);
  render() {
    return (
      <Layout>
        <Layout.Header>Header</Layout.Header>
        <Layout>
          <Layout.Sider>
            <MeunView {...this.props} />
          </Layout.Sider>
          <Layout.Content>
            <Tabs
              onChange={this.onChange}
              activeKey={this.state.activeKey}
              type="editable-card"
              hideAdd={true}
              onEdit={this.onClose}
            >
              {this.state.tabList.map(pane => {
                const Comp = typeof pane.component === 'function' ? pane.component : null;
                return (
                  <Tabs.TabPane tab={pane.name} key={pane.key}>
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