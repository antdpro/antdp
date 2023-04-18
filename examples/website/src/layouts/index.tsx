import { useState, useEffect } from 'react'
import { Outlet } from "react-router-dom"
import { Layout, ConfigProvider, theme } from "antd"
import '@wcj/dark-mode';
import SiderMenus from "./sider"
import Header from "./header";

const Layouts = () => {
  const [data_theme, setDataTheme] = useState('light')
  useEffect(() => {
    document.addEventListener('colorschemechange', (e) => {
      setDataTheme(e.detail.colorScheme)
    });
  }, []);
  return (
    <Layout style={{ height: "100%" }} className="wmde-markdown-var" >
      <Header />
      <Layout>
        <SiderMenus />
        <Layout.Content style={{ height: "100%", overflowY: "hidden" }}>
          <ConfigProvider
            theme={{
              algorithm: data_theme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
            }}
          >
              <Outlet />
          </ConfigProvider>
        </Layout.Content>
      </Layout>
    </Layout>
  );
}
export default Layouts;