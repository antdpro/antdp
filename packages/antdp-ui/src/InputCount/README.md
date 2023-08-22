InputCount
倒计时输入框
---

可用于短信验证

## 基础示例

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx  mdx:preview

import React, { Component } from 'react';
import { InputCount } from '@antdp/antdp-ui'

const  Demo=  () =>  (
      <div>
        <InputCount
          value={''}
          onChange={(value)=>{}}
          onSend={()=>console.log('短信发送了')}
        />
      </div>
    )

export default Demo
```
<!--End-->

## Props
组件继承 [`Input`](https://ant.design/components/input-cn/#header)[`Button`](https://ant.design/components/button-cn/#header)

| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| onSend | 点击点击短信发送回调 |  `() => void`  |- |
| buttonProps | 继承antd button属性 | - | - |
