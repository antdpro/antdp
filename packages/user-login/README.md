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
import React, { useRef } from 'react';
import UserLogin from '@antdp/user-login';
import logo from './logo.svg';

export default (props) => {
  const baseRef = useRef();
  const TYPE = 'both';
  return (
    <UserLogin
      logo={logo}
      projectName="Ant Design"
      loading={props.loading}
      onFinish={(values) => {
        let params;
        if (TYPE === 'both') {
          params =
            baseRef?.current?.state?.key === '1'
              ? { username: values?.username, password: values?.password }
              : { phone: values?.phone, code: values?.code };
        } else {
          params = values;
        }
        props.dispatch({
          type: 'global/login',
          payload: params,
        });
      }}
      type={TYPE}
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
  // 手机登陆｜账号登陆｜账号手机登陆
  type?:'phone' | 'account' | 'both',
  // 登陆组件额外jsx.element
  children?:JSX.Element;
  // 表单内部额外jsx.element
  formChildren?:JSX.Element;
}
```