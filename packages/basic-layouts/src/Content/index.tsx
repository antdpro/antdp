import React from "react";
import { useLocation, Navigate } from 'react-router-dom';
import LayoutTabs from '@antdp/layout-tabs';

import { useLayouts } from "../hooks"

const WarpContent = () => {
  const location = useLocation()
  const { HandleMenu, bodyPadding } = useLayouts()
  const paths = HandleMenu.getToPath(location.pathname)
  if (paths) {
    return <Navigate to={paths} replace />
  }
  return (
    <LayoutTabs
      bodyPadding={bodyPadding}
      dataSource={HandleMenu.flatMenu as any}
    />
  )
}
export default WarpContent