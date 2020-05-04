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
    routes: routes || [],
  });
}