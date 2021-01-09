import { IConfig, IRoute } from 'umi';

interface AuthConf {
  /**
   * 储存菜单路由权限---本地keys
   */
  auth_menu?: string,
  /**
   * 储存按钮路径权限---本地keys
   */
  auth_btn?: string,
  /**
   * 判断路径是否有权限的字段
   */
  auth_check_url?: string,
}
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
    // 是否开启父子路由面包屑
    ANTD_IS_BREADCRUMB: boolean,
    // 是否开启权限验证
    ANTD_AUTH_CONF: AuthConf | undefined,
  }
}

export interface Config {
  (routes?: IRoute, optiosn?: Options): IConfig;
}

declare var config: Config;
export default config;
