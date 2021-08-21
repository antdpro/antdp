import config from '@antdp/config';
import router from './router.json';
import proxy from './proxy';
export default config(router, {
  proxy,
  define: {
    // /**  是否显示 左侧菜单 */
    // ANTD_MENU_IS_SHOW: false,
    // /**  是否显示 head头部 */
    // ANTD_HEAD_IS_SHOW: false,
    // ANTD_IS_TABS: false,
    ANTD_IS_BREADCRUMB: true,
    ANTD_AUTH_CONF: {
      auth_menu: 'authMenu',
      auth_btn: 'authBtn',
      auth_check_url: undefined,
    },
  },
  locale: {
    default: 'zh-CN',
    antd: true,
    title: true,
    baseNavigator: true,
    baseSeparator: '-',
  },
});
