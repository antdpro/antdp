import config from '@antdp/config';
import router from './router.json';
import proxy from './proxy';
export default config(router, {
  proxy,
  define: {
    // ANTD_IS_BREADCRUMB: true,
    // ANTD_AUTH_CONF: {
    //   auth_menu: 'authMenu',
    //   auth_btn: 'authBtn',
    //   auth_check_url: 'menuUrl',
    // },
  },
  locale: {
    default: 'zh-CN',
    antd: true,
    title: true,
    baseNavigator: true,
    baseSeparator: '-',
  },
});
