import { IConfig } from '@umijs/max';
// @ts-ignore
import { IConfigFromPlugins } from '@@/core/pluginConfig';
import { IBundlerConfigType, ICreateCSSRule } from '@umijs/max';
import webpack from '@umijs/deps/compiled/webpack';

export interface IRoute {
  component?: any;
  exact?: boolean;
  path?: string;
  routes?: IRoute[];
  wrappers?: string[];
  title?: string;
  __toMerge?: boolean;
  __isDynamic?: boolean;
  [key: string]: any;
}

export interface chainWebpackOptions {
  type: IBundlerConfigType;
  webpack: typeof webpack;
  env: 'development' | 'production';
  createCSSRule: ICreateCSSRule;
}

export interface OptionsProps
  extends Omit<IConfigFromPlugins | IConfig, 'routes'> {
  define?: {
    /** 是否显示 Tab 选项卡 */
    ANTD_IS_TABS?: boolean;
    /** 使用 iframe 展示页面 **/
    ANTD_IS_IFRAME_RENDER?: boolean;
    /**  是否显示 左侧菜单 */
    ANTD_MENU_IS_SHOW?: boolean;
    /**  是否显示 head头部 */
    ANTD_HEAD_IS_SHOW?: boolean;
    /**  是否开启父子路由面包屑 */
    ANTD_IS_BREADCRUMB?: boolean;
    /**  是否开启权限验证 */
    ANTD_AUTH_CONF?:
      | boolean
      | {
          /** 存储本地菜单  key */
          auth_menu?: string;
          /** 存储本地按钮  key */
          auth_btn?: string;
          /** 校验 字段  undefined 时 权限数据为  string[] ,否则为 { auth_check_url:string}[] */
          auth_check_url?: string | undefined;
        };
    [s: string]: any;
  };
}
