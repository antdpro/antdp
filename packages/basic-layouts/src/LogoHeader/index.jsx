import React, { useMemo } from 'react';
import { Link } from 'umi';

export default (props = {}) => {
  const logo = useMemo(
    () => props.logo && <img src={props.logo} alt="logo" />,
    [props.logo],
  );
  const name = useMemo(
    () => props.projectName && <h1>{props.projectName}</h1>,
    [props.projectName],
  );

  return useMemo(
    () => (
      <div className="antdp-global-title">
        <Link to="/">
          {logo}
          {!props.collapsed && name}
        </Link>
      </div>
    ),
    [props.collapsed],
  );
};
