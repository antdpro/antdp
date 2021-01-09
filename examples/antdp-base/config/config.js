import config from '@antdp/config';
import router from './router.json';
import proxy from './proxy';
export default config(router, {
  proxy,
  define: {
    ANTD_IS_BREADCRUMB: true,

    ANTD_IS_AUTHORIZED: true,
    ANTD_AUTH_MENU: 'authMenu',
    ANTD_IS_AUTH_URL: 'menuUrl',
  },
  // locale: {
  //   default: 'zh-CN',
  //   antd: true,
  //   title: true,
  //   baseNavigator: true,
  //   baseSeparator: '-',
  // },
});
