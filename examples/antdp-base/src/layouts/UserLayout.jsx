import React from 'react';
import UserLogin from '@antdp/user-login';
import { connect } from 'umi';
import logo from './logo.svg';

const UserLayout = () => {
  return (
    <UserLogin
      logo={logo}
      projectName="每车U货平台"
      onFinish={(values) => {
        console.log('values:', values);
      }}
    />
  );
};

export default connect(({ global, loading }) => {
  return {
    loading: loading.effects['global/login'],
  };
})(UserLayout);
