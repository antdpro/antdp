import { IConfig, IRoute } from 'umi';

export interface Options extends Omit<IConfig, 'routes'> {
  routes: IRoute;
  define: {
    /**
     * 是否显示 Tab 选项卡，默认值 `true`
     */
    ANTD_IS_TABS?: boolean;
    /**
     * 使用 iframe 展示页面，默认值 `false`
     */
    ANTD_IS_IFRAME_RENDER?: boolean,
  }
}

export interface Config {
  (routes?: IRoute, optiosn?: Options): IConfig;
}

declare var config: Config;
export default config;
