import { MenuProps } from 'antd';
import React from 'react';
import { IntlShape } from 'react-intl/lib/src/types';

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

export enum LayoutModel {
  SLIDER = 'slider',
  TOPLEFT = 'topleft',
  MIX = 'mix',
}

export interface BasicLayoutsProps {
  /**
   * 刷新后是否展开菜单
   * @default false
   * */
  defultOpenMenus?:boolean;
  /**
   * layout 的菜单模式
   * @default MIX
   * */
  layout?: LayoutModel;
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
  className?: string;
  menuProps?: MenuProps;
  token?: TokenProps
}

export interface TokenProps {
  menu?: {
    colorMenuBackground?: string;
    colorBgMenuItemHover?: string;
    colorBgMenuItemSelected?: string;
    colorTextMenu?: string;
    colorTextMenuActive?: string;
    colorTextMenuSelected?: string;
    colorBgMenuItemCollapsedElevated?: string;
    triggerColor?: string;
    triggerTextColor?: string;
  };
  header?: {
    colorHeaderBackground?: string;
    headerTextColor?: string;
  };
  titleColor?: string;
  shadowColor?: string;
  contentBackground?: string;
}

export interface UseLayoutsProps extends Omit<BasicLayoutsProps, 'route'> {
  routes?: RouterMenu[];
}
