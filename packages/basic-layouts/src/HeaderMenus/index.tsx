import React, { useMemo } from "react";
import { Menu, } from "antd"
import { useLocation, } from 'react-router-dom';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { getSiderMenus } from "../utils"
import { useLayouts } from "../hooks"
import Breadcrumbs from "./../Breadcrumb"

const HeaderMenus = () => {
  const location = useLocation()
  const { HandleMenu, collapsed, setCollapsed } = useLayouts()
  const menus = HandleMenu.parentMenu || []
  const items = useMemo(() => {
    return getSiderMenus(menus)
  }, [menus])

  const parentPath = HandleMenu.getParentPath(location.pathname)

  const collapsedView = useMemo(
    () => React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
      className: 'trigger',
      onClick: () => setCollapsed(!collapsed),
    }), [collapsed]);

  if (!items.length) {
    return <div className="antdp-basic-layouts-header-menus" style={{ flex: 1, overflow: "auto" }} >
      <div className="antdp-basic-layouts-collapsed">{collapsedView}</div>
      <Breadcrumbs />
    </div>
  }

  return <div className="antdp-basic-layouts-header-menus" style={{ flex: 1, overflow: "auto" }}  >
    <Menu
      selectedKeys={[parentPath]}
      mode="horizontal"
      theme="light"
      items={items}
      style={{ width: '95%' }}
    />
  </div>
}
export default HeaderMenus