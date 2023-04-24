# 快速上手

## 环境准备
首先得有 [node](https://nodejs.org/en)，并确保 `node` 版本是 14 或以上。（推荐用 [nvm](https://github.com/nvm-sh/nvm) 来管理 node 版本，windows 下推荐用 [nvm-windows](https://github.com/coreybutler/nvm-windows)）
mac 或 linux 下安装 nvm。

```bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
$ nvm -v
0.39.1
```

安装 node。
```bash
$ nvm install 16
$ nvm use 16
$ node -v
v16.10.0
```

然后需要包管理工具。node 默认包含 npm，但也可以选择其他方案，
- [pnpm](https://pnpm.io/installation), umi 团队推荐
- [Yarn](https://yarnpkg.com/getting-started/install)

安装 pnpm。
```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
$ pnpm -v
7.3.0
```

## 创建ts项目
```shell 
# npm 6.x
$ npm init antdp my-app --example basic
# npm 7+, extra double-dash is needed:
$ npm init antdp my-app -- --example basic

$ yarn create antdp [appName]
# or npm
$ npm create antdp my-app
# or npx
$ npx create-antdp my-app
```

或者直接下载: [`basic.zip`](https://antdpro.github.io/antdp/zip/basic.zip)

### 创建js项目
```shell
# npm 6.x
$ npm init antdp my-app --example antdp-bsae
# npm 7+，extra double-dash is needed:
$ npm init antdp my-app -- --example antdp-bsae
```

## 启动项目

- `yarn install`下载依赖

- `yarn start`启动项目， 项目启动成功，你就会看见如下。

```bash
yarn run v1.22.17
$ lerna exec --scope @example/antdp-base -- npm run start
lerna notice cli v6.6.1
lerna notice filter including "@example/antdp-base"
lerna info filter [ '@example/antdp-base' ]
lerna info Executing command in 1 package: "npm run start"

> start
> max dev

info  - [你知道吗？] CSS 不够灵活、编写动态样式太繁琐怎么办？试试 styled-components 插件，详见 https://umijs.org/docs/max/styled-components
info  - Umi v4.0.65
info  - Preparing...
[HPM] Proxy created: /api/  -> https://preview.pro.ant.design
[HPM] Proxy rewrite rule created: "^" ~> ""
        ╔════════════════════════════════════════════════════╗
        ║ App listening at:                                  ║
        ║  >   Local: http://localhost:8000                  ║
ready - ║  > Network: http://192.168.188.205:8000            ║
        ║                                                    ║
        ║ Now you can open browser with the above addresses↑ ║
        ╚════════════════════════════════════════════════════╝
```

在浏览器里打开 http://localhost:8000/

## 部署发布
执行 `yarn build` 命令，

```bash
> umi build
event - compiled successfully in 1179 ms (567 modules)
event - build index.html
```

产物默认会生成到 ./dist 目录下，

```bash
./dist
├── index.html
├── umi.css
└── umi.js
```

完成构建后，就可以把 dist 目录部署到服务器上了。

## License

Licensed under the MIT License.