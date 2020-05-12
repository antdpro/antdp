import React from 'react';

export interface LayoutTabsRouter {
  component?: JSX.Element;
  exact?: boolean;
  icon: string;
  key: string;
  name: string;
  path: string;
}

export interface LayoutTabsProps {
  /**
   * 是否重新渲染页面，默认 false
   */
  isReRender?: boolean;
  /**
   * 是否使用 iframe 来渲染页面
   */
  iframeRender?: boolean;
  activeKey?: string[]
  dataSource?: LayoutTabsRouter[]
  children?: React.ReactNode;
}

declare const _default: (props?: LayoutTabsProps) => React.ReactNode;
export default _default;