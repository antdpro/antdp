import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Menu, MenuProps } from 'antd';
import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useLayouts } from '../hooks';
import { RouterMenu } from '../interface';
import { getSiderMenus } from '../utils';

export interface SiderProps extends MenuProps {
  menus?: RouterMenu[];
}

const Sider = (props: SiderProps) => {
  const location = useLocation();
  const {
    HandleMenu,
    collapsed,
    siderWidth = 260,
    setCollapsed,
  } = useLayouts();

  const collapsedView = useMemo(
    () =>
      React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        style: { fontSize: 20, marginTop: 13 },
        onClick: () => setCollapsed(!collapsed),
      }),
    [collapsed],
  );

  const menus = HandleMenu.getSiderMenus(location.pathname);
  const items = useMemo(() => {
    return getSiderMenus(menus, !!ANTD_MENU_TOP_LEFT);
  }, [menus]);
  if (!items.length) {
    return <React.Fragment />;
  }

  return (
    <Layout.Sider
      className="antdp-basic-layouts-sider"
      collapsible
      width={siderWidth}
      collapsed={collapsed}
      theme="light"
      onCollapse={(value) => {
        setCollapsed(value);
      }}
      trigger={
        <div className="antdp-basic-layouts-collapsed">{collapsedView}</div>
      }
    >
      <Menu
        {...props}
        selectedKeys={[location.pathname]}
        defaultSelectedKeys={[location.pathname]}
        defaultOpenKeys={[location.pathname]}
        mode="inline"
        theme="light"
        items={items}
        style={{ width: '100%' }}
      />
    </Layout.Sider>
  );
};
export default Sider;
