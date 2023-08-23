---
nav: 组件
group: 依赖
order: 4
---

## @antdp/document-title

[![npm](https://img.shields.io/npm/v/@antdp/document-title.svg?maxAge=3600)](https://www.npmjs.com/package/@antdp/document-title)
[![npm download](https://img.shields.io/npm/dm/@antdp/document-title.svg?style=flat)](https://www.npmjs.com/package/@antdp/document-title)

设置页面标题。

如果需要通过当前组件方式渲染 title，配 `title: false` 可禁用内置的 `title` 渲染机制，`@antdp/config` 默认配置 `title: false`。

> - https://github.com/umijs/umi/pull/4345/files
> - https://umijs.org/zh-CN/config#title

## Installation

```bash
npm i @antdp/document-title --save
```

## Basic Usage

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->

```tsx mdx:preview
import DocumentTitle from '@antdp/document-title';

const Demo = () => (
  <DocumentTitle title="展示浏览器标题 - 首页">
    <h1>Home, sweet home.</h1>
  </DocumentTitle>
);

export default Demo;
```
