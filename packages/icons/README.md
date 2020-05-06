@antdp/icons
---

解决 antd 4.x Icon 组件不存在问题，解决部分图标问题，正常使用 [`@ant-design/icons`](https://github.com/ant-design/ant-design-icons/tree/master/packages/icons-react)。

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