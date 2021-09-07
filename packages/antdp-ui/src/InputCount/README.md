InputCount
倒计时输入框
---

可用于短信验证

### 基础示例

<!--DemoStart--> 
```jsx
import React, { Component } from 'react';
import { InputCount } from '@antdp/antdp-ui'
export default class Home extends Component {
  state={
    value:""
  }
  render() {
    return (
      <div>
        <InputCount
          value={this.state.value}
          onChange={(value)=>this.setState({value:value})}
          onSend={()=>console.log('短信发送了')}
        />
      </div>
    )
  }
}
```
<!--End-->

### Props
组件继承 [`Input`](https://ant.design/components/input-cn/#header)
组件继承 [`Button`](https://ant.design/components/button-cn/#header)
```ts
export interface InputCountProps extends InputProps {
  /** 点击短信发送回调 */
  onSend?: () => void;
  /** antd button属性 */
  buttonProps?: ButtonProps;
}
```
