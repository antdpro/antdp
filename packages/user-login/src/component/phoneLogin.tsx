import React from 'react';
import { Form, Input, Button, Row } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { InputCount } from '@antdp/antdp-ui';
import '../index.css';
import { UserLoginProps } from "./../index"

declare const ValidateStatuses: ["success", "warning", "error", "validating", ""];
export declare type ValidateStatus = typeof ValidateStatuses[number];

const PhoneLogin = (props: {
  data: Omit<UserLoginProps, "projectName" | "logo" | "className" | "children">,
  submitType: "account" | "phone"
}) => {
  const {
    data: {
      phoneFormItems,
      phoneCodeProps,
      onSend,
      formBtns,
      loading,
      formChildren,
      onFinish,
      formItems,
      ...otherProps
    },
    submitType
  } = props;

  const onSubmit = (value: any) => onFinish && onFinish(value, submitType)

  return (
    <Form
      className="antdp-login-form"
      initialValues={{ remember: true }}
      {...otherProps}
      onFinish={onSubmit}
    >
      {Array.isArray(phoneFormItems) &&
        phoneFormItems.map((item, index: number) => {
          const { inputProps, render, ...formItemProps } = item;
          if (render) {
            return render;
          }
          return (
            <Form.Item key={index} {...formItemProps}>
              {inputProps && <Input disabled={loading} {...inputProps} />}
            </Form.Item>
          );
        })}
      <Form.Item {...phoneCodeProps}>
        <InputCount
          onSend={onSend}
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
