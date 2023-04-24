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
  CloudUploadOutlined,
  FileAddOutlined
} from '@ant-design/icons';
import { useRoutes,IndexRouteObject, NonIndexRouteObject, RouteObject, Outlet, Navigate } from 'react-router-dom';

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
import UpdateLog from './pages/update'
import ChangeLog from './pages/change-log'
import NewPage from './pages/develop/newPage'
import Request from './pages/develop/request'
import Proxy from './pages/develop/proxy'
import Css from './pages/develop/css'
import Mock from './pages/develop/mock'

interface IndexRouteObjects extends Omit<IndexRouteObject, "index"> {
  name?: React.ReactNode
  icon?: React.ReactNode
  index?: boolean
  label?: string;
  Component?: any
  target?:string
}
export interface NonIndexRouteObjects extends Omit<NonIndexRouteObject, "index" | 'children'> {
  name?: React.ReactNode
  icon?: React.ReactNode
  index?: boolean
  children?: NonIndexRouteObjects[]
  label?: React.ReactNode
  Component?: any
  target?:string
}

export type RoutesType = IndexRouteObjects | NonIndexRouteObjects 

export const routesConfig: RoutesType[] = [
  {
    path: '/',
    Component: Outlet,
    children: [
      {
        index: true,
        element: <Navigate to="/home/home" replace />,
      },
      {
        path: '/home',
        label: '研发',
        element: <Layouts />,
        children: [
          {
            index: true,
            element: <Navigate to="/home/home" replace />,
          },
          {
            path: '/home/home',
            name: '首页',
            icon: <HomeFilled />,
            element: <Home />
          },
          {
            path: '/home/create-antdp',
            name: '快速开始',
            icon: <AntDesignOutlined />,
            element: <CreateAntdp />
          },
          {
            path: '/home/example',
            name: '实例预览',
            icon: <CodeSandboxOutlined />,
            element: <Example />
          },
          {
            path: '/home/log',
            name: '从v1 到 v2',
            icon:<CloudUploadOutlined />,
            element: <UpdateLog />
          },
          {
            name: '页面开发',
            icon:<FileAddOutlined />,
            children: [
              {
                path: '/home/develop/newpages',
                name: '新增页面',
                icon: <FileAddOutlined />,
                element: <NewPage />
              },
              {
                path: '/home/develop/css',
                name: '样式',
                icon: <FileAddOutlined />,
                element: <Css />
              },
              {
                path: '/home/develop/request',
                name: '请求',
                icon: <FileAddOutlined />,
                element: <Request />
              },
              {
                path: '/home/develop/mock',
                name: 'Mock',
                icon: <FileAddOutlined />,
                element: <Mock />
              },
              {
                path: '/home/develop/proxy',
                name: '代理',
                icon: <FileAddOutlined />,
                element: <Proxy />
              },
            ]
          },
          {
            path: '/home/change-log',
            name: '更新日志',
            icon:<CloudUploadOutlined />,
            element: <ChangeLog />
          },
          {
            name: 'umijs',
            icon: <AntDesignOutlined />,
            target:'https://umijs.org/docs/introduce/introduce'
          },
        ]
      },
      {
        label: '组件依赖',
        path: '/components',
        element: <Layouts />,
        children: [
          {
            index: true,
            element: <Navigate to="/components/user-login" replace />,
          },
          {
            path: '/components/user-login',
            name: 'User Login',
            icon: <UserOutlined />,
            element: <UserLogin />
          },
          {
            path: '/components/page-loading',
            name: 'Page Loading',
            icon: <LoadingOutlined />,
            element: <PageLoading />
          },
          {
            path: '/components/document-title',
            name: 'Document Title',
            icon: <FontSizeOutlined />,
            element: <DocumentTitle />,
          },
          {
            path: '/components/fullscreen',
            name: 'Fullscreen',
            icon: <FullscreenOutlined />,
            element: <Fullscreen />
          },
          {
            path: '/components/basic-layouts',
            name: 'BasicLayouts',
            icon: <LayoutFilled />,
            element: <BasicLayouts />
          },
          {
            path: '/components/layout-tabs',
            name: 'Layout Tabs',
            icon: <Icon component={TabSvg} />,
            element: <LayoutTabs />
          },
          {
            path: '/components/authorized',
            name: 'Authorized',
            icon: <LockFilled />,
            element: <Authorized />
          },
          {
            path: '/components/config',
            name: 'Config',
            icon: <ControlFilled />,
            element: <Config />
          },
          {
            name: 'Antdp Ui',
            icon: <SelectOutlined />,
            children: [
              {
                path: '/components/antdp-ui/buttongrouppro',
                name: 'ButtonGroupPro',
                icon: <OneToOneOutlined />,
                element: <ButtonGroupPro />
              },
              {
                path: '/components/antdp-ui/quickform',
                name: 'QuickForm',
                icon: <OneToOneOutlined />,
                element: <QuickForm />
              },
              {
                path: '/components/antdp-ui/cardpro',
                name: 'CardPro',
                icon: <OneToOneOutlined />,
                element: <CardPro />
              },
              {
                path: '/components/antdp-ui/formdetail',
                name: 'FormDetail',
                icon: <OneToOneOutlined />,
                element: <FormDetail />
              },
              {
                path: '/components/antdp-ui/inputcount',
                name: 'InputCount',
                icon: <OneToOneOutlined />,
                element: <InputCount />
              },
              {
                path: '/components/antdp-ui/uploadgrid',
                name: 'UploadGrid',
                icon: <OneToOneOutlined />,
                element: <UploadGrid />
              },
            ],
          },
          {
            path: '/components/edit-table',
            name: 'Edit-table',
            icon: <OneToOneOutlined />,
            element: <EditTable />
          },
          {
            path: '/components/fuzzy-query',
            name: 'fuzzy-query',
            icon: <OneToOneOutlined />,
            element: <FuzzyQuery />
          },
        ]
      }
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