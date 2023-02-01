import { Link, NavLink, useLocation } from "react-router-dom"
import { Layout, Menu } from "antd"
import ReactLogo from '../assets/logo.svg';
import { routesConfig } from '../route';

const getMenus = (routes: any[] = []) => {
  return routes.map((item) => {
    const ite = { ...item }
    if (item.name) {
      ite.label = item.name
      ite.title = item.name
    }
    if (Array.isArray(item.children)) {
      ite.children = getMenus(item.children)
    } else if (item.path) {
      ite.key = item.path
      ite.label = <NavLink to={item.path} >{item.name}</NavLink>
    }
    return { ...ite }
  })
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
      items={getMenus(routesConfig[0].children)}
      style={{ width: '100%' }}
    />
  </Layout.Sider>
}

export default SiderMenus