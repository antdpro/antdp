import React from 'react';
import HeaderMenus from '../HeaderMenus';
import Logo from '../Logo';
import TopRight from '../TopRight';

const Header = () => {
  return (
    <div className="antdp-basic-layouts-header-body">
      <Logo />
      <HeaderMenus />
      <TopRight />
    </div>
  );
};
export default Header;
