# 权限

## 下载依赖

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
+    auth_check_url: true,
  }
});
```

### `ANTD_AUTH_CONF` 权限配置参数

| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| auth_menu | 储存菜单路由权限---本地keys | `string`  | `authMenu` |
| auth_btn | 储存按钮路径权限---本地keys | `string`  | `authBtn` |
| auth_check_url | 判断路径是否有权限的字段 默认值`menuUrl`,如果字段设置为`undefined`则`auth_menu`和`auth_btn`储存形式为 `["/web"]`,反之储存形式为`[{menuUrl:"/web"}]` | `string`  | `menuUrl` |

## 路由菜单
我们配置好`ANTD_AUTH_CONF`后，在layouts/BasicLayout.ts中添加`Authorized`
```ts
import Authorized from '@antdp/authorized';
import BasicLayout from '@antdp/basic-layouts';

const Layout = () => {
  const token =''
  return (
    <Authorized authority={!!token} redirectPath="/login">
      <BasicLayout
        projectName="Ant Design"
      />
    </Authorized>
  );
};

export default Layout;

```

这是你的路由菜单（config/router.json）
```json
[
  {
    "path": "/login",
    "component": "@/layouts/UserLayout"
  },
  {
    "path": "/",
    "component": "@/layouts/BasicLayout",
    "routes": [
      {
        "path": "/",
        "redirectTo": "/welcome"
      },
      {
        "path": "/welcome",
        "name": "首页",
        "icon": "welcome",
        "locale": "welcome",
        "component": "@/pages/Home/index"
      },
      {
        "path": "/404",
        "name": "404",
        "hideInMenu": true,
        "icon": "file-protect",
        "component": "@/pages/404"
      },
      {
        "path": "/403",
        "name": "403",
        "hideInMenu": true,
        "icon": "file-protect",
        "component": "@/pages/403"
      }
    ]
  }
]
```

登陆后后端返回的菜单列表可能如下

```js
const menus = ['/', '/welcome', '/404', '/403'];
```

### 路由匹配过程
- 1.当你登陆成功后，你需将其保存于你的sessionStorage中，储存的字段为你`ANTD_AUTH_CONF`中配的`auth_menu`字段，并在登陆后存储在`sessionStorage`中,如`sessionStorage.setItem('authMenu', JSON.stringify([]))`
- 2.当你跳转至页面时，会根据sessionStorage中`authMenu`进行权限匹配，如果没有权限则会跳往404或403页面

<strong>请保证403 和 404页面存在</strong>


## 按钮权限
很多大型项目中，也会对按钮权限进行管理,请提前配置好`ANTD_AUTH_CONF`中配的`auth_btn`字段，并在登陆后存储在`sessionStorage`中,如`sessionStorage.setItem("authBtn",JSON.stringify(['/api/select']))`

```tsx
// 为了渲染设置的本地权限数

import React from "react"
import { AuthorizedBtn } from "@antdp/authorized"
const Demo = ()=>{
  return (
    <AuthorizedBtn path="/api/select" >
      <button>按钮</button>
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

## 使用AuthorizedConfigProvider 设置按钮权限配置
使用 `AuthorizedConfigProvider`可以自己进行重新设置组件包裹内的所有按钮的权限参数，不使用默认配置的按钮权限配置
```ts
  import React from "react"
  import { AuthorizedBtn ,AuthorizedConfigProvider } from "@antdp/authorized"
  const Page = ()=>{
    useEffect(()=>{
      sessionStorage.setItem("btn",JSON.stringify([{ menuUrl:"/api/select"} ]))
    },[])
    return (
      <AuthorizedConfigProvider isCheckAuth={true} auth_btn="btn">
        <AuthorizedBtn path="/api/select" >
          <button>查询</button>
        </AuthorizedBtn>
      </AuthorizedConfigProvider>
  )
}
export default Page
```

### AuthorizedConfigProvider参数
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| auth_menu | 储存菜单路由权限---本地keys | `string`  | `authMenu` |
| auth_btn | 储存按钮路径权限---本地keys | `string`  | `authBtn` |
| auth_check_url | 判断路径是否有权限的字段 默认值`menuUrl`,如果字段设置为`undefined`则`auth_menu`和`auth_btn`储存形式为 `["/web"]`,反之储存形式为`[{menuUrl:"/web"}]` | `string`  | `menuUrl` |
| isCheckAuth | 是否检查权限 | `boolean`  | `false` |
| children | 子内容 | `string`  | - |

## License

Licensed under the MIT License.