import React, { Fragment, useEffect } from 'react';

export interface DocumentTitle {
  title?: string;
  children?: React.ReactNode;
}

export default (props: DocumentTitle = {}) => {
  useEffect(() => {
    document.title = props.title || '';
  }, [props.title]);
  return <Fragment>
    {React.Children.toArray(props.children).map((child) => {
      if (!React.isValidElement(child)) return null;
      return React.cloneElement(child, { ...(child.props || {}) });
    })}
  </Fragment>;
};
