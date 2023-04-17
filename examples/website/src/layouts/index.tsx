
import { Outlet } from "react-router-dom"
import { Layout } from "antd"
import '@wcj/dark-mode';
import SiderMenus from "./sider"
import Header from "./header";

const Layouts = () => {

  return (
    <Layout style={{ height: "100%" }} className="wmde-markdown-var" >
      <Header />
      <Layout>
        <SiderMenus />
        <Layout.Content style={{ height: "100%", overflowY: "hidden" }}>
          <Outlet />
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
export default Layouts;