import rawModules from '@kkt/raw-modules';
import lessModules from '@kkt/less-modules';

export default (conf, env, options) => {
  conf = lessModules(conf, env, options);
  conf = rawModules(conf, env, options);
  conf.output = { ...conf.output, publicPath: './' };
  return conf;
};
