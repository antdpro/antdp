import BasicLayout from '@antdp/basic-layouts';
import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import logo from './logo.svg';

export default props => {
  return (
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
      topRightMenu={[
        {
          title: '个人中心',
          icon: <UserOutlined />,
          onClick: () => {}
        },
        {
          title: '个人设置',
          link: '/setting/basic',
          icon: <SettingOutlined />
        },
        {
          divider: true
        },
        {
          title: '退出登录',
          icon: <LogoutOutlined />,
          onClick: () => {}
        },
      ]}
    />
  );
};
