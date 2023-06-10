export interface MenusConfigObject {
  title?: string;
  path?: string;
  divider?: boolean;
  target?: string;
}

export const menusDocsConfig: MenusConfigObject[] = [
  {
    divider: true,
    title: '入门',
  },
  {
    title: '快速开始',
    path: '/docs/quick-start',
  },
  {
    title: '更新日志',
    path:'/docs/change-log'
  },
  {
    title: '从v1到v2',
    path:'/docs/update'
  },
  {
    divider: true,
    title: '页面开发',
  },
  {
    title: '新增页面',
    path: '/docs/newPage',
  },
  {
    title: 'Mock 模拟数据',
    path: '/docs/css',
  },
  {
    title: '网络请求',
    path: '/docs/request',
  },
  {
    title: 'mock',
    path: '/docs/mock',
  },
  {
    divider: true,
    title: '数据管理',
  },
  {
    title: '接口代理',
    path: '/docs/proxy',
  },
  {
    title: '权限管理',
    path: '/docs/auth',
  },
  {
    title: '数据流',
    path: '/docs/data-flow',
  },
  {
    title: 'dva',
    path: '/docs/dva',
  },
  {
    divider: true,
    title: '基础配置',
  },
  {
    title: '配置',
    path: '/docs/config',
  },
  {
    title: '国际化',
    path: '/docs/internationalization',
  },
  // {
  //   title: 'KKTP',
  //   target: '__blank',
  //   path: 'https://kktjs.github.io/kkt-pro/#/doc/kktp',
  // },
  {
    title: '源码 Github 仓库',
    target: '__blank',
    path: 'https://github.com/antdpro/antdp',
  },
];

export const menusComponentsConfig: MenusConfigObject[] = [
  {
    divider: true,
    title: '依赖',
  },
  {
    title: 'Use Login - 登陆表单',
    path: '/components/user-login',
  },
  {
    title: 'Page Loading - 过渡动画',
    path: '/components/page-loading',
  },
  {
    title: "Document Title - 页面标题",
    path: "/components/document-title"
  },
  {
    title: 'Fullscreen - 页面全屏',
    path: '/components/fullscreen',
  },
  {
    title: 'BasicLayouts - 高级布局',
    path: '/components/basic-layouts',
  },
  {
    title: 'LayoutTabs - 选项卡',
    path: '/components/layout-tabs',
  },
  {
    title: "Authorized - 权限",
    path: "/components/authorized"
  },
  {
    title: 'Config - 配置',
    path: '/components/config',
  },
  {
    divider: true,
    title: '业务组件',
  },
  {
    title: 'ButtonGroupPro - 按钮组',
    path: '/components/buttongrouppro',
  },
  {
    title: 'QuickForm - 快速表单',
    path: '/components/quickform',
  },
  {
    title: 'CardPro - 卡片',
    path: '/components/cardpro',
  },
  {
    title: 'FormDetail - 表单详情',
    path: '/components/formdetail',
  },
  {
    title:'UploadGrid - 拖拽上传',
    path: '/components/uploadgrid',
  },
  {
    title:'Edit-Table - 编辑表格',
    path: '/components/edit-table',
  },
  {
    title:'Fuzzy-Query - 模糊查询',
    path: '/components/fuzzy-query',
  },
];
