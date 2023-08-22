const routeList = [
  {
    path: '/example',
    element: '@/pages/example',
  },
  {
    path: '/',
    element: '@/components/Layouts/index',
    children: [
      {
        index: true,
        redirect: '/home',
      },
      {
        path: '/home',
        element: '@/pages/home',
      },
      {
        path: '/docs',
        children: [
          {
            index: true,
            redirect: '/docs/quick-start',
          },
          { path: '/docs/quick-start/*', element: '@/pages/quick-start' },
          { path: '/docs/change-log/*', element: '@/pages/change-log' },
          { path: '/docs/update/*', element: '@/pages/update' },
          { path: '/docs/newPage/*', element: '@/pages/develop/newPage' },
          { path: '/docs/css/*', element: '@/pages/develop/css' },
          { path: '/docs/request/*', element: '@/pages/develop/request' },
          { path: '/docs/mock/*', element: '@/pages/develop/mock' },
          { path: '/docs/proxy/*', element: '@/pages/develop/proxy' },
          { path: '/docs/auth/*', element: '@/pages/develop/auth' },
          { path: '/docs/data-flow/*', element: '@/pages/develop/data-flow' },
          { path: '/docs/dva/*', element: '@/pages/develop/dva' },
          { path: '/docs/curd/*', element: '@/pages/develop/curd' },
          {
            path: '/docs/internationalization/*',
            element: '@/pages/develop/internationalization',
          },
          { path: '/docs/config/*', element: '@/pages/config' },
        ],
      },
      {
        path: '/components',
        children: [
          {
            index: true,
            redirect: '/components/user-login',
          },
          {
            name: '登录页',
            path: '/components/user-login/*',
            element: '@/pages/user-login',
          },
          {
            path: '/components/page-loading/*',
            element: '@/pages/page-loading',
          },
          {
            path: '/components/document-title/*',
            element: '@/pages/document-title',
          },
          { path: '/components/fullscreen/*', element: '@/pages/fullscreen' },
          {
            path: '/components/basic-layouts/*',
            element: '@/pages/basic-layouts',
          },
          { path: '/components/layout-tabs/*', element: '@/pages/layout-tabs' },
          {
            path: '/components/authorized/*',
            element: '@/pages/authorized',
          },
          { path: '/components/config/*', element: '@/pages/config' },
          {
            path: '/components/buttongrouppro/*',
            element: '@/pages/antdp-ui/buttongrouppro',
          },
          {
            path: '/components/quickform/*',
            element: '@/pages/antdp-ui/quickform',
          },
          {
            path: '/components/cardpro/*',
            element: '@/pages/antdp-ui/cardpro',
          },
          {
            path: '/components/formdetail/*',
            element: '@/pages/antdp-ui/formdetail',
          },
          {
            path: '/components/inputcount/*',
            element: '@/pages/antdp-ui/inputcount',
          },
          {
            path: '/components/uploadgrid/*',
            element: '@/pages/antdp-ui/uploadgrid',
          },
          { path: '/components/edit-table/*', element: '@/pages/edit-table' },
          { path: '/components/fuzzy-query/*', element: '@/pages/fuzzy-query' },
        ],
      },
      { path: '*', element: '@/pages/404' },
    ],
  },
  { path: '*', element: '@/pages/404' },
];

export default routeList;
