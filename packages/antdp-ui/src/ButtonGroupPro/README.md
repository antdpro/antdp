ButtonGroupPro
权限按钮组
---

ButtonGroupPro权限按钮组
> 🚧 暂时去除改组件权限功能,待下版本优化


### 基础示例

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
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
