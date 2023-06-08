import React from 'react';
import { IntlShape } from 'react-intl/lib/src/types';
import { ConfigProviderProps } from 'antd/es/config-provider'

export interface HandleMenuProps {
  /**语言转换*/
  intlLanguage?: IntlShape;
  /**菜单*/
  routers: RouterMenu[];
  /**是否使用 TOPLEFT 布局*/
  isTOPLEFT?: boolean;
  /**是否验证权限*/
  isCheckAuth?: boolean;
}

export interface RouterMenu {
  path?: string;
  key?: string;
  name?: string;
  icon?: string;
  locale?: string;
  side?: boolean;
  index?: boolean;
  component?: React.ReactNode;
  redirect?: string;
  redirectTo?: string;
  hideInMenu?: boolean;
  routes?: RouterMenu[];
  children?: RouterMenu[];
  order?: number;
  /**原来的path*/
  oPath?: string;
  element?: any;
  id?: string;
  parentId?: string;
}

export interface BasicLayoutsProps {
  /**
   * 项目logo
   */
  logo?: string;
  /**
   * 项目名称
   */
  projectName?: React.ReactNode;
  children?: React.ReactNode;
  intlLanguage?: IntlShape;
  topRightMenu?: {
    icon?: React.ReactNode;
    title?: React.ReactNode;
    link?: string;
    divider?: boolean;
    onClick?: () => void;
  }[];
  /**
   * 设置内容区域补白，默认 14px
   */
  bodyPadding?: number;
  // 顶部右方
  topRightLanguage?: React.ReactNode;
  /**
   * 设置最左边菜单宽度 180
   */
  siderWidth?: number;
  /**
   * 用户信息显示
   */
  profile?: {
    /**
     * 用户头像
     */
    avatar?: string;
    /**
     * 用户名称/昵称
     */
    name?: string;
  };
  theme?: 'dark' | 'light';
  configProviderProps?: ConfigProviderProps;
  className?: string;
}

export interface UseLayoutsProps extends Omit<BasicLayoutsProps, 'route'> {
  routes?: RouterMenu[];
}
