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
    /**
     * 
     */
    // chainWebpack(memo, { env, webpack, createCSSRule }) {
    //   // 设置 alias
    //   memo.resolve.alias.set('@@@', process.cwd());
    //   // 删除 umi 内置插件
    //   // memo.plugins.delete('progress');
    //   // memo.plugins.delete('friendly-error');
    //   // memo.plugins.delete('copy');
    // },
    routes: routes || [],
  });
}