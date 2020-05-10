import React from 'react';
import UserLogin from '@antdp/user-login';
import logo from './logo.svg';

export default () => {
  return (
    <UserLogin
      logo={logo}
      projectName="Ant Design"
      onFinish={(values) => {
        console.log('values:', values);
      }}
    />
  );
};
