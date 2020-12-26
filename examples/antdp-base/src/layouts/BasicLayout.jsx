import React from 'react';
import BasicLayout from '@antdp/basic-layouts';
import Authorized from '@antdp/authorized';
import { connect } from 'umi';
import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import logo from './logo.svg';

const Layout = (props) => {
  return (
    <Authorized authority={!!props.token} redirectPath="/login">
      <BasicLayout
        {...props}
        projectName="Ant Design"
        profile={{
          name: '埋名',
          avatar:
            'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        }}
        siderWidth={240}
        logo={logo}
        iframeRender={false}
        topRightLanguage={<div>设置语言</div>}
        // 是否进行权限判定
        isAuthorized={true}
        topRightMenu={[
          {
            title: '个人中心',
            icon: <UserOutlined />,
            onClick: () => {},
          },
          {
            title: '个人设置',
            link: '/setting/property',
            icon: <SettingOutlined />,
          },
          {
            divider: true,
          },
          {
            title: '退出登录',
            icon: <LogoutOutlined />,
            onClick: () => {
              props.dispatch({ type: 'global/logout' });
            },
          },
        ]}
      />
    </Authorized>
  );
};

export default connect(({ global, loading }) => ({
  token: global.token,
}))(Layout);
