import React, { useMemo } from "react";
import { Layout } from "antd"
import SiderMenus from "./Sider";
import Header from "./Header"
import WarpContent from "./Content"
import { BasicLayoutsProps } from "./interface"
import { LayoutsProvider } from "./hooks"
import "./index.css"
export * from "./hooks"
export * from "./utils"
export { default as Breadcrumb } from "./Breadcrumb"
export * from "./Breadcrumb"
export { default as WarpContent } from "./Content"
export * from "./Content"
export { default as Header } from "./Header"
export * from "./Header"
export { default as HeaderMenus } from "./HeaderMenus"
export * from "./HeaderMenus"
export { default as Logo } from "./Logo"
export * from "./Logo"
export { default as Sider } from "./Sider"
export * from "./Sider"
export { default as TopRight } from "./TopRight"

const BasicLayouts = (props: BasicLayoutsProps) => {
  const render = useMemo(() => {
    if (!!ANTD_MENU_TOP_LEFT) {
      return <React.Fragment>
        {ANTD_HEAD_IS_SHOW && <Layout.Header className="antdp-basic-layouts-header" >
          <Header />
        </Layout.Header>}
        <Layout>
          {ANTD_MENU_IS_SHOW && <SiderMenus />}
          <Layout.Content className="antdp-basic-layouts-content"  >
            <WarpContent />
          </Layout.Content>
        </Layout>
      </React.Fragment>
    } else {
      return <React.Fragment>
        {ANTD_MENU_IS_SHOW && <SiderMenus />}
        <Layout>
          {ANTD_HEAD_IS_SHOW && <Layout.Header className="antdp-basic-layouts-header" >
            <Header />
          </Layout.Header>}
          <Layout.Content className="antdp-basic-layouts-content"  >
            <WarpContent />
          </Layout.Content>
        </Layout>
      </React.Fragment>
    }
  }, [])

  return <LayoutsProvider  {...props}  >
    <Layout className="antdp-basic-layouts">
      {render}
    </Layout>
  </LayoutsProvider>
}
export default BasicLayouts