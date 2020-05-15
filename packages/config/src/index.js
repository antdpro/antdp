import { defineConfig } from 'umi';
import favicon from './favicon';

/**
 * - options umi 参数配置
 * - routes 路由配置
 */
export default (routes = [], options = {}) => {
  const { REACT_APP_ENV } = process.env;
  options.proxy = options.proxy
    ? options.proxy[REACT_APP_ENV || 'dev']
    : undefined;

  return defineConfig({
    hash: true,
    targets: {
      ie: 11,
    },
    ignoreMomentLocale: true,
    /**
     * 整合 dva 数据流
     */
    dva: {
      hmr: true,
    },
    /**
     * 如果需要自行通过 react-helment 等方式渲染 title，配 `title: false` 可禁用内置的 title 渲染机制
     * https://github.com/umijs/umi/pull/4345/files
     * https://umijs.org/zh-CN/config#title
     */
    title: false,
    /**
     * 是否启用按需加载，即是否把构建产物进行拆分，在需要的时候下载额外的 JS 再执行。
     */
    dynamicImport: {
      loading: '@/components/PageLoading/index',
    },
    // nodeModulesTransform: {
    //   type: 'none',
    // },
    favicon,
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
      ...(options.define || {}),
    },
    routes: routes || [],
  });
};
