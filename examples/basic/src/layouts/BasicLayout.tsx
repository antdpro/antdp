import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Authorized from '@antdp/authorized';
import BasicLayout from '@antdp/basic-layouts';
import 'antd/dist/reset.css';
import logo from './logo.svg';

const Layout = () => {
  return (
    <Authorized authority={true} redirectPath="/login">
      <BasicLayout
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
            onClick: () => {
              console.log(222)
            }
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
          },
        ]}
      />
    </Authorized>
  );
};

export default Layout;
