CardPro卡片
通用卡片容器。
---

最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。

### 基础示例

<!--DemoStart--> 
```jsx
import React, { Component } from 'react';
import { CardPro } from '@antdp/antdp-ui'
export default class Home extends Component {
  render() {
    return (
      <div>
        <CardPro>
          <div>我是CardPro卡片组件</div>
        </CardPro>
      </div>
    )
  }
}
```
<!--End-->

### Props
组件继承 [`Card`](https://ant.design/components/card-cn/#header)
```ts
interface CarProProps extends CardProps {
  children?: React.ReactNode;
  className?: string;
}
```
