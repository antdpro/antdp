import config from '@antdp/config';
import router from './router.json';
import proxy from './proxy';

export default config(router, {
  proxy,
});
