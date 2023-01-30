import React, { useMemo } from "react";
import { Menu, MenuProps, Layout } from "antd"
import { useLocation } from 'react-router-dom';
import { RouterMenu, } from "../interface"
import { getSiderMenus } from "../utils"
import { useLayouts } from "../hooks"

export interface SiderProps extends MenuProps {
  menus?: RouterMenu[]
}

const Sider = (props: SiderProps) => {
  const location = useLocation()
  const { HandleMenu, collapsed, siderWidth = 260 } = useLayouts()
  const menus = HandleMenu.getSiderMenus(location.pathname)
  const items = useMemo(() => {
    return getSiderMenus(menus, !ANTD_MENU_TOP_LEFT)
  }, [menus])
  if (!items.length) {
    return <React.Fragment />
  }

  return <Layout.Sider width={siderWidth} collapsed={collapsed} className="antdp-basic-layouts-sider" >
    <Menu
      {...props}
      selectedKeys={[location.pathname]}
      defaultSelectedKeys={[location.pathname]}
      defaultOpenKeys={[location.pathname]}
      mode="inline"
      theme="dark"
      items={items}
      style={{ width: '100%' }}
      inlineCollapsed={collapsed}
    />
  </Layout.Sider>

}
export default Sider