import { LockOutlined } from '@ant-design/icons';
import { InputCount } from '@antdp/antdp-ui';
import { Button, Form, Input, Row } from 'antd';
import React from 'react';
import '../index.css';

const PhoneLogin = (props) => {
  const {
    value: {
      phoneFormItems,
      phoneCodeProps,
      onSend,
      formBtns,
      loading,
      formChildren,
      form,
      ...otherProps
    },
  } = props;
  return (
    <Form
      form={form}
      className="antdp-login-form"
      initialValues={{ remember: true }}
      {...otherProps}
    >
      {Array.isArray(phoneFormItems) &&
        phoneFormItems.map((item, index) => {
          const { inputProps, ...formItemProps } = item;
          return (
            <Form.Item key={index} {...formItemProps}>
              {inputProps && <Input disabled={loading} {...inputProps} />}
            </Form.Item>
          );
        })}
      <Form.Item {...phoneCodeProps}>
        <InputCount
          onSend={onSend && onSend}
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="请输入验证码"
          autoComplete="true"
        />
      </Form.Item>
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

export default PhoneLogin;
