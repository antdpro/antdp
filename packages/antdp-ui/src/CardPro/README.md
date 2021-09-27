CardPro 卡片
---

通用卡片容器。最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。

> 🚧 没有什么卵用的组件，只是在默认的 `Card` 添加了个默认的 `padding`<!--rehype:style=color: #e00000;-->，关键是 `padding`<!--rehype:style=color: #e00000;--> 这个玩意儿，还不支持自定义。
<!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;-->

### 基础示例

```jsx
import ReactDOM from 'react-dom';
import { CardPro } from '@antdp/antdp-ui';

const Demo = () => (
  <div style={{ }}>
    <CardPro>
      <div>我是CardPro卡片组件</div>
    </CardPro>
  </div>
);

ReactDOM.render(<Demo />, _mount_);
```

### Props

组件继承 [`Card`](https://ant.design/components/card-cn/#header)

```ts
interface CarProProps extends CardProps {
  children?: React.ReactNode;
  className?: string;
}
```
