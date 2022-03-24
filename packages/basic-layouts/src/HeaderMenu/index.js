import React from 'react';
import { Menu } from 'antd';
import Link from '../Menu/Link';
const HeaderMenu = (props) => {
  const { selectedKey = '', routes } = props;

  const getNavMenuItems = (menusData = []) => {
    if (!menusData) {
      return [];
    }

    return menusData
      .filter((item) => item.name && !item.hideInMenu)
      .sort((a, b) => a.order - b.order)
      .map((item) => {
        return (
          <Menu.Item key={item.path}>
            <Link path={item.path} name={item.name} icon={item.icon} />
          </Menu.Item>
        );
      })
      .filter((item) => item);
  };

  return (
    <Menu
      theme="light"
      mode="horizontal"
      onOpenChange={() => {}}
      selectedKeys={[selectedKey]}
      defaultOpenKeys={[]}
      style={{ width: '100%' }}
    >
      {getNavMenuItems(routes)}
    </Menu>
  );
};

export default HeaderMenu;
