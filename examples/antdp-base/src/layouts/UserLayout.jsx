import React, { useState, useRef } from 'react';
import { connect } from 'umi';
import UserLogin from '@antdp/user-login';
import Authorized from '@antdp/authorized';
import 'antd/dist/antd.css';
import logo from './logo.svg';

const UserLayout = (props) => {
  const baseRef = useRef();
  return (
    <Authorized authority={!props.token} redirectPath="/">
      <UserLogin
        ref={baseRef}
        logo={logo}
        projectName="Ant Design"
        loading={props.loading}
        onFinish={(values) => {
          let params =
            baseRef?.current?.state?.key === '1'
              ? { username: values?.username, password: values?.password }
              : { phone: values?.phone, code: values?.code };
          props.dispatch({
            type: 'global/login',
            payload: params,
          });
        }}
        showAccount={true}
        showPhone={false}
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
      />
    </Authorized>
  );
};

export default connect(({ global, loading }) => {
  return {
    token: global.token,
    loading: loading.effects['global/login'],
  };
})(UserLayout);
