import { Link, NavLink, useLocation } from "react-router-dom"
import { Layout, Menu } from "antd";
import { SubMenuType } from 'antd/es/menu/hooks/useItems'
import ReactLogo from '../assets/logo.svg';
import { routesConfig, NonIndexRouteObjects } from '../route';

function getMenus(routes: NonIndexRouteObjects[] = []): SubMenuType[] {
  return routes.map((item, idx) => {
    const { path, icon, name, children } = item
    let result: Partial<SubMenuType> = {
      key: path || idx.toString(),
      icon: icon,
      label: <NavLink to={path!}>{name}</NavLink>,
    }
    if (children) {
      result.children = getMenus(children);
      return result as SubMenuType;
    }
    return result as SubMenuType;
  });
}

const SiderMenus = () => {
  let location = useLocation();
  return <Layout.Sider
    width={230}
    style={{
      boxShadow: '2px 0 8px 0 rgb(29 35 41 / 5%)',
      overflow: 'auto',
    }}
  >
    <Link to="/" className="logo">
      <img src={ReactLogo} width={28} height={28} alt="logo" />
      <span>Antd Project</span>
    </Link>
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={[location?.pathname]}
      selectedKeys={[location.pathname]}
      defaultOpenKeys={[location.pathname]}
      items={getMenus(routesConfig[0].children) || []}
      style={{ width: '100%' }}
    />
  </Layout.Sider>
}

export default SiderMenus