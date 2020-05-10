import React from 'react';
import { connect } from 'umi';
import UserLogin from '@antdp/user-login';
import Authorized from '@antdp/authorized';
import 'antd/dist/antd.css';
import logo from './logo.svg';

const UserLayout = (props) => {
  return (
    <Authorized authority={!props.token} redirectPath="/">
      <UserLogin
        logo={logo}
        projectName="Ant Design"
        loading={props.loading}
        onFinish={(values) => {
          props.dispatch({
            type: 'global/login',
            payload: { password: values.password, phone: values.username },
          });
        }}
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
