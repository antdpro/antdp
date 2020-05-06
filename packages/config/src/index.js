import { defineConfig } from 'umi';

/**
 * - optiosn umi 参数配置
 * - routes 路由配置
 */
export default (routes = [], optiosn = {}) => {
  return defineConfig({
    nodeModulesTransform: {
      type: 'none',
    },
    ...optiosn,
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
}