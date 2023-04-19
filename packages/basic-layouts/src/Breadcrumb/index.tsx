import React, { useMemo } from "react";
import { Breadcrumb } from "antd"
import { useLocation, Link } from 'react-router-dom';
import { useLayouts } from "./../hooks"

const Breadcrumbs = () => {
  const location = useLocation()
  const { HandleMenu } = useLayouts()

  const breadcrumbMenu = useMemo(() => {
    return (
      HandleMenu.getBreadcrumb(location.pathname).map((item, index) => {
        let child: React.ReactNode = item.name
        if (item.side && item.path && ANTD_MENU_TOP_LEFT) {
          child = <Link to={item.path} >{item.name}</Link>
        }
        return { title: child, key: index }
      })
    )
  }, [location.pathname])
  return (
    <Breadcrumb className="antdp-basic-layouts-header-breadcrumb" items={breadcrumbMenu} />
  )
}
export default Breadcrumbs