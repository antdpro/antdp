import config from '@antdp/config';
import proxy from './proxy';
import router from './router.json';
export default config(router, {
  proxy,
  npmClient: 'npm',
  define: {
    // 是否显示 左侧菜单
    // ANTD_MENU_IS_SHOW: false,
    // 是否显示 head头部
    // ANTD_HEAD_IS_SHOW: false,
    // 是否展示tab栏
    ANTD_IS_TABS: true,
    // 是否展示面包屑
    ANTD_IS_BREADCRUMB: false,
    ANTD_AUTH_CONF: {
      auth_menu: 'authMenu',
      auth_btn: 'authBtn',
      auth_check_url: '',
    },
    // ANTD_MENU_TOP_LEFT: true,
    ANTD_TITLE_TOP: true,
    /** 是否展示搜索菜单  */
    ANTD_MENU_SEARCH_IS_SHOW: true,
  },
  locale: {
    // 默认使用 src/locales/zh-CN.ts 作为多语言文件
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    // baseNavigator: true,
    /**
     * [国际化] 控制台提示 Warning: The current popular language does not exist, please check the locales folder! 警告信息
     * https://github.com/umijs/umi/issues/4363#issuecomment-616134434
     * 警用 `baseNavigator` 和 `title` 两个配置项 可以解决国际化警告问题
     */
    baseNavigator: false,
    title: false,
  },
  dva: {},
  model: {},
  request: {},
  reactQuery: {
    // 是否开启 react query 官方 devtool 工具
    devtool: false,
    queryClient: true,
  },
});
