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
export type GetAuthorizedPageProps = (menuRouter: Array<any>, path: string) => boolean
export interface AuthorizedBtnProps {
  // 权限路径
  path?: string,
  // 展示内容
  children?: React.ReactNode
}

export declare const AuthorizedBtn: React.FC<AuthorizedBtnProps>;
export declare const getAuthorizedPage: React.FC<GetAuthorizedPageProps>;

// export declare const AuthorizedBtn:  (props: AuthorizedBtnProps) => JSX.Element;
// export declare const getAuthorizedPage:  (props: GetAuthorizedPageProps) => JSX.Element;

declare const _default: (props?: AuthorizedProps) => React.ReactNode;
export default _default;