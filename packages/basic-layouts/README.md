@antdp/basic-layouts
---

[![npm](https://img.shields.io/npm/v/@antdp/basic-layouts.svg?maxAge=3600)](https://www.npmjs.com/package/@antdp/basic-layouts)
[![npm download](https://img.shields.io/npm/dm/@antdp/basic-layouts.svg?style=flat)](https://www.npmjs.com/package/@antdp/basic-layouts)

入口公共界面

## 安装

```bash
npm i @antdp/basic-layouts --save
```

## 参数

```ts
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
  /**国际化语言转换方法*/
  intlLanguage?: IntlShape;
  /**头像下拉菜单*/
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
}

```

## 基本使用

```tsx
import BasicLayout from '@antdp/basic-layouts';

export default (props) => {
  return (
    <BasicLayout
      {...props}
      projectName="Ant Design Pro"
    />
  )
};
```

## 菜单国际化设置

```tsx
import BasicLayout from '@antdp/basic-layouts';
import { useIntl,SelectLang } from '@umijs/max';

const Demo = (props) => {
  return (
    <BasicLayout
      {...props}
      projectName="Ant Design Pro"
      intlLanguage={useIntl()}
      topRightLanguage={<SelectLang />}
    />
  )
};
export default Demo
```

## 使用`useLayouts`获取数据

```tsx
import { useLayouts } from '@antdp/basic-layouts';

export interface LayoutsContextType extends UseLayoutsProps {
  HandleMenu: HandleMenu;
  /**菜单展开或收缩*/
  collapsed: boolean;
  /**控制菜单展开或收缩*/
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

```

**HandleMenu类方法**

```tsx

interface HandleMenu {
  authMenus: any[] = []
  /**所有直接渲染的父级菜单*/
  parentMenu: RouterMenu[] = []
  parentflatMenu: RouterMenu[] = []
  /**子集key对应的父级key*/
  childParent: Map<string, string> = new Map([])
  /**key对应子集数据*/
  childMenu: Map<string, RouterMenu[]> = new Map([])
  // 所有子集菜单 平铺
  flatMenu: RouterMenu[] = []
  // 所有菜单 平铺
  flatAllMenu: RouterMenu[] = []
  /**语言转换*/
  intlLanguage?: IntlShape;
  /**路由数据*/
  routers: RouterMenu[] = []
  /**处理权限后的菜单**/
  checkAuthMenus: RouterMenu[] = []

  /**当前菜单对应的父级菜单*/
  pathToParentMenus: Map<string, RouterMenu[]> = new Map([])

  /**是否进行权限校验*/
  isCheckAuth?: boolean = false
  /**是否使用*/
  isTOPLEFT?: boolean = false

  /**记录上次父级菜单*/
  preParentPath?: string = ''
  /**记录上次菜单*/
  prePath?: string = ''

  /**验证权限*/
  checkAuth(path: string): boolean;

  /**
   * 1. 权限处理
   *    1. 子集全部没权限，父级也没有权限
   *    2. 子集存在权限，父级也存在权限
   *    3. 没有权限的自动把 path 转换成 403  
   * */
  initAuth(routers: RouterMenu[], isParent: boolean): RouterMenu[]
  /**
   * 2. 国际化翻译
   * */
  initLanguage(menus: RouterMenu[], parentLocale: string): void

  /**
   * 3. 扁平化数据
  */
  initFlat(menus?: RouterMenu[], parentMenu?: RouterMenu[]): void

  /**
   * 4. 处理数据,用于顶部和侧边菜单展示联动
   * */
  handelSiderMenu(menus?: RouterMenu[], isSider?: boolean, parentPath?: string): void

  /**
   * 5. 获取顶部渲染数据
   * */
  getTopMenus(menus?: RouterMenu[], index?: number): RouterMenu[]

  /**
   * 6. 获取导航面包屑
   * */
  getBreadcrumb(path: string): RouterMenu[]

  /**7. 根据当前路由地址取父级key，再使用父级key进行取渲染内容,如果不是顶部渲染方式，则直接默认*/
  getSiderMenus(path: string): RouterMenu[]

  /**8. 获取父级path*/
  getParentPath(path: string): string

  /**9. 获取跳转地址*/
  getToPath(path: string): string | false | undefined

  /**10 更加path地址获取当前配置数据*/
  getPathItem(path: string): RouterMenu | undefined
}


```
