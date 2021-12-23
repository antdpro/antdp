import React, { useState, useMemo, Fragment } from 'react';
import { Layout } from 'antd';
import { Redirect } from 'umi';
import { useLocation } from 'react-router-dom';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import LayoutTabs from '@antdp/layout-tabs';
import DocumentTitle from '@antdp/document-title';
import Fullscreen from '@antdp/fullscreen';
import MeunView from './Menu';
import Breadcrumb from './Breadcrumb';
import TopRightMenu from './TopRightMenu';
import LogoHeader from './LogoHeader';
import { getTreeList, getMenuItemRouters } from './utils';
import { getAuthorizedPage } from '@antdp/authorized';

import './index.css';

export default (props = {}) => {
  const {
    route = {
      routes: [],
    },
    projectName = 'Ant Design Pro',
    siderWidth = 260,
    topRightMenu = [],
    profile = {},
    bodyPadding = 14,
    topRightLanguage = null,
    intlLanguage = null,
    logoJumpTo,
  } = props;

  let location = useLocation();
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
          <Fullscreen />
          <TopRightMenu menu={topRightMenu} profile={profile} />
        </div>
      </Fragment>
    );
  }, [profile.avatar, profile.name]);

  const getRoutes = useMemo(() => {
    let authMenus = [];
    if (!!ANTD_AUTH_CONF) {
      // 所有的 权限菜单
      authMenus =
        (sessionStorage.getItem(ANTD_AUTH_CONF.auth_menu) &&
          JSON.parse(sessionStorage.getItem(ANTD_AUTH_CONF.auth_menu))) ||
        [];
    }
    if (intlLanguage || !!ANTD_AUTH_CONF) {
      return getMenuItemRouters(route.routes, authMenus, intlLanguage);
    }
    return route.routes || [];
  }, [route.routes]);

  const routeData = getTreeList(getRoutes);
  let title = '';
  routeData.forEach((item) => {
    if (item.path === location.pathname) {
      title = item.name;
    }
  });
  const toPath = getAuthorizedPage(route.routes || [], location.pathname);
  // /**  是否显示 左侧菜单 */
  // ANTD_MENU_IS_SHOW: false,
  //   /**  是否显示 head头部 */
  //   ANTD_HEAD_IS_SHOW: false,
  return (
    <DocumentTitle
      title={`${title || ''}${title ? ' - ' : ''}${projectName || ''}`}
    >
      <Layout>
        {ANTD_MENU_IS_SHOW && (
          <Layout.Sider
            width={siderWidth}
            collapsed={collapsed}
            className="antdp-global-sider"
          >
            <LogoHeader
              collapsed={collapsed}
              projectName={projectName}
              logo={props.logo}
              logoJumpTo={logoJumpTo}
            />
            <MeunView
              {...props}
              route={{
                routes: getRoutes,
              }}
              selectedKey={location.pathname}
            />
          </Layout.Sider>
        )}
        <Layout>
          {ANTD_HEAD_IS_SHOW && (
            <Layout.Header
              style={{ padding: 0 }}
              className="antdp-global-header"
            >
              <div className="antdp-global-header-left">
                {ANTD_MENU_IS_SHOW && collapsedView}
                <Breadcrumb
                  routeData={routeData}
                  routeIntl={getRoutes}
                  {...props}
                />
              </div>
              {headerRightView}
              {topRightLanguage}
            </Layout.Header>
          )}
          <Layout.Content>
            {(() => {
              if (location.pathname === '/') {
                return <Redirect to="/welcome" />;
              }
              if (!!ANTD_AUTH_CONF && (toPath === 404 || toPath === 403)) {
                return <Redirect to={`/${toPath}`} />;
              }
              return (
                <LayoutTabs
                  bodyPadding={bodyPadding}
                  activeKey={location.pathname}
                  dataSource={routeData}
                />
              );
            })()}
          </Layout.Content>
        </Layout>
      </Layout>
    </DocumentTitle>
  );
};
