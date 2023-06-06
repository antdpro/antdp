import {
  AlipayOutlined,
  GithubOutlined,
  WechatOutlined,
} from '@ant-design/icons';
import Authorized from '@antdp/authorized';
import UserLogin from '@antdp/user-login';
import { useModel } from '@umijs/max';
import 'antd/dist/reset.css';
import { useRef } from 'react';
import logo from './logo.svg';
import { useReactMutation } from '@antdp/hooks';

const UserLayout = (props) => {
  const baseRef = useRef();
  const TYPE = 'both';
  const { token, login } = useModel('user', (model) => ({ ...model }));
  const mutation = useReactMutation({ url: '/api/users/login' });
  return (
    <Authorized authority={!token} redirectPath="/">
      <UserLogin
        ref={baseRef}
        logo={logo}
        projectName="Antdp"
        onFinish={async (values) => {
          let params;
          if (TYPE === 'both') {
            params =
              baseRef?.current === 'account'
                ? { username: values?.username, password: values?.password }
                : { phone: values?.phone, code: values?.code };
          } else {
            params = values;
          }
          const { code, token, data } = await mutation.mutateAsync(params);
          if (code === 1) login({ token: token, data: data });
        }}
        type={TYPE}
        onSend={() => console.log('短信验证回调')}
        loading={mutation.loading}
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
