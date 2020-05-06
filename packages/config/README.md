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