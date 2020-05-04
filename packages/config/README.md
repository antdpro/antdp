@antdp/config
---

将 umi 配置包裹一层

```bash
npm i @antdp/config --save-dev
```


```js
import config from '@antdp/config';
import router from './router.json';

export default config(router, {
  
});
```