import React, { useMemo } from 'react';
import { Redirect } from 'umi';

export default (props = {}) => {
  if (props.authority) {
    return React.Children.map(props.children, (child) => {
      if (!React.isValidElement(child)) return child;
      return React.cloneElement(child, { ...child.props });
    });
  }
  return useMemo(() => {
    if (location.pathname) {
      return <Redirect to={location.pathname} />;
    }
  }, [location.pathname]);
};
