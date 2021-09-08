Ant Design Project
---

[![Build & Deploy](https://github.com/antdpro/antdp/actions/workflows/ci.yml/badge.svg)](https://github.com/antdpro/antdp/actions/workflows/ci.yml)

一个基于 [antd](https://github.com/ant-design/ant-design/) 和 [umi](https://github.com/umijs/umi) 的初始级别项目，集成路由、[`dva`](https://github.com/dvajs/dva)(Redux)、选项卡等特性，用于简化 [antd 4.x +](https://github.com/ant-design/ant-design) 的部分使用。

[![Ant Design Project](https://user-images.githubusercontent.com/1680273/130326861-d11b074b-c8cc-4257-8e58-2ea9acc49930.png)](https://antdpro.github.io/antdp/#/example)

### Features

- 🪖 简化 [antd 4.x +](https://github.com/ant-design/ant-design) 和 [umi](https://github.com/umijs/umi) 框架配置使用；
- 📦 减少项目配置和依赖，将配置集成到包中开箱即用；
- 🐝 更简单直观的配置权限和更改 Layout；
- 💋 支持配置路由参数 `/router/:id`；
- 🤡 支持 `tab` 选项卡功能。

### Quick start

从示例之一初始化项目，让我们快速创建一个 React 应用程序：

```shell
# npm 6.x
$ npm init antdp my-app --example antdp-base
# npm 7+, extra double-dash is needed:
$ npm init antdp my-app -- --example antdp-base

$ yarn create antdp [appName]
# or npm
$ npm create antdp my-app
# or npx
$ npx create-antdp my-app
```

或者直接下载: [`antdp-base.zip`](https://antdpro.github.io/antdp/zip/antdp-base.zip)

### Open in CodeSandbox

[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/s/github/antdpro/antdp/tree/master/examples/antdp-base)

用户名密码： admin/admin

直接下载实例下载本地预览: [`antdp-base.zip`](https://antdpro.github.io/antdp/zip/antdp-base.zip)

### Packages

This git repository is a repo built using Lerna. It contains several packages:

Package | Version | Description
---- | ---- | ----
[`@antdp/authorized`](https://www.npmjs.com/package/@antdp/authorized) | [![npm](https://img.shields.io/npm/v/@antdp/authorized.svg?maxAge=3600)](https://www.npmjs.com/package/@antdp/authorized) | - |
[`@antdp/basic-layouts`](https://www.npmjs.com/package/@antdp/basic-layouts) | [![npm](https://img.shields.io/npm/v/@antdp/basic-layouts.svg?maxAge=3600)](https://www.npmjs.com/package/@antdp/basic-layouts) | - |
[`@antdp/antdp-ui`](https://www.npmjs.com/package/@antdp/antdp-ui) | [![npm](https://img.shields.io/npm/v/@antdp/antdp-ui.svg?maxAge=3600)](https://www.npmjs.com/package/@antdp/antdp-ui) | - |
[`@antdp/document-title`](https://www.npmjs.com/package/@antdp/document-title) | [![npm](https://img.shields.io/npm/v/@antdp/document-title.svg?maxAge=3600)](https://www.npmjs.com/package/@antdp/document-title) | - |
[`@antdp/fullscreen`](https://www.npmjs.com/package/@antdp/fullscreen) | [![npm](https://img.shields.io/npm/v/@antdp/fullscreen.svg?maxAge=3600)](https://www.npmjs.com/package/@antdp/fullscreen) | - |
[`@antdp/user-login`](https://www.npmjs.com/package/@antdp/user-login) | [![npm](https://img.shields.io/npm/v/@antdp/user-login.svg?maxAge=3600)](https://www.npmjs.com/package/@antdp/user-login) | - |
[`@antdp/layout-tabs`](https://www.npmjs.com/package/@antdp/layout-tabs) | [![npm](https://img.shields.io/npm/v/@antdp/layout-tabs.svg?maxAge=3600)](https://www.npmjs.com/package/@antdp/layout-tabs) | - |
[`@antdp/config`](https://www.npmjs.com/package/@antdp/config) | [![npm](https://img.shields.io/npm/v/@antdp/config.svg?maxAge=3600)](https://www.npmjs.com/package/@antdp/config) | - |
[`@antdp/dependencies`](https://www.npmjs.com/package/@antdp/dependencies) | [![npm](https://img.shields.io/npm/v/@antdp/dependencies.svg?maxAge=3600)](https://www.npmjs.com/package/@antdp/dependencies) | - |
[~~`@antdp/icons`~~](https://www.npmjs.com/package/@antdp/icons) | [![npm](https://img.shields.io/npm/v/@antdp/icons.svg?maxAge=3600)](https://www.npmjs.com/package/@antdp/icons) | - |
[`@antdp/page-loading`](https://www.npmjs.com/package/@antdp/page-loading) | [![npm](https://img.shields.io/npm/v/@antdp/page-loading.svg?maxAge=3600)](https://www.npmjs.com/package/@antdp/page-loading) | - |

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

### 开发

```bash
npm install               # 按照项目依赖
npm run install           # 按照【子包】和【实例】依赖

npm run watch:config      # 实时监听包输出 JS

npm run start:website     # 运行文档网站
npm run build:antdp-base  # 运行实例
```

### License

Licensed under the MIT License.
