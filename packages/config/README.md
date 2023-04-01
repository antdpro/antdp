@antdp/config
---

[![npm](https://img.shields.io/npm/v/@antdp/config.svg?maxAge=3600)](https://www.npmjs.com/package/@antdp/config)
[![npm download](https://img.shields.io/npm/dm/@antdp/config.svg?style=flat)](https://www.npmjs.com/package/@antdp/config)

将 umi 配置包裹一层

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

## Define

- `ANTD_IS_TABS` 是否显示 Tab 选项卡，默认显示 true
- `ANTD_IS_IFRAME_RENDER` 是否使用 iframe 展示内容
- `ANTD_IS_BREADCRUMB` 是否开启父子路由面包屑
- `ANTD_AUTH_CONF` 是否开启权限验证 默认值`false`不启用 参数：
  - `auth_menu` 储存菜单路由权限---本地keys 默认值`authMenu`
  - `auth_btn` 储存按钮路径权限---本地keys 默认值 `authBtn`
  - `auth_check_url` 判断路径是否有权限的字段 默认值`menuUrl`,如果字段设置为`undefined`则`auth_menu`和`auth_btn`储存形式为 `["/web"]`,反之储存形式为`[{menuUrl:"/web"}]`,
- `ANTD_MENU_IS_SHOW` 是否显示 左侧菜单
- `ANTD_HEAD_IS_SHOW` 是否显示 head头部 
- `ANTD_MENU_TOP_LEFT` 父级菜单展示顶部 ，子集菜单展示侧边
- `ANTD_TITLE_TOP` 标题 放在 头部 ,菜单放在头部下面

## Locale
继承于umi [`@umijs/plugin-locale`](https://umijs.org/zh-CN/plugins/plugin-locale)
- `default` 当检测不到具体语言时，展示 default 中指定的语言。 默认值`zh-CN`
- `antd`:开启后，支持 antd 国际化 默认值`true`,
- `title`:标题国际化 默认值`true`,
- `baseNavigator`:开启浏览器语言检测。 默认值`true`,
- `baseSeparator`: 国家（lang） 与 语言（language） 之间的分割符。 默认值`-`返回的语言及目录文件为 zh-CN、en-US、sk 等。,

[更多配置](https://umijs.org/docs/api/config)