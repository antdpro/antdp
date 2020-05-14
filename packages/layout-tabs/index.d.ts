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
  activeKey?: string[]
  dataSource?: LayoutTabsRouter[]
  children?: React.ReactNode;
}

declare const _default: (props?: LayoutTabsProps) => React.ReactNode;
export default _default;