import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Authorized from '@antdp/authorized';
import BasicLayout from '@antdp/basic-layouts';
import { SelectLang, useIntl, useModel } from '@umijs/max';
import 'antd/dist/reset.css';
import logo from './logo.svg';

const Layout = (props) => {
  const { token, logout } = useModel('user', (model) => ({ ...model }));
  return (
    <Authorized authority={!!token} redirectPath="/login">
      <BasicLayout
        {...props}
        projectName="Ant Design"
        profile={{
          name: '埋名',
          avatar:
            'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        }}
        siderWidth={208}
        logo={logo}
        // logoJumpTo="/dashboard/demo"  // 点击logo图标跳转的路径，默认 /welcome
        iframeRender={false}
        topRightLanguage={<SelectLang />}
        // 是否进行权限判定
        // isAuthorized={true}
        intlLanguage={useIntl()}
        // isBreadcrumb={true} // 是否根据路由进行展示 面包屑
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
              logout();
            },
          },
        ]}
      />
    </Authorized>
  );
};

export default Layout;
