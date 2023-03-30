ButtonGroupPro
权限按钮组
---

ButtonGroupPro权限按钮组
> 🚧 1.废弃 type="buttonGroup" 2.暂时去除改组件权限功能,待下版本优化


### 案例

```tsx mdx:preview
import React from "react";
import { ButtonGroupPro } from '@antdp/antdp-ui';

const Demo  = ()=>(
  <ButtonGroupPro
    button={[
      {
        type: 'primary',
        label: 'Button',
        onClick: () => {},
      },
      {
        label: 'Menu',
        type: 'primary',
        menu: [
          {
            key: '1',
            label: '新增2',
            onClick: ()=>{},
          },
          {
            key: '2',
            label: '新增3',
            onClick: ()=>{},
            disabled: true,
          }
        ]
      },
    ]}
  />);
export default Demo;
```

### Props
组件继承antd的 [`Button`](https://ant.design/components/button-cn/#header)


| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| path | 权限路径 | string  |- |
| label | 按钮展示名称 | string｜React.ReactNode | - |
| option | 按钮组数据 | `Array<MenusOptionProps>` | - |
| menu | 按钮组名称 | `Array<MenusOptionProps>` | - |
| key | 按钮组唯一值 | number | - |
| ButtonandDropdown | 是否能点击按钮组的下拉菜单 | string ｜ number | - |
| type | 按钮组类型 | string ｜ number | - |
| render | 按钮组渲染 | ButtonType | - |
| badge | 按钮组徽标 | number | - |

```ts
interface MenusOptionProps extends Omit<ButtonProps, "type">, ButtonGroupProps {
  path?: string;
  label?: string | React.ReactNode;
  option?: Array<MenusOptionProps>;
  menu?: Array<MenusProps>;
  key?: number;
  ButtonandDropdown?: string | number;
  type?: ButtonType;
  render?: (...arg: any) => React.ReactNode;
  badge?: number | string
}

export interface ButtonGroupProProps {
  button: Array<MenusOptionProps>;
  className?: string
}
```
