import React from 'react';

import Components0PagesExample from '@/pages/example';

import Components1ComponentsLayoutsIndex from '@/components/Layouts/index';

import Components2PagesQuickStart from '@/pages/quick-start';

import Components3PagesChangeLog from '@/pages/change-log';

import Components4PagesUpdate from '@/pages/update';

import Components5PagesDevelopNewPage from '@/pages/develop/newPage';

import Components6PagesDevelopCss from '@/pages/develop/css';

import Components7PagesDevelopRequest from '@/pages/develop/request';

import Components8PagesDevelopMock from '@/pages/develop/mock';

import Components9PagesDevelopProxy from '@/pages/develop/proxy';

import Components10PagesDevelopAuth from '@/pages/develop/auth';

import Components11PagesDevelopDataFlow from '@/pages/develop/data-flow';

import Components12PagesDevelopDva from '@/pages/develop/dva';

import Components13PagesDevelopInternationalization from '@/pages/develop/internationalization';

import Components14PagesConfig from '@/pages/config';

import Components15PagesUserLogin from '@/pages/user-login';

import Components16PagesPageLoading from '@/pages/page-loading';

import Components17PagesDocumentTitle from '@/pages/document-title';

import Components18PagesFullscreen from '@/pages/fullscreen';

import Components19PagesBasicLayouts from '@/pages/basic-layouts';

import Components20PagesLayoutTabs from '@/pages/layout-tabs';

import Components21PagesAuthorized from '@/pages/authorized';

import Components22PagesConfig from '@/pages/config';

import Components23PagesAntdpUiButtongrouppro from '@/pages/antdp-ui/buttongrouppro';

import Components24PagesAntdpUiQuickform from '@/pages/antdp-ui/quickform';

import Components25PagesAntdpUiCardpro from '@/pages/antdp-ui/cardpro';

import Components26PagesAntdpUiFormdetail from '@/pages/antdp-ui/formdetail';

import Components27PagesAntdpUiInputcount from '@/pages/antdp-ui/inputcount';

import Components28PagesAntdpUiUploadgrid from '@/pages/antdp-ui/uploadgrid';

import Components29PagesEditTable from '@/pages/edit-table';

import Components30PagesFuzzyQuery from '@/pages/fuzzy-query';

import Components31Pages404 from '@/pages/404';

import Components32Pages404 from '@/pages/404';

import { Navigate } from 'react-router-dom';
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
        redirect: '/docs/quick-start',
        element: <Navigate to="/docs/quick-start" />,
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
            loader: Components2PagesQuickStart.loader,
          },
          {
            path: '/docs/change-log/*',
            element: React.lazy(() => import('@/pages/change-log')),
            loader: Components3PagesChangeLog.loader,
          },
          {
            path: '/docs/update/*',
            element: React.lazy(() => import('@/pages/update')),
            loader: Components4PagesUpdate.loader,
          },
          {
            path: '/docs/newPage/*',
            element: React.lazy(() => import('@/pages/develop/newPage')),
            loader: Components5PagesDevelopNewPage.loader,
          },
          {
            path: '/docs/css/*',
            element: React.lazy(() => import('@/pages/develop/css')),
            loader: Components6PagesDevelopCss.loader,
          },
          {
            path: '/docs/request/*',
            element: React.lazy(() => import('@/pages/develop/request')),
            loader: Components7PagesDevelopRequest.loader,
          },
          {
            path: '/docs/mock/*',
            element: React.lazy(() => import('@/pages/develop/mock')),
            loader: Components8PagesDevelopMock.loader,
          },
          {
            path: '/docs/proxy/*',
            element: React.lazy(() => import('@/pages/develop/proxy')),
            loader: Components9PagesDevelopProxy.loader,
          },
          {
            path: '/docs/auth/*',
            element: React.lazy(() => import('@/pages/develop/auth')),
            loader: Components10PagesDevelopAuth.loader,
          },
          {
            path: '/docs/data-flow/*',
            element: React.lazy(() => import('@/pages/develop/data-flow')),
            loader: Components11PagesDevelopDataFlow.loader,
          },
          {
            path: '/docs/dva/*',
            element: React.lazy(() => import('@/pages/develop/dva')),
            loader: Components12PagesDevelopDva.loader,
          },
          {
            path: '/docs/internationalization/*',
            element: React.lazy(() =>
              import('@/pages/develop/internationalization'),
            ),
            loader: Components13PagesDevelopInternationalization.loader,
          },
          {
            path: '/docs/config/*',
            element: React.lazy(() => import('@/pages/config')),
            loader: Components14PagesConfig.loader,
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
            loader: Components15PagesUserLogin.loader,
          },
          {
            path: '/components/page-loading/*',
            element: React.lazy(() => import('@/pages/page-loading')),
            loader: Components16PagesPageLoading.loader,
          },
          {
            path: '/components/document-title/*',
            element: React.lazy(() => import('@/pages/document-title')),
            loader: Components17PagesDocumentTitle.loader,
          },
          {
            path: '/components/fullscreen/*',
            element: React.lazy(() => import('@/pages/fullscreen')),
            loader: Components18PagesFullscreen.loader,
          },
          {
            path: '/components/basic-layouts/*',
            element: React.lazy(() => import('@/pages/basic-layouts')),
            loader: Components19PagesBasicLayouts.loader,
          },
          {
            path: '/components/layout-tabs/*',
            element: React.lazy(() => import('@/pages/layout-tabs')),
            loader: Components20PagesLayoutTabs.loader,
          },
          {
            path: '/components/authorized/*',
            element: React.lazy(() => import('@/pages/authorized')),
            loader: Components21PagesAuthorized.loader,
          },
          {
            path: '/components/config/*',
            element: React.lazy(() => import('@/pages/config')),
            loader: Components22PagesConfig.loader,
          },
          {
            path: '/components/buttongrouppro/*',
            element: React.lazy(() =>
              import('@/pages/antdp-ui/buttongrouppro'),
            ),
            loader: Components23PagesAntdpUiButtongrouppro.loader,
          },
          {
            path: '/components/quickform/*',
            element: React.lazy(() => import('@/pages/antdp-ui/quickform')),
            loader: Components24PagesAntdpUiQuickform.loader,
          },
          {
            path: '/components/cardpro/*',
            element: React.lazy(() => import('@/pages/antdp-ui/cardpro')),
            loader: Components25PagesAntdpUiCardpro.loader,
          },
          {
            path: '/components/formdetail/*',
            element: React.lazy(() => import('@/pages/antdp-ui/formdetail')),
            loader: Components26PagesAntdpUiFormdetail.loader,
          },
          {
            path: '/components/inputcount/*',
            element: React.lazy(() => import('@/pages/antdp-ui/inputcount')),
            loader: Components27PagesAntdpUiInputcount.loader,
          },
          {
            path: '/components/uploadgrid/*',
            element: React.lazy(() => import('@/pages/antdp-ui/uploadgrid')),
            loader: Components28PagesAntdpUiUploadgrid.loader,
          },
          {
            path: '/components/edit-table/*',
            element: React.lazy(() => import('@/pages/edit-table')),
            loader: Components29PagesEditTable.loader,
          },
          {
            path: '/components/edit-table/*',
            element: React.lazy(() => import('@/pages/fuzzy-query')),
            loader: Components30PagesFuzzyQuery.loader,
          },
        ],
      },
      {
        path: '*',
        element: React.lazy(() => import('@/pages/404')),
        loader: Components31Pages404.loader,
      },
    ],
    loader: Components1ComponentsLayoutsIndex.loader,
  },
  {
    path: '*',
    element: React.lazy(() => import('@/pages/404')),
    loader: Components32Pages404.loader,
  },
];
export default routeList;
