import { Menu } from 'antd';
import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useLayouts } from '../hooks';
import { getSiderMenus } from '../utils';
import Breadcrumbs from './../Breadcrumb';

const HeaderMenus = () => {
  const location = useLocation();
  const { HandleMenu } = useLayouts();
  const menus = HandleMenu.parentMenu || [];

  const items = useMemo(() => {
    return getSiderMenus(menus, !!ANTD_MENU_TOP_LEFT);
  }, [menus]);

  const parentPath = HandleMenu.getParentPath(location.pathname);

  if (!items.length) {
    return (
      <div
        className="antdp-basic-layouts-header-menus"
        style={{ flex: 1, overflow: 'auto' }}
      >
        {ANTD_IS_BREADCRUMB && <Breadcrumbs />}
      </div>
    );
  }

  return (
    <div
      className="antdp-basic-layouts-header-menus"
      style={{ flex: 1, overflow: 'auto' }}
    >
      <Menu
        selectedKeys={[parentPath]}
        mode="horizontal"
        theme="light"
        items={items}
        style={{ width: '95%' }}
      />
    </div>
  );
};
export default HeaderMenus;
