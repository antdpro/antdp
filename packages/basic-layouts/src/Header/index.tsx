import { Divider } from 'antd';
import React from 'react';
import HeaderMenus from '../HeaderMenus';
import Logo from '../Logo';
import TopRight from '../TopRight';

const Header = () => {
  return (
    <div className="antdp-basic-layouts-header-body">
      <Logo />
      <Divider type="vertical" style={{ margin: 0, height: '60%' }} />
      <HeaderMenus />
      <TopRight />
    </div>
  );
};
export default Header;
