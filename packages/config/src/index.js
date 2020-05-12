import { defineConfig } from 'umi';

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
    nodeModulesTransform: {
      type: 'none',
    },
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
    ...options,
    nodeModulesTransform: {
      type: 'none',
      exclude: [],
    },
    /**
     * 是否启用按需加载，即是否把构建产物进行拆分，在需要的时候下载额外的 JS 再执行。
     */
    dynamicImport: {
      loading: '@/components/PageLoading/index',
    },
    // chunks: ['umi'],
    // chainWebpack: function (config, { webpack }) {
    //   config.merge({
    //     optimization: {
    //       minimize: true,
    //       splitChunks: {
    //         chunks: 'all',
    //         minSize: 30000,
    //         minChunks: 3,
    //         automaticNameDelimiter: '.',
    //         cacheGroups: {
    //           vendor: {
    //             name: 'vendors',
    //             test({ resource }) {
    //               return /[\\/]node_modules[\\/]/.test(resource);
    //             },
    //             priority: 10,
    //           },
    //         },
    //       },
    //     }
    //   });
    // },
    routes: routes || [],
  });
};
