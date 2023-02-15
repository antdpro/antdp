import React from 'react';
import Icon, {
  AntDesignOutlined,
  HomeFilled,
  CodeSandboxOutlined,
  LockFilled,
  ControlFilled,
  LoadingOutlined,
  LayoutFilled,
  FontSizeOutlined,
  FullscreenOutlined,
  UserOutlined,
  SelectOutlined,
  OneToOneOutlined,
} from '@ant-design/icons';
import { useRoutes } from 'react-router-dom';
import { IndexRouteObject, NonIndexRouteObject, RouteObject } from 'react-router-dom';

import TabSvg from "./assets/icon/TabSvg"

import Layouts from "./layouts"
import Home from "./pages/antdp"
import CreateAntdp from "./pages/create-antdp"
import Example from "./pages/example"
import BasicLayouts from "./pages/basic-layouts"
import Authorized from "./pages/authorized"
import Config from "./pages/config"
import DocumentTitle from "./pages/document-title"
import LayoutTabs from "./pages/layout-tabs"
import Fullscreen from "./pages/fullscreen"
import UserLogin from "./pages/user-login"
import PageLoading from "./pages/page-loading"
import ButtonGroupPro from "./pages/antdp-ui/buttongrouppro"
import QuickForm from "./pages/antdp-ui/quickform"
import CardPro from "./pages/antdp-ui/cardpro"
import FormDetail from "./pages/antdp-ui/formdetail"
import InputCount from "./pages/antdp-ui/inputcount"
import UploadGrid from "./pages/antdp-ui/uploadgrid"
import EditTable from "./pages/edit-table"
import FuzzyQuery from "./pages/fuzzy-query"


interface IndexRouteObjects extends Omit<IndexRouteObject, "index"> {
  name?: React.ReactNode
  icon?: React.ReactNode
  index?: boolean
}
export interface NonIndexRouteObjects extends Omit<NonIndexRouteObject, "index" | 'children'> {
  name?: React.ReactNode
  icon?: React.ReactNode
  index?: boolean
  children?: NonIndexRouteObjects[]
}

type RoutesType = IndexRouteObjects | NonIndexRouteObjects

export const routesConfig: RoutesType[] = [
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        index: true,
        path: '/',
        name: 'Home',
        icon: <HomeFilled />,
        element: <Home />
      },
      {
        path: '/create-antdp',
        name: '快速开始',
        icon: <AntDesignOutlined />,
        element: <CreateAntdp />
      },
      {
        path: '/example',
        name: '实例预览',
        icon: <CodeSandboxOutlined />,
        element: <Example />
      },
      {
        path: '/basic-layouts',
        name: 'BasicLayouts',
        icon: <LayoutFilled />,
        element: <BasicLayouts />
      },
      {
        path: '/authorized',
        name: 'Authorized',
        icon: <LockFilled />,
        element: <Authorized />
      },
      {
        path: '/config',
        name: 'Config',
        icon: <ControlFilled />,
        element: <Config />
      },
      {
        path: '/document-title',
        name: 'Document Title',
        icon: <FontSizeOutlined />,
        element: <DocumentTitle />,
      },
      {
        path: '/layout-tabs',
        name: 'Layout Tabs',
        icon: <Icon component={TabSvg} />,
        element: <LayoutTabs />
      },
      {
        path: '/fullscreen',
        name: 'Fullscreen',
        icon: <FullscreenOutlined />,
        element: <Fullscreen />
      },
      {
        path: '/user-login',
        name: 'User Login',
        icon: <UserOutlined />,
        element: <UserLogin />
      },
      {
        path: '/page-loading',
        name: 'Page Loading',
        icon: <LoadingOutlined />,
        element: <PageLoading />
      },
      {
        path: '/antdp-ui',
        name: 'Antdp Ui',
        icon: <SelectOutlined />,
        children: [
          {
            path: '/antdp-ui/buttongrouppro',
            name: 'ButtonGroupPro',
            icon: <OneToOneOutlined />,
            element: <ButtonGroupPro />
          },
          {
            path: '/antdp-ui/quickform',
            name: 'QuickForm',
            icon: <OneToOneOutlined />,
            element: <QuickForm />
          },
          {
            path: '/antdp-ui/cardpro',
            name: 'CardPro',
            icon: <OneToOneOutlined />,
            element: <CardPro />
          },
          {
            path: '/antdp-ui/formdetail',
            name: 'FormDetail',
            icon: <OneToOneOutlined />,
            element: <FormDetail />
          },
          {
            path: '/antdp-ui/inputcount',
            name: 'InputCount',
            icon: <OneToOneOutlined />,
            element: <InputCount />
          },
          {
            path: '/antdp-ui/uploadgrid',
            name: 'UploadGrid',
            icon: <OneToOneOutlined />,
            element: <UploadGrid />
          },
        ],
      },
      {
        path: '/edit-table',
        name: 'Edit-table',
        icon: <OneToOneOutlined />,
        element: <EditTable />
      },
      {
        path: '/fuzzy-query',
        name: 'fuzzy-query',
        icon: <OneToOneOutlined />,
        element: <FuzzyQuery />
      },
    ]
  }
]

const Routes = () => {
  const getRoots = (routes: RoutesType[]) => {
    return routes.map((item) => {
      const { name, icon, ...rest } = item
      let newItem = { ...rest }
      if (item.children) {
        newItem.children = getRoots(item.children)
      }
      return newItem
    })
  }
  return useRoutes(getRoots(routesConfig) as RouteObject[]);
};
export default Routes;