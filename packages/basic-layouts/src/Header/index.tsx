import React from 'react';
import HeaderMenus from '../HeaderMenus';
import Logo from '../Logo';
import TopRight from '../TopRight';
import { useLayouts } from '../hooks';
import { LayoutModel } from '../interface';

const Header = () => {
  const { layout } = useLayouts()

  return (
    <div className="antdp-basic-layouts-header-body">
      {layout !== LayoutModel.SLIDER && <Logo />}
      <HeaderMenus />
      <TopRight />
    </div>
  );
};
export default Header;
