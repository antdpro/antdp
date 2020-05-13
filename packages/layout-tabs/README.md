@antdp/layout-tabs
---

用于主框架选项卡组件。解决 antd 组件 `Tabs` 切换性能慢的问题。

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
npm i @antdp/layout-tabs --save
```

## Basic Usage

```jsx
import React from 'react';
import LayoutTabs from '@antdp/layout-tabs';

<LayoutTabs
  isReRender={true}
  activeKey={location.pathname}
  dataSource={[]}
/>
```

## Component Interface

```typescript
interface LayoutTabsRouter {
  component?: JSX.Element;
  exact?: boolean;
  icon: string;
  key: string;
  name: string;
  path: string;
}

interface LayoutTabsProps {
  /**
   * 是否重新渲染页面，默认 false
   */
  isReRender?: boolean;
  /**
   * 是否使用 iframe 来渲染页面
   */
  iframeRender?: boolean;
  activeKey?: string[]
  dataSource?: LayoutTabsRouter[]
  children?: React.ReactNode;
}
```
