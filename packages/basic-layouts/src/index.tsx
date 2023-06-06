import { AuthorizedConfigProvider } from '@antdp/authorized';
import { App, ConfigProvider, Layout } from 'antd';
import React, { useMemo } from 'react';
import WarpContent from './Content';
import Header from './Header';
import { LayoutsProvider } from './hooks';
import './index.css';
import { BasicLayoutsProps } from './interface';
import SiderMenus from './Sider';
export * from './Breadcrumb';
export { default as Breadcrumb } from './Breadcrumb';
export * from './Content';
export { default as WarpContent } from './Content';
export * from './Header';
export { default as Header } from './Header';
export * from './HeaderMenus';
export { default as HeaderMenus } from './HeaderMenus';
export * from './hooks';
export * from './Logo';
export { default as Logo } from './Logo';
export * from './Sider';
export { default as Sider } from './Sider';
export { default as TopRight } from './TopRight';
export * from './utils';

const BasicLayouts = (props: BasicLayoutsProps) => {
  const { theme = 'light' } = props;
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
            {ANTD_MENU_IS_SHOW && <SiderMenus theme={theme} />}
            <Layout.Content className="antdp-basic-layouts-content">
              <App>
                <WarpContent />
              </App>
            </Layout.Content>
          </Layout>
        </React.Fragment>
      );
    } else if (!!ANTD_MENU_SLIDER) {
      return (
        <React.Fragment>
          {ANTD_MENU_IS_SHOW && <SiderMenus theme={theme} />}
          <Layout>
            {ANTD_HEAD_IS_SHOW && (
              <Layout.Header className="antdp-basic-layouts-header">
                <Header />
              </Layout.Header>
            )}
            <Layout.Content className="antdp-basic-layouts-content">
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
              {ANTD_MENU_IS_SHOW && <SiderMenus theme={theme} />}
              <Layout.Content className="antdp-basic-layouts-content">
                <App>
                  <WarpContent />
                </App>
              </Layout.Content>
            </Layout>
          </Layout>
        </React.Fragment>
      );
    }
  }, [theme]);
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
        <ConfigProvider {...props.configProviderProps}>
          <Layout className={`antdp-basic-layouts ${props.className}  antdp-basic-layouts-${theme}`}>
            {render}
          </Layout>
        </ConfigProvider>
      </LayoutsProvider>
    </AuthorizedConfigProvider>
  );
};
export default BasicLayouts;
