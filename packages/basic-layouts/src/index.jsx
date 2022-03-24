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
import { getTreeList, getMenuItemRouters, getChildMenu } from './utils';
import { getAuthorizedPage } from '@antdp/authorized';
import HeaderMenu from './HeaderMenu';

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

  let topAndLeftMenu = {
    parentMenu: [],
    childMenu: new Map([]),
    childParent: new Map([]),
  };

  if (ANTD_MENU_TOP_LEFT) {
    topAndLeftMenu = getChildMenu(getRoutes);
  }

  const childMenu = ANTD_MENU_TOP_LEFT
    ? topAndLeftMenu.childMenu.get(
        topAndLeftMenu.childParent.get(location.pathname),
      )
    : getRoutes;

  return (
    <DocumentTitle
      title={`${title || ''}${title ? ' - ' : ''}${projectName || ''}`}
    >
      <Layout>
        {ANTD_MENU_IS_SHOW && !ANTD_TITLE_TOP && (
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
              {ANTD_TITLE_TOP && (
                <LogoHeader
                  collapsed={false}
                  projectName={projectName}
                  logo={props.logo}
                  logoJumpTo={logoJumpTo}
                />
              )}
              <div className="antdp-global-header-left">
                {ANTD_MENU_IS_SHOW && !ANTD_TITLE_TOP && collapsedView}
                {!ANTD_TITLE_TOP && (
                  <Breadcrumb
                    routeData={routeData}
                    routeIntl={getRoutes}
                    {...props}
                  />
                )}
                <HeaderMenu
                  selectedKey={topAndLeftMenu.childParent.get(
                    location.pathname,
                  )}
                  routes={topAndLeftMenu.parentMenu}
                />
              </div>
              {headerRightView}
              {topRightLanguage}
            </Layout.Header>
          )}

          <Layout>
            {ANTD_TITLE_TOP && Array.isArray(childMenu) && childMenu.length && (
              <Layout.Sider>
                <MeunView
                  {...props}
                  route={{
                    routes: childMenu,
                  }}
                  selectedKey={location.pathname}
                />
              </Layout.Sider>
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
      </Layout>
    </DocumentTitle>
  );
};
