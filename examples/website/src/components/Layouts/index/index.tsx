import { Outlet, KktproPageProps, useLocation } from '@kkt/pro';
import Menu from '../Menu';
import Navbar from '../Navbar';
import { Wrapper, Main, Body } from './style';
import React, { useState, useEffect } from 'react'
import { ConfigProvider, theme } from 'antd'
import '@wcj/dark-mode';
import HomeFooter from './HomeFooter';

export default function Layout(props: KktproPageProps) {
  const { pathname } = useLocation();
  const [data_theme, setDataTheme] = useState('light')

  useEffect(() => {
    document.addEventListener('colorschemechange', (e) => {
      setDataTheme(e.detail.colorScheme)
    });
  }, []);

  return (
    <Wrapper className="wmde-markdown-var">
      <Navbar />
      <ConfigProvider
        theme={{
          algorithm: data_theme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
        }}
      >
        <Main isHome={pathname === "/home"}>
          <Body>
            {pathname === '/home' ? (
              <div style={{ paddingTop: 58, height: '100%' }}>
                <Outlet />
              </div>
            ) : (
              <React.Fragment>
                <Menu />
                <div style={{ paddingLeft: 240, paddingTop: 58, height: '100%' }}>
                  <Outlet />
                </div>
              </React.Fragment>
            )}
          </Body>
          {pathname === '/home' && <HomeFooter />}
        </Main>
      </ConfigProvider>
    </Wrapper >
  );
}
