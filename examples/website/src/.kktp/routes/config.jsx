import React from 'react';
import { Navigate } from 'react-router-dom';

import Components0PagesExample from '@/pages/example';

import Components1ComponentsLayoutsIndex from '@/components/Layouts/index';

import Components2PagesHome from '@/pages/home';

import Components3PagesQuickStart from '@/pages/quick-start';

import Components4PagesChangeLog from '@/pages/change-log';

import Components5PagesUpdate from '@/pages/update';

import Components6PagesDevelopNewPage from '@/pages/develop/newPage';

import Components7PagesDevelopCss from '@/pages/develop/css';

import Components8PagesDevelopRequest from '@/pages/develop/request';

import Components9PagesDevelopMock from '@/pages/develop/mock';

import Components10PagesDevelopProxy from '@/pages/develop/proxy';

import Components11PagesDevelopAuth from '@/pages/develop/auth';

import Components12PagesDevelopDataFlow from '@/pages/develop/data-flow';

import Components13PagesDevelopDva from '@/pages/develop/dva';

import Components14PagesDevelopInternationalization from '@/pages/develop/internationalization';

import Components15PagesConfig from '@/pages/config';

import Components16PagesUserLogin from '@/pages/user-login';

import Components17PagesPageLoading from '@/pages/page-loading';

import Components18PagesDocumentTitle from '@/pages/document-title';

import Components19PagesFullscreen from '@/pages/fullscreen';

import Components20PagesBasicLayouts from '@/pages/basic-layouts';

import Components21PagesLayoutTabs from '@/pages/layout-tabs';

import Components22PagesAuthorized from '@/pages/authorized';

import Components23PagesConfig from '@/pages/config';

import Components24PagesAntdpUiButtongrouppro from '@/pages/antdp-ui/buttongrouppro';

import Components25PagesAntdpUiQuickform from '@/pages/antdp-ui/quickform';

import Components26PagesAntdpUiCardpro from '@/pages/antdp-ui/cardpro';

import Components27PagesAntdpUiFormdetail from '@/pages/antdp-ui/formdetail';

import Components28PagesAntdpUiInputcount from '@/pages/antdp-ui/inputcount';

import Components29PagesAntdpUiUploadgrid from '@/pages/antdp-ui/uploadgrid';

import Components30PagesEditTable from '@/pages/edit-table';

import Components31PagesFuzzyQuery from '@/pages/fuzzy-query';

import Components32Pages404 from '@/pages/404';

import Components33Pages404 from '@/pages/404';

const routeList = [
  {
    path: '/example',
    element: React.lazy(() => import('@/pages/example')),
    loader: Components0PagesExample.loader,
  },
  {
    path: '/',
    element: React.lazy(() => import('@/components/Layouts/index')),
    children: [
      {
        index: true,
        redirect: '/home',
        element: <Navigate to="/home" />,
      },
      {
        path: '/home',
        element: React.lazy(() => import('@/pages/home')),
        loader: Components2PagesHome.loader,
      },
      {
        path: '/docs',
        children: [
          {
            index: true,
            redirect: '/docs/quick-start',
            element: <Navigate to="/docs/quick-start" />,
          },
          {
            path: '/docs/quick-start/*',
            element: React.lazy(() => import('@/pages/quick-start')),
            loader: Components3PagesQuickStart.loader,
          },
          {
            path: '/docs/change-log/*',
            element: React.lazy(() => import('@/pages/change-log')),
            loader: Components4PagesChangeLog.loader,
          },
          {
            path: '/docs/update/*',
            element: React.lazy(() => import('@/pages/update')),
            loader: Components5PagesUpdate.loader,
          },
          {
            path: '/docs/newPage/*',
            element: React.lazy(() => import('@/pages/develop/newPage')),
            loader: Components6PagesDevelopNewPage.loader,
          },
          {
            path: '/docs/css/*',
            element: React.lazy(() => import('@/pages/develop/css')),
            loader: Components7PagesDevelopCss.loader,
          },
          {
            path: '/docs/request/*',
            element: React.lazy(() => import('@/pages/develop/request')),
            loader: Components8PagesDevelopRequest.loader,
          },
          {
            path: '/docs/mock/*',
            element: React.lazy(() => import('@/pages/develop/mock')),
            loader: Components9PagesDevelopMock.loader,
          },
          {
            path: '/docs/proxy/*',
            element: React.lazy(() => import('@/pages/develop/proxy')),
            loader: Components10PagesDevelopProxy.loader,
          },
          {
            path: '/docs/auth/*',
            element: React.lazy(() => import('@/pages/develop/auth')),
            loader: Components11PagesDevelopAuth.loader,
          },
          {
            path: '/docs/data-flow/*',
            element: React.lazy(() => import('@/pages/develop/data-flow')),
            loader: Components12PagesDevelopDataFlow.loader,
          },
          {
            path: '/docs/dva/*',
            element: React.lazy(() => import('@/pages/develop/dva')),
            loader: Components13PagesDevelopDva.loader,
          },
          {
            path: '/docs/internationalization/*',
            element: React.lazy(() =>
              import('@/pages/develop/internationalization'),
            ),
            loader: Components14PagesDevelopInternationalization.loader,
          },
          {
            path: '/docs/config/*',
            element: React.lazy(() => import('@/pages/config')),
            loader: Components15PagesConfig.loader,
          },
        ],
      },
      {
        path: '/components',
        children: [
          {
            index: true,
            redirect: '/components/user-login',
            element: <Navigate to="/components/user-login" />,
          },
          {
            name: '登录页',
            path: '/components/user-login/*',
            element: React.lazy(() => import('@/pages/user-login')),
            loader: Components16PagesUserLogin.loader,
          },
          {
            path: '/components/page-loading/*',
            element: React.lazy(() => import('@/pages/page-loading')),
            loader: Components17PagesPageLoading.loader,
          },
          {
            path: '/components/document-title/*',
            element: React.lazy(() => import('@/pages/document-title')),
            loader: Components18PagesDocumentTitle.loader,
          },
          {
            path: '/components/fullscreen/*',
            element: React.lazy(() => import('@/pages/fullscreen')),
            loader: Components19PagesFullscreen.loader,
          },
          {
            path: '/components/basic-layouts/*',
            element: React.lazy(() => import('@/pages/basic-layouts')),
            loader: Components20PagesBasicLayouts.loader,
          },
          {
            path: '/components/layout-tabs/*',
            element: React.lazy(() => import('@/pages/layout-tabs')),
            loader: Components21PagesLayoutTabs.loader,
          },
          {
            path: '/components/authorized/*',
            element: React.lazy(() => import('@/pages/authorized')),
            loader: Components22PagesAuthorized.loader,
          },
          {
            path: '/components/config/*',
            element: React.lazy(() => import('@/pages/config')),
            loader: Components23PagesConfig.loader,
          },
          {
            path: '/components/buttongrouppro/*',
            element: React.lazy(() =>
              import('@/pages/antdp-ui/buttongrouppro'),
            ),
            loader: Components24PagesAntdpUiButtongrouppro.loader,
          },
          {
            path: '/components/quickform/*',
            element: React.lazy(() => import('@/pages/antdp-ui/quickform')),
            loader: Components25PagesAntdpUiQuickform.loader,
          },
          {
            path: '/components/cardpro/*',
            element: React.lazy(() => import('@/pages/antdp-ui/cardpro')),
            loader: Components26PagesAntdpUiCardpro.loader,
          },
          {
            path: '/components/formdetail/*',
            element: React.lazy(() => import('@/pages/antdp-ui/formdetail')),
            loader: Components27PagesAntdpUiFormdetail.loader,
          },
          {
            path: '/components/inputcount/*',
            element: React.lazy(() => import('@/pages/antdp-ui/inputcount')),
            loader: Components28PagesAntdpUiInputcount.loader,
          },
          {
            path: '/components/uploadgrid/*',
            element: React.lazy(() => import('@/pages/antdp-ui/uploadgrid')),
            loader: Components29PagesAntdpUiUploadgrid.loader,
          },
          {
            path: '/components/edit-table/*',
            element: React.lazy(() => import('@/pages/edit-table')),
            loader: Components30PagesEditTable.loader,
          },
          {
            path: '/components/edit-table/*',
            element: React.lazy(() => import('@/pages/fuzzy-query')),
            loader: Components31PagesFuzzyQuery.loader,
          },
        ],
      },
      {
        path: '*',
        element: React.lazy(() => import('@/pages/404')),
        loader: Components32Pages404.loader,
      },
    ],
    loader: Components1ComponentsLayoutsIndex.loader,
  },
  {
    path: '*',
    element: React.lazy(() => import('@/pages/404')),
    loader: Components33Pages404.loader,
  },
];
export default routeList;
