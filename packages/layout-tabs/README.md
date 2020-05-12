@antdp/layout-tabs
---

用于主框架选项卡组件。解决 antd 组件 `Tabs` 切换性能慢的问题。

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
  activeKey?: string[]
  dataSource?: LayoutTabsRouter[]
  children?: React.ReactNode;
}
```