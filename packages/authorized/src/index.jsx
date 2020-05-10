import React, { useEffect } from 'react';
import { history } from 'umi';

export default (props = {}) => {
  if (props.authority) {
    return React.Children.map(props.children, (child) => {
      if (!React.isValidElement(child)) return child;
      return React.cloneElement(child, { ...child.props });
    });
  }
  useEffect(() => {
    if (props.redirectPath) {
      history.push(props.redirectPath);
    }
  });
  return null;
};
