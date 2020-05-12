@antdp/document-title
---

设置页面标题。

如果需要通过当前组件方式渲染 title，配 `title: false` 可禁用内置的 `title` 渲染机制，`@antdp/config` 默认配置 `title: false`。

> - https://github.com/umijs/umi/pull/4345/files
> - https://umijs.org/zh-CN/config#title

## Installation

```bash
npm i @antdp/document-title --save
```

## Basic Usage

```jsx
import React from 'react';
import DocumentTitle from '@antdp/document-title';

<DocumentTitle title="首页">
  <h1>Home, sweet home.</h1>
</DocumentTitle>
```
