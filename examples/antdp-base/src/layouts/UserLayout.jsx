import React, { useRef } from 'react';
import UserLogin from '@antdp/user-login';
import Authorized from '@antdp/authorized';
import {
  GithubOutlined,
  AlipayOutlined,
  WechatOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import logo from './logo.svg';
import { useModel } from 'umi';

const UserLayout = (props) => {
  const baseRef = useRef();
  const TYPE = 'both';
  const { token, login } = useModel('user', (model) => ({ ...model }));
  return (
    <Authorized authority={!token} redirectPath="/">
      <UserLogin
        ref={baseRef}
        logo={logo}
        projectName="Antdp"
        loading={props.loading}
        onFinish={(values) => {
          let params;
          if (TYPE === 'both') {
            params =
              baseRef?.current?.state?.key === 1
                ? { username: values?.username, password: values?.password }
                : { phone: values?.phone, code: values?.code };
          } else {
            params = values;
          }
          login(params);
        }}
        type={TYPE}
        onSend={() => console.log('短信验证回调')}
        formBtns={[
          {
            label: '登录',
            attr: {
              type: 'primary',
              htmlType: 'submit',
              style: {
                marginRight: 20,
              },
            },
          },
          {
            label: '重置',
            attr: {
              type: 'primary',
            },
          },
        ]}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span
            style={{ color: 'rgba(0,0,0,.85)', fontSize: 8, marginRight: 10 }}
          >
            其他方式登录:
          </span>
          <GithubOutlined style={{ marginLeft: 10, color: '#1890FF' }} />
          <AlipayOutlined style={{ marginLeft: 10, color: '#1890FF' }} />
          <WechatOutlined style={{ marginLeft: 10, color: '#1890FF' }} />
        </div>
      </UserLogin>
    </Authorized>
  );
};

export default UserLayout;
