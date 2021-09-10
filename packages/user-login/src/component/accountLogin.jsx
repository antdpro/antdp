import React from 'react';
import { Form, Input, Button, Row } from 'antd';

const AccountLogin = (props) => {
  const {
    value: { formItems, formBtns, loading, formChildren, ...otherProps },
  } = props;
  return (
    <Form
      className="antdp-login-form"
      initialValues={{ remember: true }}
      {...otherProps}
    >
      {Array.isArray(formItems) &&
        formItems.map((item, index) => {
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
            formBtns.map((item, index) => {
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
