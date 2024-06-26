import { defineConfig } from '@umijs/max';
import path from 'path';
// import favicon from './favicon';
import { OptionsProps, IRoute } from './interface';
/**
 * - options umi 参数配置
 * - routes 路由配置
 */
export default (routes: IRoute[] = [], options: OptionsProps = {}) => {
  const { REACT_APP_ENV } = process.env;
  options.proxy = options.proxy
    ? options.proxy[REACT_APP_ENV || 'dev']
    : undefined;
  const defineObj = options.define || {};
  // 是否开启路由面包屑
  const ANTD_IS_BREADCRUMB = !!defineObj.ANTD_IS_BREADCRUMB;
  const ANTD_IS_STORAGE = defineObj.ANTD_IS_STORAGE ?? true;
  // 权限配置参数
  let ANTD_AUTH_CONF = defineObj.ANTD_AUTH_CONF || false;
  if (typeof ANTD_AUTH_CONF === 'boolean' && ANTD_AUTH_CONF) {
    ANTD_AUTH_CONF = {
      auth_menu: 'authMenu',
      auth_btn: 'authBtn',
      auth_check_url: 'menuUrl',
    };
  }
  if (typeof ANTD_AUTH_CONF === 'object' && ANTD_AUTH_CONF) {
    ANTD_AUTH_CONF = {
      auth_menu: 'authMenu',
      auth_btn: 'authBtn',
      auth_check_url: 'menuUrl',
      ...(ANTD_AUTH_CONF || {}),
    };
  }
  console.log("ANTD_IS_STORAGE:", ANTD_IS_STORAGE)

  return defineConfig({
    hash: true,
    /**
     * umi max 不兼容 ie11
     * https://github.com/ant-design/ant-design-pro/issues/10115
     * */
    // targets: {
    //   ie: 11,
    // },
    ignoreMomentLocale: true,
    /**
     * 整合 dva 数据流
     */
    // dva: {
    //   // hmr: true,
    // },
    mfsu: false,
    // model: {},
    // initialState: {},
    // request: {},
    /**
     * 如果需要自行通过 react-helment 等方式渲染 title，配 `title: false` 可禁用内置的 title 渲染机制
     * https://github.com/umijs/umi/pull/4345/files
     * https://umijs.org/zh-CN/config#title
     */
    title: false,
    /**
     * 是否启用按需加载，即是否把构建产物进行拆分，在需要的时候下载额外的 JS 再执行。
     */
    // dynamicImport: {
    //   loading: '@/components/PageLoading/index',
    // },
    // nodeModulesTransform: {
    //   type: 'none',
    // },
    // favicon,
    ...options,
    define: {
      /**
       * 是否显示 Tab 选项卡
       */
      ANTD_IS_TABS: true,
      /**
       * 使用 iframe 展示页面
       */
      ANTD_IS_IFRAME_RENDER: false,
      /**  是否显示 左侧菜单 */
      ANTD_MENU_IS_SHOW: true,
      /**  是否显示 head头部 */
      ANTD_HEAD_IS_SHOW: true,
      /**  是否开启菜单栏搜索 */
      ANTD_MENU_SEARCH_IS_SHOW: false,
      ...(options.define || {}),
      /** 默认 sessionStorage 存储，如果需要使用 localStorage 存储，设置为 `false` */
      ANTD_IS_STORAGE,
      /** 是否开启父子路由面包屑 */
      ANTD_IS_BREADCRUMB,
      /**  是否开启权限验证 */
      ANTD_AUTH_CONF,
    },
    routes: routes || [],
    plugins: [
      /**
       * https://github.com/umijs/umi-plugin-antd-icon-config
       * 由于 layout 支持在 config 中 icon:string 的配置，但是在 4.0 中不推荐这样的用法。
       * 这个插件可以将其转化，不再引入全量的 icon。
       */
      path.join(__dirname, 'plugins', 'antdicon', 'index.js'),
      ...(options.plugins || []),
    ],
  });
};
