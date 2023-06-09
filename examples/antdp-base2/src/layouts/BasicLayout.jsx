import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import { FloatButton } from 'antd';
import Authorized from '@antdp/authorized';
import BasicLayouts from '@antdp/basic-layouts';
import {
  SelectLang,
  useIntl,
  useDispatch,
  useSelector,
  history,
} from '@umijs/max';
import 'antd/dist/reset.css';
import logo from './logo.svg';

const Layout = () => {
  const [dark, setDark] = useState(false);
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);
  const update = (data) => {
    dispatch({
      type: 'user/update',
      payload: data,
    });
  };
  return (
    <Authorized authority={!!token} redirectPath="/login">
      <FloatButton.Group
        trigger="click"
        type="primary"
        style={{ right: 94 }}
        icon={<UnorderedListOutlined />}
      >
        <FloatButton
          description={dark ? 'light' : 'dark'}
          onClick={() => setDark(!dark)}
        />
      </FloatButton.Group>
      <BasicLayouts
        theme={dark ? 'dark' : 'light'}
        className="antdp-basic-layouts"
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
            icon: <SettingOutlined />,
            onClick: () => {},
          },
          {
            divider: true,
          },
          {
            title: '退出登录',
            icon: <LogoutOutlined />,
            onClick: async () => {
              await sessionStorage.removeItem('token');
              await sessionStorage.removeItem('refresh_token');
              await sessionStorage.removeItem('userDate');
              update({ token: '' });
              history.push('/login');
            },
          },
        ]}
      />
    </Authorized>
  );
};

export default Layout;
