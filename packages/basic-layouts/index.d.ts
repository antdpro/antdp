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
  logo?: JSX.Element;
  route: RouterData;
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