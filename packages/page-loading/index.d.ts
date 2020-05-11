import React from 'react';

export interface AuthorizedProps {
  /**
   * 准入权限/权限判断
   */
  authority?: boolean;
  /**
   * 权限异常时重定向的页面路由
   */
  redirectPath?: string;
  children?: React.ReactNode;
}

declare const _default: (props?: AuthorizedProps) => React.ReactNode;
export default _default;