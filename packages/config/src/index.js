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
