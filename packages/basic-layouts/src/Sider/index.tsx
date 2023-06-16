import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Menu, MenuProps } from 'antd';
import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useLayouts } from '../hooks';
import { LayoutModel, RouterMenu } from '../interface';
import { getSiderMenus } from '../utils';
import Logo from './../Logo';

export interface SiderProps extends MenuProps {
  theme: 'light' | 'dark';
  menus?: RouterMenu[];
  menuProps?: MenuProps;
}

const Sider = (props: SiderProps) => {
  const { theme, menuProps } = props;
  const location = useLocation();
  const {
    HandleMenu,
    collapsed,
    siderWidth = 260,
    setCollapsed,
    layout,
    defultOpenMenus,
  } = useLayouts();
  const [defaultOpenKeys, setDefaultOpenKeys] = useState<string[]>([]);
  useEffect(() => {
    const keys = localStorage.getItem('defaultOpenKeys');
    if (keys !== null) {
      setDefaultOpenKeys(JSON.parse(keys));
    }
  }, []);

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
    const keys = localStorage.getItem('defaultOpenKeys');
    if (keys !== null && defultOpenMenus) {
      setDefaultOpenKeys(JSON.parse(keys));
    }
    return getSiderMenus(menus, layout === LayoutModel.TOPLEFT);
  }, [menus, layout]);

  if (!items.length) {
    return <React.Fragment />;
  }
  return (
    <Layout.Sider
      className="antdp-basic-layouts-sider"
      collapsible
      width={siderWidth}
      collapsed={collapsed}
      theme={theme}
      onCollapse={(value) => {
        setCollapsed(value);
      }}
      trigger={
        <div className="antdp-basic-layouts-collapsed">{collapsedView}</div>
      }
    >
      {layout === LayoutModel.SLIDER && <Logo />}
      <div
        style={{
          flex: '1 1 0%',
          overflow: 'hidden auto',
        }}
      >
        <Menu
          theme={theme}
          selectedKeys={[location.pathname]}
          defaultSelectedKeys={[location.pathname]}
          defaultOpenKeys={defaultOpenKeys}
          mode="inline"
          items={items}
          style={{ width: '100%' }}
          onOpenChange={(keys) => {
            if (defultOpenMenus) {
              setDefaultOpenKeys(keys);
              localStorage.setItem('defaultOpenKeys', JSON.stringify(keys));
            }
          }}
          {...menuProps}
        />
      </div>
    </Layout.Sider>
  );
};
export default Sider;
