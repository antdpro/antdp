# 新增页面
这里的『页面』指配置了路由，能够通过链接直接访问的模块，要新建一个页面，通常可以在脚手架的基础上进行简单的配置。

## 页面代码结构推荐
为了让项目代码组织更加规范，让开发能够更方便的定位到相关页面组件代码，我们定义了一套规范，该规范当前只作为推荐的指导，并非强制。

```bash
src
├── components
└── pages
    ├── Welcome        # 路由组件下不应该再包含其他路由组件，基于这个约定就能清楚的区分路由组件和非路由组件了
    |   ├── components # 对于复杂的页面可以再自己做更深层次的组织，但建议不要超过三层
    |   |   ├── Form.tsx
    |   ├── index.tsx  # 页面组件的代码
    |   └── index.less # 页面样式
    ├── Order          # 路由组件下不应该再包含其他路由组件，基于这个约定就能清楚的区分路由组件和非路由组件了
    |   ├── index.tsx
    |   └── index.less
    ├── User
    |   ├── components # group 下公用的组件集合
    |   ├── Login      # group 下的页面 Login
    |   ├── Register   # group 下的页面 Register
    |   └── util.ts    # 这里可以有一些共用方法之类，不做推荐和约束，看业务场景自行做组织
    └── *              # 其它页面组件代码
```

所有路由组件（会配置在路由配置中的组件）我们推荐以大驼峰命名打平到 pages 下面第一级（复杂的项目可以增加 group 层级，在 group 下放置 pages）。不建议在路由组件内部再嵌套路由组件 - 不方便分辨一个组件是否是路由组件，而且不方便快速从全局定位到路由组件。

我们推荐尽可能的拆分路由组件为更细粒度的组件，对于多个页面可能会用到的组件我们推荐放到 src/components 中，对于只是被单个页面依赖的（区块）组件，我们推荐就近维护到路由组件文件夹下即可。

## 手动创建
新增 tsx、less 文件
在 src / pages 下创建新的 tsx，less 文件。 如果有多个相关页面，您可以创建一个新文件夹来放置相关文件。

```diff
config
src
models
  pages
+   NewPage
+     index.less
+     index.tsx
  ...
...
package.json
```

为了更好的演示，我们初始化NewPage.tsx的内容如下：
```bash
export default () => {
  return <div>New Page</div>;
};
```

## 新增路由
在脚手架中我们通过嵌套路由来实现布局模板。config文件中的routes.json 是一个数组，其中第一级数据就是我们的布局，如果你需要新增布局可以再直接增加一个新的一级数据。
```json
[
  // new
  {
    "path": "/new",
    "name": "新页面",
    "component": "@page/NewPage",
    "icon": "home"
  },
]
```

路由配置完成后，访问页面即可看到效果，如果需要在菜单中显示，需要配置 name，icon，hideMenu等来辅助生成菜单。

具体值如下：

  - ``index`` 默认跳转
  - ``path`` 路径 
  - ``name`` 名称 
  - ``icon`` 图标 
  - ``components`` 对应页面路径
  - ``children`` 子集 路由 
  - ``hideInMenu`` 是否隐藏菜单
  - ``side`` 控制顶部和侧边菜单展示是否联动

布局及路由都配置好之后，回到之前新建的 ```index.tsx```，可以开始写业务代码了！

## 路由菜单权限
开启权限配置。需要在 config/config.ts 提供权限配置。
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
+    auth_check_url: '',
  }
});
```

### `ANTD_AUTH_CONF` 权限配置参数

| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| auth_menu | 储存菜单路由权限---本地keys | `string`  | `authMenu` |
| auth_btn | 储存按钮路径权限---本地keys | `string`  | `authBtn` |
| auth_check_url | 判断路径是否有权限的字段 默认值`menuUrl`,如果字段设置为`undefined`则`auth_menu`和`auth_btn`储存形式为 `["/web"]`,反之储存形式为`[{menuUrl:"/web"}]` | `string`  | `menuUrl` |

### 路由菜单

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
        "path": "/*",
        "component": "@/pages/404"
      },
      {
        "path": "/welcome",
        "name": "首页",
        "icon": "welcome",
        "locale": "welcome",
        "component": "@/pages/Home/index"
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
- 2.当你跳转至页面时，会根据sessionStorage中`authMenu`进行权限匹配，如果没有权限则会跳往403页面

<strong>请保证403 和 404页面存在</strong>


## License

Licensed under the MIT License.
