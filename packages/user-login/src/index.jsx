import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
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
          autoComplete: 'false',
          type: 'password',
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
      ...otherProps
    } = this.props;
    return (
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
            <Button type="primary" loading={loading} htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
