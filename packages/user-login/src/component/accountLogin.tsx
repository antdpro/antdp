import React from 'react';
import { Form, Input, Button, Row, } from 'antd';
import { UserLoginProps } from "./../index"
const AccountLogin = (props: {
  data: Omit<UserLoginProps, "projectName" | "logo" | "className" | "children">,
  submitType: "account" | "phone"
}) => {
  const { data: { formItems, formBtns, loading, formChildren, onFinish, phoneFormItems, phoneCodeProps, onSend, ...otherProps }, submitType } = props;
  const onSubmit = (value: any) => onFinish && onFinish(value, submitType)

  return (
    <Form
      className="antdp-login-form"
      initialValues={{ remember: true }}
      {...otherProps}
      onFinish={onSubmit}
    >
      {Array.isArray(formItems) &&
        formItems.map((item, index: number) => {
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
      {formChildren}
      <Form.Item>
        <Row align="middle" justify="center">
          {Array.isArray(formBtns) &&
            formBtns.map((item: any, index: number) => {
              const { label, attr } = item;
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

export default AccountLogin;
