
import { Outlet } from "react-router-dom"
import { Layout } from "antd"
import '@wcj/dark-mode';
import SiderMenus from "./sider";

const Layouts = () => {

  return (
    <Layout style={{ height: "100%" }} className="wmde-markdown-var" >
      <dark-mode permanent style={{ position: 'absolute', top: 10, right: 10, fontSize: 16 }} light="Light" dark="Dark"></dark-mode>
      <SiderMenus />
      <Layout>
        <Layout.Content style={{ height: "100%", overflowY: "hidden" }}>
          <Outlet />

        </Layout.Content>
      </Layout>
    </Layout>
  );
}
export default Layouts;