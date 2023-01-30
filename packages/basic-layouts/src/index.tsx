import React from "react";
import { Layout } from "antd"
import SiderMenus from "./Sider";
import Header from "./Header"
import WarpContent from "./Content"
import { BasicLayoutsProps } from "./interface"
import { LayoutsProvider } from "./hooks"
import "./index.css"

const BasicLayouts = (props: BasicLayoutsProps) => {
  const {
    intlLanguage,
    route: { routes = [] } = {}
  } = props

  return <LayoutsProvider  {...props} routes={routes} intlLanguage={intlLanguage} >
    <Layout className="antdp-basic-layouts">
      <Layout.Header className="antdp-basic-layouts-header" >
        <Header />
      </Layout.Header>
      <Layout>
        <SiderMenus />
        <Layout.Content className="antdp-basic-layouts-content"  >
          <WarpContent />
        </Layout.Content>
      </Layout>
    </Layout>
  </LayoutsProvider>
}
export default BasicLayouts