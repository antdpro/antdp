Ant Design Project
---

一个基于 [antd](https://github.com/ant-design/ant-design/) 和 [umi](https://github.com/umijs/umi) 的初始级别项目，集成路由、Redux、选项卡等特性。

### 发布版本

```shell
npm run version -- patch # 配置的命令快捷方式，与下面命令效果相同
lerna version --no-changelog patch
```

发布版本可选参数，通过该关键字增加版本。

```bash
lerna version [major | minor | patch | premajor | preminor | prepatch | prerelease]
```

- `major` - 重大的 `1.1.1 => 2.0.0`
- `minor` - 小调 `1.1.1 => 1.2.0` 中间版本变化
- `patch` - 补丁 `1.1.1 => 1.1.2` 小版本递增
- `premajor` - 预发布重大的 `1.1.1 => 2.0.0-alpha.0`
- `preminor` - 预发布小调 `1.1.1 => 1.2.0-alpha.0`
- `prepatch` - 预发布补丁 `1.1.1 => 1.1.2-alpha.0`
- `prerelease` - 预发行 `1.1.1 => 1.1.2-alpha.0`

### Packages

This git repository is a repo built using Lerna. It contains several packages:

Package | Version | Description
---- | ---- | ----
[`@antdp/authorized`](https://www.npmjs.com/package/@antdp/authorized) | [![npm](https://img.shields.io/npm/v/@antdp/authorized.svg?maxAge=3600)](https://www.npmjs.com/package/@antdp/authorized) | - |
[`@antdp/user-login`](https://www.npmjs.com/package/@antdp/user-login) | [![npm](https://img.shields.io/npm/v/@antdp/user-login.svg?maxAge=3600)](https://www.npmjs.com/package/@antdp/user-login) | - |
[`@antdp/basic-layouts`](https://www.npmjs.com/package/@antdp/basic-layouts) | [![npm](https://img.shields.io/npm/v/@antdp/basic-layouts.svg?maxAge=3600)](https://www.npmjs.com/package/@antdp/basic-layouts) | - |
[`@antdp/layout-tabs`](https://www.npmjs.com/package/@antdp/layout-tabs) | [![npm](https://img.shields.io/npm/v/@antdp/layout-tabs.svg?maxAge=3600)](https://www.npmjs.com/package/@antdp/layout-tabs) | - |
[`@antdp/config`](https://www.npmjs.com/package/@antdp/config) | [![npm](https://img.shields.io/npm/v/@antdp/config.svg?maxAge=3600)](https://www.npmjs.com/package/@antdp/config) | - |
[`@antdp/dependencies`](https://www.npmjs.com/package/@antdp/dependencies) | [![npm](https://img.shields.io/npm/v/@antdp/dependencies.svg?maxAge=3600)](https://www.npmjs.com/package/@antdp/dependencies) | - |
[`@antdp/icons`](https://www.npmjs.com/package/@antdp/icons) | [![npm](https://img.shields.io/npm/v/@antdp/icons.svg?maxAge=3600)](https://www.npmjs.com/package/@antdp/icons) | - |
[`@antdp/page-loading`](https://www.npmjs.com/package/@antdp/page-loading) | [![npm](https://img.shields.io/npm/v/@antdp/page-loading.svg?maxAge=3600)](https://www.npmjs.com/package/@antdp/page-loading) | - |
