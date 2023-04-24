import config from '@antdp/config';
import proxy from './proxy';
import router from './router.json';
export default config(router, {
  proxy,
  npmClient: 'npm',
  reactQuery: {
    // 是否开启 react query 官方 devtool 工具
    devtool: false,
    queryClient: true,
  },
});
