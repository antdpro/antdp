import { AuthorizedConfigProvider } from '@antdp/authorized';
import { App, ConfigProvider, Layout, theme as th } from 'antd';
import React, { useMemo } from 'react';
import WarpContent from './Content';
import Header from './Header';
import { LayoutsProvider } from './hooks';
import './index.css';
import { BasicLayoutsProps, LayoutModel } from './interface';
import Message from './Message';
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
export { message, modal, notification } from './Message';
export * from './Sider';
export { default as Sider } from './Sider';
export { default as TopRight } from './TopRight';
export * from './utils';

const BasicLayouts = (props: BasicLayoutsProps) => {
  const { theme = 'light' } = props;
  const layout = props.layout;
  const render = useMemo(() => {
    if (layout === LayoutModel.TOPLEFT) {
      return (
        <React.Fragment>
          {ANTD_HEAD_IS_SHOW && (
            <Layout.Header className="antdp-basic-layouts-header">
              <Header />
            </Layout.Header>
          )}
          <Layout>
            {ANTD_MENU_IS_SHOW && <SiderMenus menuProps={props.menuProps} theme={theme} />}
            <Layout.Content className="antdp-basic-layouts-content">
              <App>
                <WarpContent />
                <Message />
              </App>
            </Layout.Content>
          </Layout>
        </React.Fragment>
      );
    } else if (layout === LayoutModel.SLIDER) {
      return (
        <React.Fragment>
          {ANTD_MENU_IS_SHOW && <SiderMenus menuProps={props.menuProps} theme={theme} />}
          <Layout>
            {ANTD_HEAD_IS_SHOW && (
              <Layout.Header className="antdp-basic-layouts-header">
                <Header />
              </Layout.Header>
            )}
            <Layout.Content className="antdp-basic-layouts-content">
              <App>
                <WarpContent />
                <Message />
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
              {ANTD_MENU_IS_SHOW && <SiderMenus menuProps={props.menuProps} theme={theme} />}
              <Layout.Content className="antdp-basic-layouts-content">
                <App>
                  <WarpContent />
                  <Message />
                </App>
              </Layout.Content>
            </Layout>
          </Layout>
        </React.Fragment>
      );
    }
  }, [theme, layout]);

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
        <ConfigProvider
          theme={{
            algorithm:
              theme === 'dark' ? th.darkAlgorithm : th.defaultAlgorithm,
          }}
          {...props.configProviderProps}
        >
          <Layout
            className={`antdp-basic-layouts antdp-basic-layouts-${theme} ${props.className}`}
          >
            {render}
          </Layout>
        </ConfigProvider>
      </LayoutsProvider>
    </AuthorizedConfigProvider>
  );
};
export default BasicLayouts;
