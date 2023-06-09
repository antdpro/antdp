@antdp/config
---

[![npm](https://img.shields.io/npm/v/@antdp/config.svg?maxAge=3600)](https://www.npmjs.com/package/@antdp/config)
[![npm download](https://img.shields.io/npm/dm/@antdp/config.svg?style=flat)](https://www.npmjs.com/package/@antdp/config)

我们已将 umi 配置包裹一层对于， antdp中能使用的自定义配置，你可以使用项目根目录的  `config/config.ts`进行配置

## Installation

```bash
npm i @antdp/config --save-dev
```

## Basic Usage

```js
// config/config.{js|ts}

//二次封装的umi配置
import config from '@antdp/config';
// 路由数据
import router from './router.json';
/**开发代理配置*/
import proxy from './proxy';

export default config(router, {
  proxy,
});
```

## Interface

```typescript
import { IConfig, IRoute } from '@umijs/max';

export interface Options extends Omit<IConfig, 'routes'> {
  routes: IRoute;
}

export interface Config {
  (routes?: IRoute, optiosn?: Options): IConfig;
}

declare var config: Config;
export default config;
```

## define配置

### ANTD_IS_TABS

是否显示 Tab 选项卡，默认值`true`显示

```diff
import config from '@antdp/config';
import proxy from './proxy';
import router from './router.json';
export default config(router, {
  proxy,
  define: {
+    ANTD_IS_TABS: true
  },
);
```

### ANTD_IS_IFRAME_RENDER

是否使用 iframe 展示内容，默认值`true`开启

```diff
import config from '@antdp/config';
import proxy from './proxy';
import router from './router.json';
export default config(router, {
  proxy,
  define: {
+    ANTD_IS_IFRAME_RENDER: true
  },
);
```
### ANTD_IS_BREADCRUMB

```diff
import config from '@antdp/config';
import proxy from './proxy';
import router from './router.json';
export default config(router, {
  proxy,
  define: {
+    ANTD_IS_BREADCRUMB: true
  },
);
```

### ANTD_AUTH_CONF

是否开启权限验证 默认值`false`不启用

- `auth_menu` 储存菜单路由权限---本地keys 默认值`authMenu`
- `auth_btn` 储存按钮路径权限---本地keys 默认值 `authBtn`
- `auth_check_url` 判断路径是否有权限的字段 默认值`menuUrl`,如果字段设置为`undefined`则`auth_menu`和`auth_btn`储存形式为 `["/web"]`,反之储存形式为`[{menuUrl:"/web"}]`,

```diff
import config from '@antdp/config';
import proxy from './proxy';
import router from './router.json';
export default config(router, {
  proxy,
  define: {
+    ANTD_AUTH_CONF: {
+      auth_menu:"authMenu",
+      auth_btn:"authBtn",
+      auth_check_url:undefined
    }
  },
);

```

### ANTD_MENU_IS_SHOW

是否显示 左侧菜单,默认值`true`

```diff
import config from '@antdp/config';
import proxy from './proxy';
import router from './router.json';
export default config(router, {
  proxy,
  define: {
+    ANTD_MENU_IS_SHOW: true
  },
);
```

### ANTD_HEAD_IS_SHOW

是否显示 head头部，默认值`true`

```diff
import config from '@antdp/config';
import proxy from './proxy';
import router from './router.json';
export default config(router, {
  proxy,
  define: {
+    ANTD_HEAD_IS_SHOW: true
  },
);
```

### ANTD_MENU_SEARCH_IS_SHOW

是否开启菜单栏搜索，默认值`false`

```diff
import config from '@antdp/config';
import proxy from './proxy';
import router from './router.json';
export default config(router, {
  proxy,
  define: {
+    ANTD_MENU_SEARCH_IS_SHOW: true
  },
);
```

## @umijs/max配置

### request

开启 `useRequest` 和 `request`，默认`未开启`

- `dataField` 该配置的默认值是 data。该配置的主要目的是方便 useRequest 直接消费数据。如果你想要在消费数据时拿到后端的原始数据，需要在这里配置 `dataField` 为 ''

```diff
import config from '@antdp/config';
import proxy from './proxy';
import router from './router.json';
export default config(router, {
  proxy,
  define: {},
+  request:{}
);
```

### react-query

开启`react-query`，默认`未开启`

- `devtool`: boolean，是否开启 react query 官方 devtool 工具，默认 `true`
- `queryClient`: boolean, 是否注册全局的 QueryClient 和 QueryClientProvier，默认 `true`

```diff
import config from '@antdp/config';
import proxy from './proxy';
import router from './router.json';
export default config(router, {
  proxy,
  define: {},
+  reactQuery: {
     // 是否开启 react query 官方 devtool 工具
+    devtool: false,
+    queryClient: true,
  },
);
```

### useModel

开启`useModel`，默认`未开启`

```diff
import config from '@antdp/config';
import proxy from './proxy';
import router from './router.json';
export default config(router, {
  proxy,
  define: {},
+  model: {},
);
```

### dva

开启`dva`，默认`未开启`

```diff
import config from '@antdp/config';
import proxy from './proxy';
import router from './router.json';
export default config(router, {
  proxy,
  define: {},
+  dva: {},
);
```

### styled-components

[styled-components](https://styled-components.com/) 样式方案

- `babelPlugin`: Object，开启 styled-components 的 babel 插件，仅 dev 模式有效
比如：

```diff
import config from '@antdp/config';
import proxy from './proxy';
import router from './router.json';
export default config(router, {
  proxy,
  define: {},
+  styledComponents: {},
);
```

### valtio

`valtio` 数据流方案

```diff
import config from '@antdp/config';
import proxy from './proxy';
import router from './router.json';
export default config(router, {
  proxy,
  define: {},
+  valtio: {},
);
```


[更多配置参考 umi](https://umijs.org/docs/api/config)
