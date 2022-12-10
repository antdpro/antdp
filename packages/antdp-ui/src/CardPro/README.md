CardPro 卡片
---

通用卡片容器。最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。

> 🚧 该组件为内用组件， 取消了 `Card` 默认的 `border`<!--rehype:style=color: #e00000;-->， <!--rehype:style=color: #e00000;--> 支持自定义样式
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

### 基础示例

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx    mdx:preview
import React from "react"
import { CardPro } from '@antdp/antdp-ui';

const Demo = () => (
  <div>
    <CardPro>
      <div>我是CardPro卡片组件</div>
    </CardPro>
  </div>
);

export default Demo
```

### Props

组件继承 [`Card`](https://ant.design/components/card-cn/#header)

| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| children | 组件渲染的内容 | React.ReactNode  | - |
| className | 组件样式 | string | - |

```ts
interface CarProProps extends CardProps {
  children?: React.ReactNode;
  className?: string;
}
```
