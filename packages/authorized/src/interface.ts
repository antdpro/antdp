
import { IRoute } from 'umi';

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


export interface AuthorizedBtnProps {
  // 权限路径
  path?: string;
  // 展示内容
  children?: React.ReactNode;
}

export type AuthList = (string | Record<string, unknown>)[]

export type GetAuthorizedPageProps = (
  allRouters: IRoute[], pathname: string
) => true | 403 | 404;