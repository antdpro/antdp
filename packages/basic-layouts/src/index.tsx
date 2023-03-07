import React, { useMemo } from "react";
import { Layout } from "antd"
import SiderMenus from "./Sider";
import Header from "./Header"
import WarpContent from "./Content"
import { BasicLayoutsProps } from "./interface"
import { LayoutsProvider } from "./hooks"
import "./index.css"

const BasicLayouts = (props: BasicLayoutsProps) => {
  const {
    route: { routes = [] } = {}
  } = props

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

  return <LayoutsProvider  {...props} routes={routes} >
    <Layout className="antdp-basic-layouts">
      {render}
    </Layout>
  </LayoutsProvider>
}
export default BasicLayouts