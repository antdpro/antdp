import React, { useMemo } from 'react';
import { Navigate } from "react-router-dom"
import {
  // FormatBtn as AuthorizedBtn,
  getFormatPage as getAuthorizedPage,
} from './format';
import { AuthButton as AuthorizedBtn } from "./AuthButton"
import { AuthorizedProps } from "./interface"
export * from "./hooks"
export * from "./AuthButton"
export * from "./interface"
export { AuthorizedBtn, getAuthorizedPage };

const Authorized = (props: AuthorizedProps) => {
  if (props.authority) {
    return <React.Fragment>
      {React.Children.map(props.children, (child) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child, { ...child.props });
      })}
    </React.Fragment>;
  }
  return useMemo(() => {
    if (props.redirectPath) {
      return <Navigate to={props.redirectPath} replace />;
    }
    return <React.Fragment>{props.children}</React.Fragment>
  }, [props.redirectPath]);
}
export default Authorized
