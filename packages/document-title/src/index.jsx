import React, { useEffect } from 'react';

export default (props = {}) => {
  useEffect(() => {
    document.title = props.title || '';
  }, [props.title]);
  return React.Children.toArray(props.children).map((child) => {
    if (!React.isValidElement(child)) return null;
    return React.cloneElement(child, { ...(child.props || {}) });
  });
};
