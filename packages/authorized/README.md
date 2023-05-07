@antdp/authorized
---

[![npm](https://img.shields.io/npm/v/@antdp/authorized.svg?maxAge=3600)](https://www.npmjs.com/package/@antdp/authorized)
[![npm download](https://img.shields.io/npm/dm/@antdp/authorized.svg?style=flat)](https://www.npmjs.com/package/@antdp/authorized)

权限判断组件或方法，通过判断是否进入主界面还是登录界面。

## Installation

```bash
$ npm i @antdp/authorized  # yarn add @antdp/authorized
```


## 启用方式
配置开启。同时需要 config/config.ts 提供权限配置。
```diff
import config from '@antdp/config';
import proxy from './proxy';
import router from './router.json';
export default config(router, {
  proxy,
  define: {
+  ANTD_AUTH_CONF: {
+    auth_menu: 'authMenu',
+    auth_btn: 'authBtn',
+    auth_check_url: false,
  }
});
```

### ANTD_AUTH_CONF参数
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| auth_menu | 储存菜单路由权限---本地keys | `string`  | `authMenu` |
| auth_btn | 储存按钮路径权限---本地keys | `string`  | `authBtn` |
| auth_check_url | 判断路径是否有权限的字段 默认值`menuUrl`,如果字段设置为`false`则`auth_menu`和`auth_btn`储存形式为 `["/web"]`,反之储存形式为`[{menuUrl:"/web"}]` | `string`  | `menuUrl` |



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

## Authorized参数

| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| authority | 准入权限/权限判断 | `boolean`  | - |
| redirectPath | 权限异常时重定向的页面路由 | `string`  | - |
| children | 权限异常时重定向的页面路由 | `React.ReactNode`  | - |

## 按钮权限

```tsx mdx:preview
// 为了渲染设置的本地权限数据
import React from "react"
import { AuthorizedBtn } from "@antdp/authorized"
const Demo = ()=>{
  return (
    <AuthorizedBtn path="/api/select2" >
      <button>查询按钮</button>
    </AuthorizedBtn>
  )
}
export default Demo;
```

### AuthorizedBtn参数
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| path | 权限路径 | `string`  | - |
| children | 展示内容 | `React.ReactNode`  | - |

## AuthorizedConfigProvider 设置按钮权限配置

使用 `AuthorizedConfigProvider`可以自己进行重新设置组件包裹内的所有按钮的权限参数，不使用默认配置的按钮权限配置
```tsx mdx:preview
sessionStorage.setItem("authBtn",JSON.stringify([{menuUrl:"/api/select"}]))

import React from "react"
import { AuthorizedBtn ,AuthorizedConfigProvider } from "@antdp/authorized"

const Demo = ()=>{
  return (
  <AuthorizedConfigProvider isCheckAuth={true} >
    <AuthorizedBtn path="/api/select" >
      <button>查询</button>
    </AuthorizedBtn>
  </AuthorizedConfigProvider>
  )
}
export default Demo;
```

### AuthorizedConfigProvider参数
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| auth_menu | 储存菜单路由权限---本地keys | `string`  | `authMenu` |
| auth_btn | 储存按钮路径权限---本地keys | `string`  | `authBtn` |
| auth_check_url | 判断路径是否有权限的字段 默认值`menuUrl`,如果字段设置为`false`则`auth_menu`和`auth_btn`储存形式为 `["/web"]`,反之储存形式为`[{menuUrl:"/web"}]` | `string`  | `menuUrl` |
| isCheckAuth | 是否检查权限 | `boolean`  | `false` |
| children | 子内容 | `string`  | - |


## 判断菜单是否有权限
```ts
import { getAuthorizedPage } from '@antdp/authorized';
const isCheckMenu = getAuthorizedPage([{path:"/web"},{path:"/examples"}],"/examples")

```

### getAuthorizedPage参数
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| getAuthorizedPage | 页面权限是否有权限 | `(menuRouter: Array<any>, path: string) => boolean | 404 | 403`  | - |












