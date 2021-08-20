import rawModules from '@kkt/raw-modules';

export default (conf, env, options) => {
  conf = rawModules(conf, env, options);
  conf.output = { ...conf.output, publicPath: './' };
  return conf;
};
