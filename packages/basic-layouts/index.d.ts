import React from 'react';

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
  location: any;
  history: any;
  staticContext?: any;
  match: {
    isExact: boolean;
    params: any;
    path: string;
    url: string;
  }
}

export default class BaseLayout extends React.Component<BaseLayoutProps, BaseLayoutState> {
  static defaultProps: BaseLayoutProps;
  state: BaseLayoutState;
  constructor(props: BaseLayoutProps);
  render(): JSX.Element;
}