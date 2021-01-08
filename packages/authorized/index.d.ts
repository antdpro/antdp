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
/**
 * @description: 页面权限
 * @param {Array} menuRouter 原始 routes.json 文件中路由
 * @param {string} path 当前路径
 * @return {*}
 */
export type getAuthorizedPage = (menuRouter: Array<any>, path: string) => boolean

export interface AuthorizedBtn {
  // 权限路径
  path?: string,
  // 展示内容
  children?: React.ReactNode
}


declare const _default: (props?: AuthorizedProps) => React.ReactNode;
export default _default;