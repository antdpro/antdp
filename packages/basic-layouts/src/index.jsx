import React, { useState, useMemo, Fragment } from 'react';
import { Layout } from 'antd';
import { Redirect } from 'umi';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import LayoutTabs from '@antdp/layout-tabs';
import DocumentTitle from '@antdp/document-title';
import MeunView from './Menu';
import Breadcrumb from './Breadcrumb';
import TopRightMenu from './TopRightMenu';
import LogoHeader from './LogoHeader';
import { getTreeList } from './utils';
import './index.css';

export default (props = {}) => {
  const {
    route = {
      routes: [],
    },
    projectName = 'Ant Design Pro',
    siderWidth = 260,
    topRightMenu,
    profile = {},
    isReRender = false,
    iframeRender = false,
    bodyPadding = 14,
  } = props;

  if (location.pathname === '/') {
    return <Redirect to="/welcome" />;
  }
  const [collapsed, setCollapsed] = useState(!!props.collapsed);
  const collapsedView = useMemo(
    () =>
      React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => setCollapsed(!collapsed),
      }),
    [collapsed],
  );

  const headerRightView = useMemo(() => {
    return (
      <Fragment>
        <div style={{ flex: '1 1 0%' }}></div>
        <div className="antdp-global-header-right">
          <TopRightMenu menu={topRightMenu} profile={profile} />
        </div>
      </Fragment>
    );
  }, [profile.avatar, profile.name]);
  const routeData = getTreeList(route.routes);
  let title = '';
  routeData.forEach((item) => {
    if (item.path === location.pathname) {
      title = item.name;
    }
  });
  return (
    <DocumentTitle
      title={`${title || ''}${title ? ' - ' : ''}${projectName || ''}`}
    >
      <Layout>
        <Layout.Sider
          width={siderWidth}
          collapsed={collapsed}
          className="antdp-global-sider"
        >
          <LogoHeader
            collapsed={collapsed}
            projectName={projectName}
            logo={props.logo}
          />
          <MeunView {...props} selectedKey={location.pathname} />
        </Layout.Sider>
        <Layout>
          <Layout.Header style={{ padding: 0 }} className="antdp-global-header">
            <div className="antdp-global-header-left">
              {collapsedView}
              <Breadcrumb routeData={routeData} {...props} />
            </div>
            {headerRightView}
          </Layout.Header>
          <Layout.Content>
            <LayoutTabs
              isReRender={isReRender}
              iframeRender={iframeRender}
              bodyPadding={bodyPadding}
              activeKey={location.pathname}
              dataSource={routeData}
            />
          </Layout.Content>
        </Layout>
      </Layout>
    </DocumentTitle>
  );
};
