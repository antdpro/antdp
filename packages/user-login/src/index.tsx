import React, { useState, useImperativeHandle, forwardRef, useMemo } from 'react';
import { Radio, ButtonProps, FormItemProps, FormProps, InputProps } from 'antd';
import DocumentTitle from '@antdp/document-title';
import AccountLogin from './component/accountLogin';
import PhoneLogin from './component/phoneLogin';
import { DefaultItems } from "./defaultItem"
import './index.css';

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


interface RadioButtonProps {
  onChange: (value: string) => void,
  value: string
}

const RadioButton = (props: RadioButtonProps) => {
  return (
    <Radio.Group
      value={props.value}
      options={[
        { label: "账号登陆", value: "account" },
        { label: "手机登陆", value: "phone" },
      ]}
      onChange={(event) => props.onChange(event.target.value)}
    />
  )
}


const BaseLayout = forwardRef((props: UserLoginProps, ref) => {
  const [submitType, setSubmitType] = useState<string>("account")
  const newData = { ...DefaultItems, ...props } as UserLoginProps

  const {
    logo,
    projectName,
    className,
    children,
    // 登陆页面类型
    type,
    warpStyle,
    titleStyle,
    ...rest
  } = newData;

  useImperativeHandle(ref, () => submitType);

  const isType = useMemo(() => {
    return ["account", "phone"].includes(type || "")
  }, [type])

  return (
    <DocumentTitle title={`用户登录 - ${projectName || ''}`}>
      <div className={`antdp-login ${className || ''}`} style={warpStyle} >
        <div className="antdp-login-title" style={titleStyle} >
          {!!logo && <img src={logo} alt="logo" />}
          {projectName && <h1>{projectName}</h1>}
        </div>
        {isType ? <React.Fragment /> : <RadioButton onChange={(value) => setSubmitType(value)} value={submitType} />}
        {(type === "account" || (!isType && submitType === "account")) ? <AccountLogin submitType={submitType} data={{ ...rest, type }} /> : <React.Fragment />}
        {(type === "phone" || (!isType && submitType === "phone")) ? <PhoneLogin submitType={submitType} data={{ ...rest, type }} /> : <React.Fragment />}
        {children}
      </div>
    </DocumentTitle>
  );
})

export default BaseLayout
