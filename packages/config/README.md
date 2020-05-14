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
- `ANTD_IS_IFRAME_RENDER` 是否显示 Tab 选项卡，默认显示 true