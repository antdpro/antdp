InputCount
倒计时输入框
---

可用于短信验证

### 基础示例

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { InputCount } from '@antdp/antdp-ui'
class Demo extends Component {
  render() {
    return (
      <div>
        <InputCount
          value={''}
          onChange={(value)=>{}}
          onSend={()=>console.log('短信发送了')}
        />
      </div>
    )
  }
}
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### Props
组件继承 [`Input`](https://ant.design/components/input-cn/#header)[`Button`](https://ant.design/components/button-cn/#header)
```ts
export interface InputCountProps extends InputProps {
  /** 点击短信发送回调 */
  onSend?: () => void;
  /** antd button属性 */
  buttonProps?: ButtonProps;
}
```
