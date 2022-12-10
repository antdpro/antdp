import webpack, { Configuration } from 'webpack';
import lessModules from '@kkt/less-modules';
import { LoaderConfOptions } from 'kkt';
import { mdCodeModulesLoader } from 'markdown-react-code-preview-loader';
import pkg from './package.json';

export default (
  conf: Configuration,
  env: 'development' | 'production',
  options: LoaderConfOptions,
) => {
  conf = lessModules(conf, env, options);
  // Get the project version.
  conf.plugins!.push(
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
    }),
  );
  // https://github.com/kktjs/kkt/issues/336#issue-1097660932
  conf.module!.exprContextCritical = false;
  conf = mdCodeModulesLoader(conf);
  if (env === 'production') {
    conf.output = { ...conf.output, publicPath: './' };
  }
  return conf;
};
