import React from "react"
import { Outlet } from "react-router-dom"
import { Layout } from "antd"
import SiderMenus from "./sider"

const Layouts = () => {
  return <Layout>
    <SiderMenus />
    <Layout>
      <Layout.Content>
        <Outlet />
      </Layout.Content>
    </Layout>
  </Layout>
}
export default Layouts;