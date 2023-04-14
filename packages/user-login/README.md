@antdp/user-login
---

[![npm](https://img.shields.io/npm/v/@antdp/user-login.svg?maxAge=3600)](https://www.npmjs.com/package/@antdp/user-login)
[![npm download](https://img.shields.io/npm/dm/@antdp/user-login.svg?style=flat)](https://www.npmjs.com/package/@antdp/user-login)

登录界面

## Installation

```bash
$ npm i @antdp/user-login --save
```


## 基本使用

```tsx  mdx:preview
import React, { useRef } from 'react';
import UserLogin from '@antdp/user-login';

const Demo= (props) => {
  return (
    <UserLogin
      warpStyle={{minHeight:"300px"}}
      projectName="Ant Design"
      loading={props.loading}
      onFinish={(values,submitType) => {
        console.log("打印保存参数---->",value,submitType)
      }}
      onSend={() => console.log('短信验证回调')}
      formBtns={[
        {
          label: '登录',
          attr: {
            type: 'primary',
            htmlType: 'submit',
            style: {
              marginRight: 20,
            },
          },
        },
        {
          label: '重置',
          attr: {
            type: 'primary',
          },
        },
      ]}
    />
  )
}
export default Demo;
```

## 账号登录

```tsx  mdx:preview
import React, { useRef } from 'react';
import UserLogin from '@antdp/user-login';

const Demo= (props) => {
  return (
    <UserLogin
      warpStyle={{minHeight:"300px"}}
      projectName="Ant Design"
      loading={props.loading}
      onFinish={(values) => {
       console.log("打印保存参数---->",values)
      }}
      type="account"
      formBtns={[
        {
          label: '登录',
          attr: {
            type: 'primary',
            htmlType: 'submit',
            style: {
              marginRight: 20,
            },
          },
        },
        {
          label: '重置',
          attr: {
            type: 'primary',
          },
        },
      ]}
    />
  )
}
export default Demo;
```

## 手机号登录

```tsx  mdx:preview
import React, { useRef } from 'react';
import UserLogin from '@antdp/user-login';

const Demo= (props) => {
  return (
    <UserLogin
      warpStyle={{minHeight:"300px"}}
      projectName="Ant Design"
      loading={props.loading}
      onFinish={(values) => {
       console.log("打印保存参数---->",values)
      }}
      type="phone"
      onSend={() => console.log('短信验证回调')}
      formBtns={[
        {
          label: '登录',
          attr: {
            type: 'primary',
            htmlType: 'submit',
            style: {
              marginRight: 20,
            },
          },
        },
        {
          label: '重置',
          attr: {
            type: 'primary',
          },
        },
      ]}
    />
  )
}
export default Demo;
```

## API
### 该组件依赖
- [antd Button](https://ant.design/components/button-cn) 
- [antd Radio](https://ant.design/components/radio-cn)
- [antd Form](https://ant.design/components/form-cn)

| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| logo | logo | string  | - |
| projectName | 项目名称 | `string` | - |
| className | 登陆样式 | `string` | - |
| type | 登录类型 | `account | phone` | `account` |
| children | 自定义内容 |  `React.ReactNode` | - |
| formItems | 账号登录设置的formItem |   `({ render?: React.ReactNode, inputProps?: InputProps } & FormItemProps)[]` | - |
| formBtns | 表单操作按钮 |   `{ label?: React.ReactNode, attr?: ButtonProps }[]` | - |
| loading | 加载状态 |   `boolean` | - |
| onFinish | 表单提交 |   `(value: any, submitType: "account" | "phone") => void` | - |
| phoneFormItems | 手机号登录设置的 formItem 项 |   `UserLoginProps["formItems"]` | - |
| phoneCodeProps | 手机号FormItem 属性 |   `FormItemProps` | - |
| onSend | 自定义form表单内渲染 |   `() => void` | - |
| warpStyle | 外层样式 |   `React.CSSProperties` | - |
| titleStyle | 标题样式 |   `React.CSSProperties` | - |