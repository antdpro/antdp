import React, { useMemo } from 'react';
import { Link } from 'umi';
import { useLayouts } from "../hooks"

interface LogoProps {
  logoJumpTo?: string
  logo?: string
  projectName?: string
}

const Logo = (props: LogoProps) => {
  const { collapsed, logo, projectName, siderWidth = 260 } = useLayouts()
  const { logoJumpTo = '/' } = props;

  const logoRender = useMemo(
    () => logo && <img src={logo} alt="logo" />,
    [logo],
  );

  const name = useMemo(
    () => projectName && <h1>{projectName}</h1>,
    [projectName],
  );

  return useMemo(
    () => (
      <div
        style={!collapsed && { width: siderWidth } || {}}
        className={`antdp-global-title 
          ${ANTD_TITLE_TOP ? 'antdp-global-title-top' : 'antdp-global-title-h1'}
        `}
      >
        <Link to={logoJumpTo}>
          {logoRender}
          {!collapsed && name}
        </Link>
      </div>
    ),
    [collapsed],
  );
};

export default Logo