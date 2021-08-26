ButtonGroupPro
权限按钮组
---

ButtonGroupPro权限按钮组

### 基础示例

<!--DemoStart--> 
```jsx
import React, { Component } from 'react';
import { ButtonGroupPro } from '@antdp/antdp-ui'
export default class Home extends Component {
  render() {
    return (
      <div>
       <ButtonGroupPro
          button={[
            {
              type: 'primary',
              label: 'Button',
              onClick: () => {},
              path:"/demo/add1",
            },
            {
              type: 'buttonGroup',
              ButtonandDropdown: true,
              option:[
                { type: 'primary', label: '新增' },
                { type: 'primary',label: '导出'},
                { type: 'primary',label: '设置列' },
              ],
            },
            {
              label: 'Menu',
              type: 'primary',
              menu: [
                {
                  key: '1',
                  label: '新增2',
                  onClick: ()=>{},
                  path:"/demo/add2",
                },
                {
                  key: '2',
                  label: '新增3',
                  onClick: ()=>{},
                  disabled: true,
                  path:"/demo/add3",
                }
              ]
            }
          ]}
        />
      </div>
    )
  }
}
```
<!--End-->

### Props
组件继承antd [`Button`](https://ant.design/components/button-cn/#header)
```ts
interface MenusOptionProps extends Omit<ButtonProps, "type">, ButtonGroupProps {
  path?: string;
  label?: string | React.ReactNode;
  option?: Array<MenusOptionProps>;
  menu?: Array<MenusProps>;
  key?: number;
  ButtonandDropdown?: string | number;
  type?: ButtonType | "buttonGroup";
  render?: (...arg: any) => React.ReactNode;
  badge?: number | string
}

export interface ButtonGroupProProps {
  button: Array<MenusOptionProps>;
  className?: string
}
```
