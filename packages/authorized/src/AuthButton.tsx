import { useAuthorizedonfig } from "./hooks"
import React, { useMemo } from "react";
import { AuthList } from "./interface"
export interface AuthButtonProps {
  path?: string
  children?: React.ReactNode;
}
export const AuthButton = (props: AuthButtonProps) => {
  const { path, children } = props
  const { auth_btn, auth_check_url, isCheckAuth } = useAuthorizedonfig()

  const authBtns: AuthList = useMemo(() => {
    const authBtnStr = sessionStorage.getItem(auth_btn || "")
    if (authBtnStr) {
      return JSON.parse(authBtnStr)
    }
    return []
  }, [JSON.stringify({ auth_btn, auth_check_url })])

  const checkPath = useMemo(() => {
    if (!isCheckAuth) {
      return true
    }
    if (auth_check_url) {
      return !!authBtns.find(ite => (ite as any)[auth_check_url] === path)
    } else {
      return !!authBtns.find(ite => ite === path)
    }
  }, [authBtns, path, isCheckAuth])

  if (!path || !isCheckAuth || checkPath) {
    return <React.Fragment>{children}</React.Fragment>
  }
  return <React.Fragment />
}

/**
 * 判断按钮路径是否有权限
*/
export const getAuthButton = (path: string, other: { auth_btn?: string, auth_check_url?: string } = {}) => {
  const { auth_btn, auth_check_url } = other || {}
  const authBtns = (): AuthList => {
    let newAuthBtn = auth_btn;
    if (!newAuthBtn) {
      if (typeof ANTD_AUTH_CONF === "boolean") {
        newAuthBtn = ""
      } else {
        newAuthBtn = (ANTD_AUTH_CONF as any).auth_btn
      }
    }
    const authBtnStr = sessionStorage.getItem(newAuthBtn || "")
    if (authBtnStr) {
      return JSON.parse(authBtnStr)
    }
    return []
  }
  const checkPath = () => {
    let newCheckUrl = auth_check_url || "";
    if (!newCheckUrl) {
      if (typeof ANTD_AUTH_CONF === "boolean") {
        newCheckUrl = ""
      } else {
        newCheckUrl = (ANTD_AUTH_CONF as any).auth_check_url
      }
    }
    if (newCheckUrl) {
      return !!authBtns().find(ite => (ite as any)[newCheckUrl] === path)
    } else {
      return !!authBtns().find(ite => ite === path)
    }
  }

  return checkPath()
}