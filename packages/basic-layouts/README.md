@antdp/basic-layouts
---

[![npm](https://img.shields.io/npm/v/@antdp/basic-layouts.svg?maxAge=3600)](https://www.npmjs.com/package/@antdp/basic-layouts)

入口公共界面

## Installation

```bash
npm i @antdp/basic-layouts --save
```

## Basic Usage

```jsx
import BasicLayout from '@antdp/basic-layouts';
import logo from './logo.svg';

export default (props) => {
  return (
    <BasicLayout
      {...props}
      projectName="Ant Design Pro2"
      logo={logo}
    />
  )
};
```


## Component Interface

```typescript
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
}
```