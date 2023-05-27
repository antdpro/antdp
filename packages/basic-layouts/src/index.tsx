import { AuthorizedConfigProvider } from '@antdp/authorized';
import { App, Layout } from 'antd';
import React, { useMemo } from 'react';
import WarpContent from './Content';
import Header from './Header';
import SiderMenus from './Sider';
import { LayoutsProvider } from './hooks';
import './index.css';
import { BasicLayoutsProps } from './interface';
export * from './Breadcrumb';
export { default as Breadcrumb } from './Breadcrumb';
export * from './Content';
export { default as WarpContent } from './Content';
export * from './Header';
export { default as Header } from './Header';
export * from './HeaderMenus';
export { default as HeaderMenus } from './HeaderMenus';
export * from './Logo';
export { default as Logo } from './Logo';
export * from './Sider';
export { default as Sider } from './Sider';
export { default as TopRight } from './TopRight';
export * from './hooks';
export * from './utils';

const BasicLayouts = (props: BasicLayoutsProps) => {
  const render = useMemo(() => {
    if (!!ANTD_MENU_TOP_LEFT) {
      return (
        <React.Fragment>
          {ANTD_HEAD_IS_SHOW && (
            <Layout.Header className="antdp-basic-layouts-header">
              <Header />
            </Layout.Header>
          )}
          <Layout>
            {ANTD_MENU_IS_SHOW && <SiderMenus />}
            <Layout.Content
              className="antdp-basic-layouts-content"
              style={{
                backgroundColor: '#f5f5f5',
                ...props?.contentStyle,
              }}
            >
              <App>
                <WarpContent />
              </App>
            </Layout.Content>
          </Layout>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Layout>
            {ANTD_HEAD_IS_SHOW && (
              <Layout.Header className="antdp-basic-layouts-header">
                <Header />
              </Layout.Header>
            )}
            <Layout>
              {ANTD_MENU_IS_SHOW && <SiderMenus />}
              <Layout.Content
                className="antdp-basic-layouts-content"
                style={{
                  backgroundColor: '#f5f5f5',
                  ...props?.contentStyle,
                }}
              >
                <App>
                  <WarpContent />
                </App>
              </Layout.Content>
            </Layout>
          </Layout>
        </React.Fragment>
      );
    }
  }, []);
  const newData = useMemo(() => {
    if (typeof ANTD_AUTH_CONF === 'boolean') {
      return {
        auth_menu: 'authMenu',
        auth_btn: 'authBtn',
        auth_check_url: 'menuUrl',
        isCheckAuth: true,
      };
    }
    if (typeof ANTD_AUTH_CONF === 'object' && ANTD_AUTH_CONF) {
      return {
        auth_menu: 'authMenu',
        auth_btn: 'authBtn',
        auth_check_url: 'menuUrl',
        ...((ANTD_AUTH_CONF || {}) as any),
        isCheckAuth: true,
      };
    }
    return { isCheckAuth: false };
  }, [ANTD_AUTH_CONF]);

  return (
    <AuthorizedConfigProvider {...newData}>
      <LayoutsProvider {...props}>
        <Layout className="antdp-basic-layouts">{render}</Layout>
      </LayoutsProvider>
    </AuthorizedConfigProvider>
  );
};
export default BasicLayouts;
