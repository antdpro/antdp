import React, { useState, Fragment, useImperativeHandle, forwardRef } from 'react';
import { Radio, ButtonProps } from 'antd';
import DocumentTitle from '@antdp/document-title';
import { UserOutlined, LockOutlined, PhoneOutlined } from '@ant-design/icons';
import { ThemeContext } from './themContext';
import AccountLogin from './component/accountLogin';
import PhoneLogin from './component/phoneLogin';
import './index.css';

export interface UserLoginState { }

export interface formBtnsProps {
  logo?: string;
  projectName?: string;
  className?: string,
  type?: boolean | string,
  children?: React.ReactNode,
  formItems?: string[],
  formBtns?: { label?: React.ReactNode, attr?: ButtonProps }[],
  loading?: string,
  onFinish?: (value: unknown) => void,
  formChildren?: any,
  phoneFormItems?: string[],
  // phoneCodeProps: React.ReactNode,
  onSend?: () => void,
}

const BaseLayout = forwardRef((props: formBtnsProps, ref) => {
  const [key, setKey] = useState(1)
  const staticData =
  {
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

  const {
    logo,
    projectName,
    className,
    children,
    // 登陆页面类型
    type,
  } = props;

  const allData = { ...props, ...staticData };
  useImperativeHandle(ref, () => key);
  return (
    <DocumentTitle title={`用户登录 - ${projectName || ''}`}>
      <div className={`antdp-login ${className || ''}`}>
        <div className="antdp-login-title">
          {!!logo && <img src={logo} alt="logo" />}
          {projectName && <h1>{projectName}</h1>}
        </div>
        <ThemeContext.Provider value={allData}>
          <ThemeContext.Consumer>
            {(value: any) => {
              const accountProps = {
                formItems: value?.formItems,
                formBtns: value?.formBtns,
                loading: value?.loading,
                onFinish: value?.onFinish,
                formChildren: value?.formChildren,
              };
              const phoneProps = {
                phoneFormItems: value?.phoneFormItems,
                phoneCodeProps: value?.phoneCodeProps,
                onSend: value?.onSend,
                formBtns: value?.formBtns,
                loading: value?.loading,
                onFinish: value?.onFinish,
                formChildren: value?.formChildren,
              };
              return type === 'account' ? (
                <AccountLogin value={accountProps} />
              ) : type === 'phone' ? (
                <PhoneLogin value={phoneProps} />
              ) : (
                <Fragment>
                  <Radio.Group
                    style={{ marginBottom: 24 }}
                    name="radiogroup"
                    defaultValue={key}
                    onChange={(e) => setKey(e.target.value)}
                  >
                    <Radio value={1}>账号登陆</Radio>
                    <Radio value={2}>手机登陆</Radio>
                  </Radio.Group>
                  {key === 1 ? (
                    <AccountLogin value={accountProps} />
                  ) : (
                    <PhoneLogin value={phoneProps} />
                  )}
                </Fragment>
              );
            }}
          </ThemeContext.Consumer>
        </ThemeContext.Provider>
        {children}
      </div>
    </DocumentTitle>
  );
})

export default BaseLayout
