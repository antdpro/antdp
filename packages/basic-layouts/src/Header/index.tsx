import React from "react";
import TopRight from "../TopRight"
import Logo from "../Logo";
import HeaderMenus from "../HeaderMenus"

const Header = () => {
  return <div className="antdp-basic-layouts-header-body">
    <Logo />
    <HeaderMenus />
    <TopRight />
  </div>
}
export default Header