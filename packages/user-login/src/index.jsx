import React, { Component } from 'react';
import { Form, Input, Button, Row, Tabs } from 'antd';
import DocumentTitle from '@antdp/document-title';
import { UserOutlined, LockOutlined, PhoneOutlined } from '@ant-design/icons';
import { InputCount } from '@antdp/antdp-ui';
import './index.css';

const { TabPane } = Tabs;
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
  };
  state = {
    key: '1',
  };
  render() {
    const {
      formItems,
      logo,
      loading,
      projectName,
      className,
      formBtns,
      // 短信登陆 表单
      phoneFormItems,
      // 短信验证form.item属性
      phoneCodeProps,
      // 验证短信回调
      onSend,
      // 展示账号登陆
      showAccount = true,
      // 展示手机登陆
      showPhone = false,
      ...otherProps
    } = this.props;
    return (
      <DocumentTitle title={`用户登录 - ${projectName || ''}`}>
        <div className={`antdp-login ${className || ''}`}>
          <div className="antdp-login-title">
            {logo && <img src={logo} alt="logo" />}
            {projectName && <h1>{projectName}</h1>}
          </div>
          <Tabs
            type="card"
            centered
            defaultActiveKey={this.state.key}
            onChange={(key) => this.setState({ key })}
            tabBarGutter={0}
          >
            {showAccount && (
              <TabPane tab="账号登陆" key="1">
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
                          {inputProps && (
                            <Input disabled={loading} {...inputProps} />
                          )}
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
              </TabPane>
            )}
            {showPhone && (
              <TabPane tab="手机登陆" key="2">
                <Form
                  className="antdp-login-form"
                  initialValues={{ remember: true }}
                  {...otherProps}
                >
                  {Array.isArray(phoneFormItems) &&
                    phoneFormItems.map((item, index) => {
                      const { inputProps, ...formItemProps } = item;
                      return (
                        <Form.Item key={index} {...formItemProps}>
                          {inputProps && (
                            <Input disabled={loading} {...inputProps} />
                          )}
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
              </TabPane>
            )}
          </Tabs>
        </div>
      </DocumentTitle>
    );
  }
}
