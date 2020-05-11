import React from 'react';

export interface LayoutTabsProps {
  /**
   * 是否重新渲染页面，默认 true
   */
  isReRender?: boolean;
  activeKey?: string[]
  dataSource?: any[]
  children?: React.ReactNode;
}

declare const _default: (props?: LayoutTabsProps) => React.ReactNode;
export default _default;