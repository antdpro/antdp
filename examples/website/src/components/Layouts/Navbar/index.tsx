import { FC, PropsWithRef } from 'react';
import { Link, useLocation } from '@kkt/pro';
import { GithubOutlined } from '@ant-design/icons'
import { ReactComponent as ReactLogo } from '@/assets/logo.svg';
import {
  Wrapper,
  Left,
  Right,
  Logo,
  HeaderTools,
  Title,
  Version,
  LinkMenu,
  AMenu,
} from './style';

interface NavbarProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > { }

const Navbar: FC<PropsWithRef<NavbarProps>> = (props) => {
  const { pathname } = useLocation()
  return (
    <Wrapper isHome={pathname === '/home'}>
      <Left>
        <Logo to="/">
          <ReactLogo width={28} height={28} />
          <Title>
            Antd Project<Version>{VERSION}</Version>
          </Title>
        </Logo>
      </Left>
      <Right>
        <LinkMenu to="/home">首页</LinkMenu>
        <AMenu
          href="https://stackblitz.com/github/antdpro/antdp/tree/master/examples/antdp-example?embed=1&hideNavigation=0&hidedevtools=0"
          target="__blank"
        >
          实例预览
        </AMenu>
        <LinkMenu to="/docs">教程</LinkMenu>
        <LinkMenu to="/components">组件</LinkMenu>
        <LinkMenu to="https://raw.githack.com/antdpro/antdp/v1-doc/index.html#/">
          v1.x
        </LinkMenu>
        <HeaderTools>
          <dark-mode permanent></dark-mode>
        </HeaderTools>
        <Link
          to="https://github.com/antdpro/antdp"
          target="_blank"
          style={{ color: 'var(--color-fg-default)' }}
        >
          <GithubOutlined />
        </Link>
      </Right>
    </Wrapper>
  );
};

export default Navbar;
