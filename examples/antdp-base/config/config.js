import config from '@antdp/config';
import proxy from './proxy';
import router from './router.json';
export default config(router, {
  proxy,
  define: {
    // /**  是否显示 左侧菜单 */
    // ANTD_MENU_IS_SHOW: false,
    // /**  是否显示 head头部 */
    // ANTD_HEAD_IS_SHOW: false,
    ANTD_IS_TABS: false,
    ANTD_IS_BREADCRUMB: true,
    ANTD_AUTH_CONF: {
      auth_menu: 'authMenu',
      auth_btn: 'authBtn',
      auth_check_url: undefined,
    },
    // ANTD_MENU_TOP_LEFT: true,
    ANTD_TITLE_TOP: true,
  },
  locale: {
    // 默认使用 src/locales/zh-CN.ts 作为多语言文件
    default: 'zh-CN',
    baseSeparator: '-',
  },
  dva: {},
  model: {},
  initialState: {},
  request: {},
});
