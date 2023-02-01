@antdp/basic-layouts
---

[![npm](https://img.shields.io/npm/v/@antdp/basic-layouts.svg?maxAge=3600)](https://www.npmjs.com/package/@antdp/basic-layouts)
[![npm download](https://img.shields.io/npm/dm/@antdp/basic-layouts.svg?style=flat)](https://www.npmjs.com/package/@antdp/basic-layouts)

入口公共界面

## Installation

```bash
npm i @antdp/basic-layouts --save
```

## Basic Usage

```jsx
import BasicLayout from '@antdp/basic-layouts';
import logo from './logo.svg';
import { useIntl,SelectLang } from '@umijs/max';

export default (props) => {
  return (
    <BasicLayout
      {...props}
      projectName="Ant Design Pro2"
      logo={logo}
      intlLanguage={useIntl()}
      topRightLanguage={<SelectLang />}
    />
  )
};
```


## Component Interface

```ts

export interface RouterData {
  path: string;
  redirect?: string;
  component?: string;
  icon?: string;
  routes?: RouterData[];
  /** 控制菜单子集展示侧边 **/
  side?: boolean
  // 子集默认展示
  index?: boolean;
}

 interface BaseLayoutProps {
  /**
   * 项目logo
   */
  logo?: JSX.Element;
  /**
   * 项目名称
   */
  projectName?: string;
  /**
   * 项目路由数据
   */
  route: RouterData;
  /**
   * 设置最左边菜单宽度
   */
  siderWidth?: number;
  /**
   * 用户信息显示
   */
  profile?: {
    /**
     * 用户头像
     */
    avatar?: string,
    /**
     * 用户名称/昵称
     */
    name?: string,
  };
  /**
   * 顶部右方菜单设置
   */
  topRightMenu?: (MenuItemProps | { divider: boolean })[];
  /**
   * 设置内容区域补白，默认 14px
   */
  bodyPadding?: number;
  location: Location;
  history: History;
  staticContext?: any;
  match: {
    isExact: boolean;
    params: any;
    path: string;
    url: string;
  };
  /**
   * 开启umi国际化配置。useIntl 是最常用的 api,它可以获得 formatMessage 等 api 来进行具体的值绑定。
   */
  intlLanguage:useIntl();
  /**
   * 开启右侧语言选择
   */
  topRightLanguage:React.ReactNode;
  /**
   * 点击logo图标跳转的路径，默认 /welcome
   */
  logoJumpTo?:string;
}
```