import React from 'react';
import { Form, Input, Button, Row } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { InputCount } from '@antdp/antdp-ui';
import '../index.css';

declare const ValidateStatuses: ["success", "warning", "error", "validating", ""];
export declare type ValidateStatus = typeof ValidateStatuses[number];

export interface FormItemProps {
  prefixCls?: string,
  noStyle?: boolean,
  style?: React.CSSProperties,
  className?: string,
  children?: React.ReactNode,
  id?: string,
  hasFeedback?: boolean,
  validateStatus?: ValidateStatus,
  required?: boolean,
  hidden?: boolean,
  initialValue?: any,
  messageVariables?: Record<string, string>,
  tooltip?: React.ReactNode,
  fieldKey?: React.Key | React.Key[];
}

export interface PhoneProps {
  value: {
    phoneFormItems?: string[];
    formBtns?: string[];
    loading: string,
    formChildren: React.FC<any>,
    onSend: () => void,
    phoneCodeProps: FormItemProps,
    onFinish: () => void,
  }
}

const PhoneLogin = (props: PhoneProps) => {
  const {
    value: {
      phoneFormItems,
      phoneCodeProps,
      onSend,
      formBtns,
      loading,
      formChildren,
      ...otherProps
    },
  } = props;
  return (
    <Form
      className="antdp-login-form"
      initialValues={{ remember: true }}
      {...otherProps}
    >
      {Array.isArray(phoneFormItems) &&
        phoneFormItems.map((item: any, index: number) => {
          const { inputProps, ...formItemProps } = item;
          return (
            <Form.Item key={index} {...formItemProps}>
              {inputProps && <Input disabled={loading} {...inputProps} />}
            </Form.Item>
          );
        })}
      <Form.Item {...phoneCodeProps}>
        <InputCount
          onSend={!!onSend && onSend}
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="请输入验证码"
          autoComplete="true"
        />
      </Form.Item>
      {formChildren}
      <Form.Item>
        <Row align="middle" justify="center">
          {Array.isArray(formBtns) &&
            formBtns.map((item: any, index: number) => {
              const { label, attr } = item;
              console.log('label, attr: ', label, attr);
              if (attr && attr.htmlType === 'submit') {
                attr.loading = loading;
              }
              return (
                <Button key={index} {...attr}>
                  {label}
                </Button>
              );
            })}
        </Row>
      </Form.Item>
    </Form>
  );
};

export default PhoneLogin;
