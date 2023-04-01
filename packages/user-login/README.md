@antdp/user-login
---

[![npm](https://img.shields.io/npm/v/@antdp/user-login.svg?maxAge=3600)](https://www.npmjs.com/package/@antdp/user-login)
[![npm download](https://img.shields.io/npm/dm/@antdp/user-login.svg?style=flat)](https://www.npmjs.com/package/@antdp/user-login)

登录界面

## Installation

```bash
$ npm i @antdp/user-login --save
```

## Props

```typescript
import React from 'react';
import { FormProps, FormItemProps,InputProps } from 'antd/lib/form';

export interface UserLoginProps extends Omit<FormProps, "onFinish"> {
  /**logo*/
  logo?: string;
  /**项目名称*/
  projectName?: string;
  className?: string,
  /**登录类型*/
  type?: "account" | "phone",
  children?: React.ReactNode,
  /**账号登录设置的formItem*/
  formItems?: ({ render?: React.ReactNode, inputProps?: InputProps } & FormItemProps)[],
  /**表单操作按钮*/
  formBtns?: { label?: React.ReactNode, attr?: ButtonProps }[],
  /**加载状态*/
  loading?: boolean,
  /**表单提交*/
  onFinish?: (value: any, submitType: "account" | "phone") => void,
  /**自定义form表单内渲染*/
  formChildren?: React.ReactNode,
  /**手机号登录设置的 formItem 项*/
  phoneFormItems?: UserLoginProps["formItems"],
  /**手机号FormItem 属性*/
  phoneCodeProps?: FormItemProps,
  /**发送验证码*/
  onSend?: () => void,
  /**外层样式**/
  warpStyle?: React.CSSProperties
  /**标题样式*/
  titleStyle?: React.CSSProperties
}

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

