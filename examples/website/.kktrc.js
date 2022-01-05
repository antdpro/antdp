import rawModules from '@kkt/raw-modules';
import lessModules from '@kkt/less-modules';

export default (conf, env, options) => {
  conf = lessModules.withLoaderOptions({
    lessOptions: { javascriptEnabled: true },
  })(conf, env, options);

  conf = rawModules(conf, env, options);
  conf.module.exprContextCritical = false;
  if (env === 'production') {
    conf.output = { ...conf.output, publicPath: './' };
    conf.optimization = {
      ...conf.optimization,
      splitChunks: {
        cacheGroups: {
          reactvendor: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'react-vendor',
            chunks: 'all',
          },
          refractor: {
            test: /[\\/]node_modules[\\/](refractor)[\\/]/,
            name: 'refractor-vendor',
            chunks: 'all',
          },
          antd: {
            test: /[\\/]node_modules[\\/](antd)[\\/]/,
            name: 'antd-vendor',
            chunks: 'all',
          },
        },
      },
    };
  }
  return conf;
};
