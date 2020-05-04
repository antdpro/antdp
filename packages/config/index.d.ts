import { IConfigFromPlugins, IConfig } from 'umi';

export interface Options extends IConfigFromPlugins, IConfig {
  routes: Routes;
}

export type Routes = Array<{
  path: string;
  component?: JSX.Element;
  [key: string]: Routes;
}>;

export interface Request {
  (routes?: Routes, optiosn: Options): IConfigFromPlugins | IConfig;
}

declare var request: Request
export default request;