import React, { Component } from 'react';
import { Form, Input, Button, Row } from 'antd';
import DocumentTitle from '@antdp/document-title';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.css';

export default class BaseLayout extends Component {
  static defaultProps = {
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
  };
  render() {
    const {
      formItems,
      logo,
      loading,
      projectName,
      className,
      formBtns,
      ...otherProps
    } = this.props;
    return (
      <DocumentTitle title={`用户登录 - ${projectName || ''}`}>
        <div className={`antdp-login ${className || ''}`}>
          <div className="antdp-login-title">
            {logo && <img src={logo} alt="logo" />}
            {projectName && <h1>{projectName}</h1>}
          </div>
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
        </div>
      </DocumentTitle>
    );
  }
}
