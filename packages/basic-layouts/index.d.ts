import React from 'react';
import { MenuItemProps } from 'antd/lib/menu/MenuItem';
import { History, Location } from 'umi';

export interface RouterData {
  path: string;
  redirect?: string;
  component?: string;
  icon?: string;
  routes?: RouterData[];
}

export interface BaseLayoutState {
  collapsed: boolean;
  activeKey: string;
  tabList: any[];
  routeList: RouterData[];
}

export interface BaseLayoutProps {
  /**
   * 项目logo
   */
  logo?: JSX.Element;
  /**
   * 项目名称
   */
  projectName?: string;
  /**
   * 项目路由数据
   */
  route: RouterData;
  /**
   * 设置最左边菜单宽度
   */
  siderWidth?: number;
  /**
   * 用户信息显示
   */
  profile?: {
    /**
     * 用户头像
     */
    avatar?: string,
    /**
     * 用户名称/昵称
     */
    name?: string,
  };
  /**
   * 顶部右方菜单设置
   */
  topRightMenu?: (MenuItemProps | { divider: boolean })[];
  // 顶部右方
  topRightLanguage?: any,
  // 语言转换方法
  intlLanguage?: any,
  /**
   * 设置内容区域补白，默认 14px
   */
  bodyPadding?: number;
  location: Location;
  history: History;
  staticContext?: any;
  match: {
    isExact: boolean;
    params: any;
    path: string;
    url: string;
  };
}

export default class BaseLayout extends React.Component<
  BaseLayoutProps,
  BaseLayoutState
  > {
  static defaultProps: BaseLayoutProps;
  state: BaseLayoutState;
  constructor(props: BaseLayoutProps);
  render(): JSX.Element;
}
