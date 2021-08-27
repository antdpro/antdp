@antdp/authorized
---

[![npm](https://img.shields.io/npm/v/@antdp/authorized.svg?maxAge=3600)](https://www.npmjs.com/package/@antdp/authorized)

通过判断是否进入主界面还是登录界面。

## Installation

```bash
npm i @antdp/authorized --save
```

## Basic Usage

```jsx
import React from 'react';
import BasicLayout from '@antdp/basic-layouts';
import UserLogin from '@antdp/user-login';
import Authorized from '@antdp/authorized';

// 入口页面
const UserLayout = (props) => {
  return (
    <Authorized authority={!props.token} redirectPath="/login">
      <UserLogin />
    </Authorized>
  )
};

// 登录页面
const Layout = (props) => {
  return (
    <Authorized authority={!props.token} redirectPath="/">
      <BasicLayout />
    </Authorized>
  )
};
```

## Component Interface

```typescript
interface AuthorizedProps {
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
type GetAuthorizedPageProps = (menuRouter: Array<any>, path: string) => boolean
// 按钮权限
interface AuthorizedBtnProps {
  // 权限路径
  path?: string,
  // 展示内容
  children?: React.ReactNode
}
```