import React from 'react';
import { IntlShape } from 'react-intl/lib/src/types';
// import { ItemType } from 'antd/lib/menu/hooks/useItems';

export interface HandleMenuProps {
  /**语言转换*/
  intlLanguage?: IntlShape;
  routers: RouterMenu[];
  isTOPLEFT?: boolean;
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
  hideInMenu?: boolean;
  routes?: RouterMenu[];
  children?: RouterMenu[];
  order?: number;
  /**原来的path*/
  oPath?: string;
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
  route?: {
    routes: RouterMenu[];
  };
}

export interface UseLayoutsProps extends Omit<BasicLayoutsProps, 'route'> {
  routes?: RouterMenu[];
}
