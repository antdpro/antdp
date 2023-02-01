import React from "react"
import { Outlet } from "react-router-dom"
import { Layout } from "antd"
import SiderMenus from "./sider"

const Layouts = () => {
  return <Layout style={{ height: "100%" }} >
    <SiderMenus />
    <Layout>
      <Layout.Content style={{ height: "100%", overflow: "auto" }}>
        <Outlet />
      </Layout.Content>
    </Layout>
  </Layout>
}
export default Layouts;