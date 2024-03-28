import {
  AlipayOutlined,
  LockOutlined,
  MobileOutlined,
  UserOutlined,
  WeiboOutlined,
} from '@ant-design/icons';
import { LoginFormPage, ProFormCaptcha, ProFormText } from '@ant-design/pro-components';
import Authorized from '@antdp/authorized';
import { useReactMutation } from '@antdp/hooks';
import { history, useDispatch, useSelector } from '@umijs/max';
import { Divider, message, Space, Tabs } from 'antd';
import 'antd/dist/reset.css';
import { Fragment, useState } from 'react';
import logo from './logo.svg';

const iconStyles = {
  color: 'rgba(0, 0, 0, 0.2)',
  fontSize: '18px',
  verticalAlign: 'middle',
  cursor: 'pointer',
};

const otherLoginIconStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: 40,
  width: 40,
  border: '1px solid #D4D8DD',
  borderRadius: '50%',
};

const UserLayout = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);
  const [loginType, setLoginType] = useState('account');
  const update = (data) => {
    dispatch({
      type: 'user/update',
      payload: data,
    });
  };

  const { mutateAsync } = useReactMutation({
    url: '/api/users/login',
    onSuccess: async ({ code, data, token }) => {
      if (code === 1) {
        const store = ANTD_IS_STORAGE ? sessionStorage : localStorage;
        await store.setItem('token', token);
        await store.setItem('authBtn', JSON.stringify(data.btns));
        await store.setItem('authMenu', JSON.stringify(data.menus));
        update({ token: token });
        history.push('/');
      }
    },
  });

  const items = [
    {
      key: 'account',
      label: `账号密码登录`,
      children: (
        <Fragment>
          <ProFormText
            name="username"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined className={'prefixIcon'} />,
            }}
            placeholder="请输入用户名"
            rules={[
              {
                required: true,
                message: '请输入用户名!',
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined className={'prefixIcon'} />,
            }}
            placeholder="请输入密码"
            rules={[
              {
                required: true,
                message: '请输入密码！',
              },
            ]}
          />
        </Fragment>
      ),
    },
    {
      key: 'phone',
      label: `手机号登录`,
      children: (
        <Fragment>
          <ProFormText
            fieldProps={{
              size: 'large',
              prefix: <MobileOutlined className={'prefixIcon'} />,
            }}
            name="mobile"
            placeholder={'手机号'}
            rules={[
              {
                required: true,
                message: '请输入手机号！',
              },
              {
                pattern: /^1\d{10}$/,
                message: '手机号格式错误！',
              },
            ]}
          />
          <ProFormCaptcha
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined className={'prefixIcon'} />,
            }}
            captchaProps={{
              size: 'large',
            }}
            placeholder={'请输入验证码'}
            captchaTextRender={(timing, count) => {
              if (timing) {
                return `${count} ${'获取验证码'}`;
              }
              return '获取验证码';
            }}
            name="captcha"
            rules={[
              {
                required: true,
                message: '请输入验证码！',
              },
            ]}
            onGetCaptcha={async () => {
              message.success('获取验证码成功！验证码为：1234');
            }}
          />
        </Fragment>
      ),
    },
  ];

  return (
    <Authorized authority={!token} redirectPath="/">
      <div style={{ height: 'calc(100vh)' }}>
        <LoginFormPage
          backgroundImageUrl="https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png"
          logo={logo}
          title="Antdp"
          actions={
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <Divider plain>
                <span style={{ color: '#CCC', fontWeight: 'normal', fontSize: 14 }}>
                  其他登录方式
                </span>
              </Divider>
              <Space align="center" size={24}>
                <div style={otherLoginIconStyles}>
                  <AlipayOutlined style={{ ...iconStyles, color: '#1677FF' }} />
                </div>
                <div style={otherLoginIconStyles}>
                  <WeiboOutlined style={{ ...iconStyles, color: '#333333' }} />
                </div>
              </Space>
            </div>
          }
          initialValues={{ username: 'admin', password: 'admin' }}
          onFinish={(values) => mutateAsync(values)}
        >
          <Tabs
            centered
            destroyInactiveTabPane
            activeKey={loginType}
            items={items}
            onChange={(activeKey) => setLoginType(activeKey)}
          />
          <div
            style={{
              marginBlockEnd: 24,
              height: 24,
            }}
          >
            <a
              style={{
                float: 'right',
              }}
            >
              忘记密码
            </a>
          </div>
        </LoginFormPage>
      </div>
    </Authorized>
  );
};

export default UserLayout;
