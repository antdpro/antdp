import config from '@antdp/config';
import router from './router.json';
import proxy from './proxy';

export default config(router, {
  proxy,
  // locale: {
  //   default: 'zh-CN',
  //   antd: true,
  //   title: true,
  //   baseNavigator: true,
  //   baseSeparator: '-',
  // },
});
