
import React from 'react'
import { Layout, Col, Row, Menu } from "antd"
import { Link, useLocation } from "react-router-dom"
import '@wcj/dark-mode';
import styled from "styled-components";
import ReactLogo from '../assets/logo.svg';
import { routesConfig } from '../route'
import { GithubOutlined } from '@ant-design/icons'

const Sup = styled.sup`
  font-size: 12px;
  color: #3387ffab;
  padding-left:8px;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

const Header = () => {
  const { pathname = '' } = useLocation()
  const [current, setCurrent] = React.useState('1');
  const routes = routesConfig[0]?.children || [];
  const datas = routes || []

  React.useEffect(() => {
    const index = datas.findIndex(item => item.path === '/' + pathname.split('/')[1])
    setCurrent(index.toString());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, JSON.stringify(datas)])

  return (
    <Layout.Header>
      <Row>
        <Col span={4}>
          <Link to="/" className="logo" style={{ padding: 0 }}>
            <img src={ReactLogo} width={28} height={28} alt="logo" />
            <span>
              Antd Project
              <Sup>{VERSION}</Sup>
            </span>
          </Link>
        </Col>
        <Col span={20}>
          <MenuContainer>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[current]}
              selectedKeys={[current]}
              onClick={(e) => setCurrent(e.key)}
              items={datas.map((item, key) => {
                if (!item.label) return null;
                return {
                  label: (
                    <Link to={`${item.path || ''}`} key={key}>
                      {item.label}
                    </Link>
                  ),
                  key: key.toString()
                }
              })}
            />
            <a target="__blank" href="https://github.com/antdpro/antdp">
              <GithubOutlined style={{ fontSize: 18, marginLeft: 12, color: '#fff' }} />
            </a>
            <dark-mode permanent style={{ display: "flex", marginLeft: 12, fontSize: 16, color: '#fff' }} light="Light" dark="Dark"></dark-mode>
          </MenuContainer>
        </Col>
      </Row>
    </Layout.Header>
  );
}
export default Header;