import React, { useMemo } from 'react';
// @ts-ignore
import { Link } from '@umijs/max';
import { useLayouts } from '../hooks';

interface LogoProps {
  logoJumpTo?: string;
  logo?: string;
  projectName?: string;
}

const Logo = (props: LogoProps) => {
  const { collapsed, logo, projectName, siderWidth = 260 } = useLayouts();
  const { logoJumpTo = '/' } = props;

  const logoRender = useMemo(
    () => logo && <img src={logo} alt="logo" />,
    [logo],
  );

  const name = useMemo(() => {
    if (!!ANTD_MENU_SLIDER && collapsed) {
      return null;
    }
    return projectName && <h1>{projectName}</h1>;
  }, [projectName,collapsed]);

  return useMemo(
    () => (
      <div
        style={{ width: (!!ANTD_MENU_SLIDER && collapsed) ? 80 : siderWidth }}
        className={`antdp-global-title antdp-global-title-top ${
          (!!ANTD_MENU_SLIDER && 'antdp-global-title-left') || ''
        }`}
      >
        <Link to={logoJumpTo}>
          {logoRender}
          {name}
        </Link>
      </div>
    ),
    [collapsed],
  );
};

export default Logo;
