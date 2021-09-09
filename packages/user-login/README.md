@antdp/user-login
---

[![npm](https://img.shields.io/npm/v/@antdp/user-login.svg?maxAge=3600)](https://www.npmjs.com/package/@antdp/user-login)

登录界面

## Installation

```bash
npm i @antdp/user-login --save
```

## Basic Usage

```jsx
import UserLogin from '@antdp/user-login';
import logo from './logo.svg';

export default (props) => {
  return (
    <UserLogin
      logo={logo}
      projectName="Ant Design"
      loading={props.loading}
      onFinish={(values) => {
        props.dispatch({
          type: 'global/login',
          payload: { password: values.password, phone: values.username },
        });
      }}
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
};
```

## Props

```typescript
import React from 'react';
import { FormProps, FormItemProps } from 'antd/lib/form';
import { InputProps } from 'antd/lib/input';


export interface formItem extends FormItemProps {
  inputProps?: InputProps;
}

export interface UserLoginProps extends FormProps{
  /**
   * 项目logo
   */
  logo?: JSX.Element;
  /**
   * 项目名称
   */
  projectName?: string;
  className?: string;
  loading?: boolean;
  formItems?: formItem[];
  // 短信登陆 表单
  phoneFormItems?:formItem[];
  // 短信验证form.item属性
  phoneCodeProps?:formItemProps
  // 验证短信回调
  onSend ?: () => void
  // 展示账号登陆
  showAccount ?: boolean;
  // 展示手机登陆
  showPhone ?: boolean;
}
```