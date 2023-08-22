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
import { defaultThemeColors } from './utils';
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
  const { theme = 'light', token = undefined } = props;
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
            {ANTD_MENU_IS_SHOW && (
              <SiderMenus menuProps={props.menuProps} theme={theme} />
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
    } else if (layout === LayoutModel.SLIDER) {
      return (
        <React.Fragment>
          {ANTD_MENU_IS_SHOW && (
            <SiderMenus menuProps={props.menuProps} theme={theme} />
          )}
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
              {ANTD_MENU_IS_SHOW && (
                <SiderMenus menuProps={props.menuProps} theme={theme} />
              )}
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

  const style = {
    ['--primary-slider-bg']:
      token?.menu?.colorMenuBackground ||
      defaultThemeColors(layout)[theme]['--primary-slider-bg'],
    ['--primary-slider-trigger-border']:
      token?.menu?.triggerColor ||
      defaultThemeColors(layout)[theme]['--primary-slider-trigger-border'],
    ['--primary-sider-trigger-text-color']:
      token?.menu?.triggerTextColor ||
      defaultThemeColors(layout)[theme]['--primary-sider-trigger-text-color'],
    ['--primary-header-bg']:
      token?.header?.colorHeaderBackground ||
      defaultThemeColors(layout)[theme]['--primary-header-bg'],
    ['--primary-header-text-color']:
      token?.header?.headerTextColor ||
      defaultThemeColors(layout)[theme]['--primary-header-text-color'],
    ['--primary-shadow']:
      token?.shadowColor ||
      defaultThemeColors(layout)[theme]['--primary-shadow'],
    ['--primary-title-text-color']:
      token?.titleColor ||
      defaultThemeColors(layout)[theme]['--primary-title-text-color'],
    ['--primary-content-bg']:
      token?.contentBackground ||
      defaultThemeColors(layout)[theme]['--primary-content-bg'],
  } as any;
  return (
    <AuthorizedConfigProvider {...newData}>
      <LayoutsProvider {...props}>
        <ConfigProvider
          theme={{
            algorithm:
              theme === 'dark' ? th.darkAlgorithm : th.defaultAlgorithm,
            components: {
              Layout: {
                colorBgHeader: 'transparent',
                colorBgBody: 'transparent',
              },
              Menu: {
                itemBg:
                  token?.menu?.colorMenuBackground ||
                  defaultThemeColors(layout)[theme]['--primary-slider-bg'],
                subMenuItemBg:
                  token?.menu?.colorMenuBackground ||
                  defaultThemeColors(layout)[theme]['--primary-slider-bg'],
                itemBorderRadius: 4,
                itemSelectedBg:
                  token?.menu?.colorBgMenuItemSelected ||
                  defaultThemeColors(layout)[theme]['itemSelectedBg'],
                colorItemBgSelected:
                  token?.menu?.colorBgMenuItemSelected ||
                  defaultThemeColors(layout)[theme]['colorItemBgSelected'],
                itemActiveBg:
                  token?.menu?.colorBgMenuItemHover ||
                  defaultThemeColors(layout)[theme]['itemActiveBg'],
                horizontalItemSelectedBg:
                  token?.menu?.colorBgMenuItemSelected ||
                  defaultThemeColors(layout)[theme]['horizontalItemSelectedBg'],
                colorActiveBarWidth: 0,
                colorActiveBarHeight: 0,
                colorActiveBarBorderSize: 0,
                itemColor:
                  token?.menu?.colorTextMenu ||
                  defaultThemeColors(layout)[theme]['itemColor'],
                itemHoverColor:
                  token?.menu?.colorTextMenuActive ||
                  defaultThemeColors(layout)[theme]['itemHoverColor'],
                itemSelectedColor:
                  token?.menu?.colorTextMenuSelected ||
                  defaultThemeColors(layout)[theme]['itemSelectedColor'],
                colorBgElevated:
                  token?.menu?.colorBgMenuItemCollapsedElevated ||
                  defaultThemeColors(layout)[theme]['colorBgElevated'],
              },
            },
          }}
        >
          <Layout
            className={`antdp-basic-layouts ${props.className}`}
            style={style}
          >
            {render}
          </Layout>
        </ConfigProvider>
      </LayoutsProvider>
    </AuthorizedConfigProvider>
  );
};
export default BasicLayouts;
