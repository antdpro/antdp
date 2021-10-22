ButtonGroupPro
权限按钮组
---

ButtonGroupPro权限按钮组

### 基础示例

<!--DemoStart--> 
```jsx
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { ButtonGroupPro } from '@antdp/antdp-ui'
const Demo  = ()=> {
    return (
      <div>
       <ButtonGroupPro
          button={[
            {
              type: 'primary',
              label: 'Button',
              onClick: () => {},
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
                },
                {
                  key: '2',
                  label: '新增3',
                  onClick: ()=>{},
                  disabled: true,
                }
              ]
            }
          ]}
        />
      </div>
    )
}
ReactDOM.render(<Demo />, _mount_);
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
