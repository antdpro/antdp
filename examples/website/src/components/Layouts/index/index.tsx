import { Outlet, KktproPageProps, useLocation } from '@kkt/pro';
import Menu from '../Menu';
import Navbar from '../Navbar';
import { Wrapper, Main, Body } from './style';
import React from 'react'
import '@wcj/dark-mode';

export default function Layout(props: KktproPageProps) {
  const { pathname } = useLocation();
  return (
    <Wrapper className="wmde-markdown-var">
      <Navbar />
      <Main>
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
      </Main>
    </Wrapper>
  );
}
