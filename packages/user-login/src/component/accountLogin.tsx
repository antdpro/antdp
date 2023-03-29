import React from 'react';
import { Form, Input, Button, Row, ButtonProps } from 'antd';

export interface LoginProps {
  value: {
    formItems?: string[];
    formBtns?: { label?: React.ReactNode, attr?: ButtonProps }[],
    loading?: string,
    formChildren?: React.FC<any>,
    onFinish?: (value: any) => void,
  }
}

const AccountLogin = (props: LoginProps) => {
  const { value: { formItems, formBtns, loading, formChildren, ...otherProps } } = props;
  return (
    <Form
      className="antdp-login-form"
      initialValues={{ remember: true }}
      {...otherProps}
    >
      {Array.isArray(formItems) &&
        formItems.map((item: any, index: number) => {
          const { inputProps, ...formItemProps } = item;
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
