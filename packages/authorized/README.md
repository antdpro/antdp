@antdp/authorized
---

入口公共界面

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
```