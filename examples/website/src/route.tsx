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
interface NonIndexRouteObjects extends Omit<NonIndexRouteObject, "index" | 'children'> {
  name?: React.ReactNode
  icon?: React.ReactNode
  index?: boolean
  children?: NonIndexRouteObjects[]
}

type RoutesType = IndexRouteObjects | NonIndexRouteObjects


const TabSvg = () => (
  <svg viewBox="0 0 1024 1024" width="14" height="14" fill="currentColor">
    <path d="M889.6 872H134.4c-34.4 0-62.4-31.2-62.4-70.4V222.4c0-61.6 20-70.4 62.4-70.4h212c23.2 0 42.4 20.8 42.4 47.2v239.2c0 1.6 0 16 11.2 16h510.4c23.2 0 42.4 20.8 42.4 47.2v300.8c-0.8 38.4-28.8 69.6-63.2 69.6zM134.4 183.2c-16.8 0-30.4 17.6-30.4 39.2v579.2c0 21.6 13.6 39.2 30.4 39.2h756c16.8 0 30.4-17.6 30.4-39.2V500.8c0-9.6-5.6-16-11.2-16H368c-12 0.8-11.2-19.2-11.2-47.2V199.2c0-9.6-5.6-16-11.2-16H134.4z" />
    <path d="M889.6 880H134.4c-38.4 0-70.4-35.2-70.4-78.4V222.4c0-66.4 24-78.4 70.4-78.4h212c28 0 50.4 24.8 50.4 55.2v239.2c0 0.8 0.8 8 3.2 8h510.4c28 0 50.4 24.8 50.4 55.2v300.8c-0.8 42.4-32 77.6-71.2 77.6zM134.4 160c-38.4 0-54.4 5.6-54.4 62.4v579.2c0 34.4 24 62.4 54.4 62.4h756c29.6 0 54.4-28 54.4-62.4V500.8c0-21.6-15.2-39.2-34.4-39.2H399.2c-12.8 0-19.2-12-19.2-24V199.2c0-21.6-15.2-39.2-34.4-39.2H134.4z m755.2 688.8H134.4c-21.6 0-38.4-20.8-38.4-47.2V222.4c0-25.6 17.6-47.2 38.4-47.2h212c10.4 0 19.2 10.4 19.2 24v245.6c0 12.8 0 30.4 3.2 32.8h541.6c10.4 0 19.2 10.4 19.2 24v300.8c-0.8 24.8-18.4 46.4-40 46.4z m-544-657.6H133.6c-12 0-22.4 14.4-22.4 31.2v579.2c0 16.8 10.4 31.2 22.4 31.2h756c12 0 22.4-14.4 22.4-31.2V500.8c0-4.8-2.4-7.2-3.2-8H368c-4 0-8-1.6-11.2-4-8-7.2-8-22.4-8-44.8V199.2c0-5.6-2.4-8-3.2-8z" />
    <path d="M640 391.2H480c-17.6 0-32-14.4-32-32v-160c0-17.6 14.4-32 32-32h160c17.6 0 32 14.4 32 32v160c0 17.6-14.4 32-32 32zM370.4 492.8H92V187.2c0-17.6 14.4-32 32-32h215.2c17.6 0 32 14.4 32 32v305.6zM904 391.2H744c-17.6 0-32-14.4-32-32v-160c0-17.6 14.4-32 32-32h160c17.6 0 32 14.4 32 32v160c0 17.6-14.4 32-32 32z" />
  </svg>
);

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


// export default routesConfig