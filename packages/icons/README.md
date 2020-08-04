@antdp/icons
---

> ⚠️ 包已经过时，[umi-plugin-antd-icon-config](https://github.com/umijs/umi-plugin-antd-icon-config)

解决 antd 4.x Icon 组件不存在问题，通过老的方式调用新的图标组件，依赖 [`@ant-design/icons`](https://github.com/ant-design/ant-design-icons/tree/master/packages/icons-react)，当前组件用于过渡，解决老的工程报错问题，菜单传图标名称显示图标问题。

> 从 4.0 开始，antd 不再内置 Icon 组件，请使用独立的包 @ant-design/icons。

## Installation

```bash
npm i @antdp/icons --save
```

## Basic Usage

```jsx
import Icon from '@antdp/icons';

export default () => {
  return (
    <Icon type="smile" />
  );
};
```

## Component Interface

```typescript
interface AntdIconProps {
  type?: string;
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  style?: React.CSSProperties;
}
```

### 用新的 @ant-design/icons 替换字符串类型的 icon 属性值

```diff
  import { Avatar, Button, Result } from 'antd';
+ import { QuestionOutlined, UserOutlined } from '@ant-design/icons';

  ReactDOM.render(
    <div>
-     <Button type="primary" shape="circle" icon="search" />
+     <Button type="primary" shape="circle" icon={SearchOutlined} />
-     <Avatar shape="square" icon="user" />
+     <Avatar shape="square" icon={UserOutlined} />
      <Result
-       icon="question"
+       icon={<QuestionOutlined />}
        title="Great, we have done all the operations!"
        extra={<Button type="primary">Next</Button>}
      />
    </div>,
    mountNode,
  );
```

### 将 v3 Icon 组件转换成 @ant-design/icons 中引入

```diff
- import { Icon, Input } from 'antd';
+ import { Input } from 'antd';
+ import Icon, { CodeFilled, SmileOutlined, SmileTwoTone } from '@ant-design/icons';

  const HeartSvg = () => (
    <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
      <path d="M923 plapla..." />
    </svg>
  );

  const HeartIcon = props => <Icon component={HeartSvg} {...props} />;

  ReactDOM.render(
    <div>
-     <Icon type="code" theme="filled" />
+     <CodeFilled />
-     <Icon type="smile" theme="twoTone" twoToneColor="#eb2f96" />
+     <SmileTwoTone twoToneColor="#eb2f96" />
-     <Icon type="code" theme={props.fill ? 'filled' : 'outlined'} />
+     <LegacyIcon type="code" theme={props.fill ? 'filled' : 'outlined'} />
      <HeartIcon />
      <Icon viewBox="0 0 24 24">
        <title>Cool Home</title>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </Icon>
      <Input suffix={<SmileOutlined />} />
    </div>,
    mountNode,
  );
```