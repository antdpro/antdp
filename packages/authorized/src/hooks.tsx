import React, { createContext, useContext } from 'react';
export interface AuthorizedConfigProviderProps {
  auth_menu?: string,
  auth_btn?: string,
  auth_check_url?: string,
  isCheckAuth?: boolean
  children?: React.ReactNode
}
const AuthorizedConfigContext = createContext<Omit<AuthorizedConfigProviderProps, "children">>({
  auth_menu: "authMenu",
  auth_btn: "authBtn",
  auth_check_url: "menuUrl",
  isCheckAuth: false,
})

export const AuthorizedConfigProvider = (props: AuthorizedConfigProviderProps) => {
  const {
    children,
    auth_menu = "authMenu",
    auth_btn = "authBtn",
    auth_check_url,
    isCheckAuth = false,
  } = props
  const newAuth_check_url = React.useMemo(() => Reflect.has(props, "auth_check_url") ? props.auth_check_url : "menuUrl", [auth_check_url])

  return (
    <AuthorizedConfigContext.Provider value={{ auth_menu, auth_btn, auth_check_url: newAuth_check_url, isCheckAuth }} >
      {children}
    </AuthorizedConfigContext.Provider>
  )
}
export const useAuthorizedonfig = () => useContext(AuthorizedConfigContext)
