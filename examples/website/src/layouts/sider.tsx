import { NavLink, useLocation } from "react-router-dom"
import { Layout, Menu } from "antd";
import { SubMenuType } from 'antd/es/menu/hooks/useItems'
import { routesConfig, NonIndexRouteObjects } from '../route';

function getMenus(routes: NonIndexRouteObjects[] = []): SubMenuType[] {
  return routes.reduce<SubMenuType[]>((result, item, idx) => {
    if (!item.name) {
      return result;
    }
    const { path, icon, name, children } = item
    const subMenu: Partial<SubMenuType> = {
      key: path || idx.toString(),
      icon: icon,
      label: <NavLink to={path!}>{name}</NavLink>,
    }
    if (children) {
      subMenu.children = getMenus(children);
    }
    result.push(subMenu as SubMenuType);
    return result;
  }, []);
}

const SiderMenus = () => {
  const location = useLocation();
  const childs = routesConfig[0].children?.find((item) => {
    return item.path === '/' + location.pathname.split('/')[1];
  })

  return (
    <Layout.Sider
      width={230}
      style={{
        boxShadow: '2px 0 8px 0 rgb(29 35 41 / 5%)',
        overflow: 'auto',
      }}
    >
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[location.pathname]}
        defaultSelectedKeys={[location.pathname]}
        defaultOpenKeys={[location.pathname]}
        items={getMenus(childs?.children) || []}
        style={{ width: '100%', paddingBottom: 50 }}
      />
    </Layout.Sider>
  )
}

export default SiderMenus