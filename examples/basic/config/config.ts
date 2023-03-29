import config from '@antdp/config';
import proxy from './proxy';
import router from './router.json';
export default config(router, {
  proxy,
  npmClient: 'npm',
});
