import React from 'react';
import BasicLayout from '@antdp/basic-layouts';
import Authorized from '@antdp/authorized';
import { connect, useIntl, SelectLang } from 'umi';
import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import logo from './logo.svg';

const getRouter = (menuData, parent, routerMap = new Map()) => {
  menuData.forEach((item) => {
    const { path, name } = item;
    if (path) {
      routerMap.set(path, { ...item, parentPath: parent });
    }
    if (item.children || item.routers) {
      getRouter(item.children || item.routers, path, routerMap);
    }
  });
  return routerMap;
};

// 再做处理生成父级关联
// 循环找父级
const loopFindParnent = (path, menuData, list = []) => {
  const item = menuData.get(path);
  list.unshift(item);
  if (item && item.parentPath) {
    loopFindParnent(item.parentPath, menuData, list);
  }
  return list;
};

const getRouterMap = (menuData) => {
  const routerMap = new Map();
  Array.from(menuData.keys()).map((item) => {
    const list = loopFindParnent(item, menuData);
    routerMap.set(item, list);
  });
  return routerMap;
};

const Layout = (props) => {
  // const datas = getRouter(props.route.routes)
  // const breadcrumbNameMap = getRouterMap(datas)
  // console.log(datas)
  // console.log(breadcrumbNameMap)
  // console.log(props)

  // const intl = useIntl()
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
        // topRightLanguage={<SelectLang/>}
        // 是否进行权限判定
        // isAuthorized={true}
        // intlLanguage={intl}
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
