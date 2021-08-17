@antdp/config
---

将 umi 配置包裹一层

## Installation

```bash
npm i @antdp/config --save-dev
```

## Basic Usage

```js
import config from '@antdp/config';
import router from './router.json';
import proxy from './proxy';

export default config(router, {
  proxy,
});
```

## Interface

```typescript
import { IConfig, IRoute } from 'umi';

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
- `ANTD_AUTH_CONF` 是否开启权限验证
- `ANTD_MENU_IS_SHOW` 是否显示 左侧菜单
- `ANTD_HEAD_IS_SHOW` 是否显示 head头部 

## favicon

```js
export default {
  // 配置 favicon 地址（href 属性）
  favicon: '/assets/favicon.ico', 
}
```