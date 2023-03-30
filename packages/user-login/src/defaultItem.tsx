import React from 'react';
import { UserOutlined, LockOutlined, PhoneOutlined } from '@ant-design/icons';
export const DefaultItems = {
  projectName: '项目管理后台',
  loading: false,
  logo: null,
  formItems: [
    {
      name: 'username',
      rules: [{ required: true, message: '请输入用户名!' }],
      inputProps: {
        prefix: <UserOutlined className="site-form-item-icon" />,
        placeholder: '请输入用户名',
      },
    },
    {
      name: 'password',
      rules: [{ required: true, message: '请输入密码!' }],
      inputProps: {
        prefix: <LockOutlined className="site-form-item-icon" />,
        placeholder: '请输入密码',
        autoComplete: 'true',
        type: 'password',
      },
    },
  ],
  formBtns: [
    {
      label: '登录',
      attr: {
        type: 'primary',
        htmlType: 'submit',
      },
    },
  ],
  phoneFormItems: [
    {
      name: 'phone',
      rules: [{ required: true, message: '请输入手机号!' }],
      inputProps: {
        prefix: <PhoneOutlined className="site-form-item-icon" />,
        placeholder: '请输入手机号',
        autoComplete: 'true',
        type: 'password',
      },
    },
  ],
  phoneCodeProps: {
    name: 'code',
    rules: [{ required: true, message: '请输入验证码!' }],
  },
  type: 'account',
}