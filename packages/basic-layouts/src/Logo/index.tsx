import React, { useMemo } from 'react';
// @ts-ignore
import { Link } from '@umijs/max';
import { useLayouts } from '../hooks';
import { LayoutModel } from '../interface';

interface LogoProps {
  logoJumpTo?: string;
  logo?: string;
  projectName?: string;
}

const Logo = (props: LogoProps) => {
  const { collapsed, logo, projectName, layout, siderWidth = 260 } = useLayouts();
  const { logoJumpTo = '/' } = props;

  const logoRender = useMemo(
    () => logo && <img src={logo} alt="logo" />,
    [logo],
  );

  const name = useMemo(() => {
    if (layout === LayoutModel.SLIDER && collapsed) {
      return null;
    }
    return projectName && <h1>{projectName}</h1>;
  }, [projectName, collapsed, layout]);

  return useMemo(
    () => (
      <div
        style={{ width: (layout === LayoutModel.SLIDER && collapsed) ? 80 : siderWidth }}
        className={`antdp-global-title antdp-global-title-top ${(layout === LayoutModel.SLIDER && 'antdp-global-title-left') || ''
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
