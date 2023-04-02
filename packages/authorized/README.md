@antdp/authorized
---

[![npm](https://img.shields.io/npm/v/@antdp/authorized.svg?maxAge=3600)](https://www.npmjs.com/package/@antdp/authorized)
[![npm download](https://img.shields.io/npm/dm/@antdp/authorized.svg?style=flat)](https://www.npmjs.com/package/@antdp/authorized)

权限判断组件或方法，通过判断是否进入主界面还是登录界面。

## Installation

```bash
$ npm i @antdp/authorized  # yarn add @antdp/authorized
```
## 参数

```ts
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
type GetAuthorizedPageProps = (menuRouter: Array<any>, path: string) => boolean | 404 | 403
// 按钮权限
interface AuthorizedBtnProps {
  // 权限路径
  path?: string,
  // 展示内容
  children?: React.ReactNode
}
```

## AuthorizedConfigProvider 设置按钮权限配置

使用 `AuthorizedConfigProvider`可以自己进行重新设置组件包裹内的所有按钮的权限参数，不使用默认配置的按钮权限配置

```ts
export interface AuthorizedConfigProviderProps {
  auth_menu?: string,
  auth_btn?: string,
  auth_check_url?: string,
  isCheckAuth?: boolean
  children?: React.ReactNode
}

```

## useAuthorizedonfig 获取当前组件范围内的权限配置参数

```ts
// 返回参数
{
  /** 存储本地菜单  key */
  auth_menu?: string;
  /** 存储本地按钮  key */
  auth_btn?: string;
  /** 校验 字段  undefined 时 权限数据为  string[] ,否则为 { auth_check_url:string}[] */
  auth_check_url?: string | undefined;
  /**是否进行权限验证*/
  isCheckAuth?: boolean
}

```

## 判断菜单是否有权限

```ts
import { getAuthorizedPage } from '@antdp/authorized';

const isCheckMenu = getAuthorizedPage([{path:"/web"},{path:"/examples"}],"/examples")

```

## 页面权限判断重定向

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

## 按钮权限

```tsx mdx:preview
// 为了渲染设置的本地权限数据
sessionStorage.setItem("auth_btn",JSON.stringify(["/api/select"]))

import React from "react"
import { AuthorizedBtn ,AuthorizedConfigProvider } from "@antdp/authorized"

const Demo = ()=>{
  return (<AuthorizedConfigProvider isCheckAuth={true} >
    <AuthorizedBtn path="/api/select" >
      <button>查询</button>
    </AuthorizedBtn>
    <AuthorizedBtn path="/api/select2" >
      <button>查询2</button>
    </AuthorizedBtn>
  </AuthorizedConfigProvider>)
}
export default Demo;

```
