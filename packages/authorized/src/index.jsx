import React, { useMemo } from 'react';
import { Redirect } from 'umi';
import { FormatBtn, getFormatPage } from './format';
export { FormatBtn as AuthorizedBtn, getFormatPage as getAuthorizedPage };

export default (props = {}) => {
  if (props.authority) {
    return React.Children.map(props.children, (child) => {
      if (!React.isValidElement(child)) return child;
      return React.cloneElement(child, { ...child.props });
    });
  }
  return useMemo(() => {
    if (props.redirectPath) {
      return <Redirect to={props.redirectPath} />;
    }
  }, [location.redirectPath]);
};
