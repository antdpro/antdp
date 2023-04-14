@antdp/layout-tabs
---

[![npm version](https://img.shields.io/npm/v/@antdp/layout-tabs.svg?maxAge=3600)](https://www.npmjs.com/package/@antdp/layout-tabs)
[![npm download](https://img.shields.io/npm/dm/@antdp/layout-tabs.svg?style=flat)](https://www.npmjs.com/package/@antdp/layout-tabs)

用于主框架选项卡组件。解决 `antd` 组件 `Tabs` 切换性能慢的问题。

## Tab 选项卡技术实现

测试项 | 页面切换重新渲染 | 页面切换 “隐藏” | iframe src 嵌入页面 | iframe 组件生成
---- | ---- | ---- | ---- | ----
性能 | ✅💯 | ⚠️(还需优化) |  ✅💯 | ✅💯 
页面状态 | ⚠️(有代码量) | ✅ |  ✅ |  ✅ 
路由使用 |  ✅ |  ✅ |  ❌(浏览器地址栏无变化) |  ✅ 
antd 组件 |  ✅ |  ✅ |  ✅ |  ❌(大量弹出类组件位置错乱) 
主框架交互 |  ✅ |  ✅ |  ⚠️(局限以内，父页面交互复杂) |  ✅ 
样式加载 |  ✅ |  ✅ |  ✅ | ⚠️(还需优化)

## Installation

```bash
npm i @antdp/layout-tabs --save # yarn add @antdp/layout-tabs
```

## 基本使用

```tsx
import React from 'react';
import LayoutTabs from '@antdp/layout-tabs';

const Demo = ()=>{
  return (
    <LayoutTabs
      // 菜单路由信息
      dataSource={[]}
    />
  )
}

export default Demo;

```

## API

| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| dataSource | 菜单路由数据 | `LayoutTabsRouterProps[]`  | - |
| bodyPadding | 内容边距 | `string | number`  | - |


### LayoutTabsRouterProps
| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| icon | logo | `string`  | - |
| key | key健 | `string`  | - |
| name | 名称 | `string`  | - |
| path | 路径 | `string`  | - |
| exact | 是否匹配路由 | `boolean`  | - |
| location | 路由信息 | `any`  | - |
| match | 匹配信息 | `any`  | - |
| element | 自定义组件 | `React.ReactNode`  | - |


通过配置 [`@antdp/config`](https://www.npmjs.com/package/@antdp/config)，来解决是否重新渲染或者 `iframe` 展示页面等功能