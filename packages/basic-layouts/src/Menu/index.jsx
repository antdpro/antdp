import { Menu, Select } from 'antd';
import React, { Component } from 'react';
import { getIcon, getRoutesList } from '../utils';
import Link from './Link';

const SearchMenus = (props) => {
  const { route = { routes: [] }, history, selectedKey } = props;
  const listRouters = React.useMemo(() => {
    return getRoutesList(route.routes);
  }, [route.routes]);

  const listMenus = React.useMemo(() => {
    return listRouters
      .filter((item) => {
        return item && 'name' in item && !item.hideInMenu && item.path !== '*';
      })
      .map((item) => ({ label: item.name, value: item.path }));
  }, [listRouters]);

  const currentValue = React.useMemo(() => {
    return listMenus.find((item) => item.value === selectedKey) || undefined;
  }, [selectedKey]);

  return (
    <div style={{ padding: '0 10px', margin: '10px 0' }}>
      <Select
        value={currentValue}
        placeholder="请搜索"
        labelInValue
        showSearch={true}
        optionFilterProp="children"
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        options={listMenus}
        onSelect={({ value }) => history.push(value)}
        style={{ width: '100%' }}
      />
    </div>
  );
};

export default class MeunView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultOpenKeys: [],
    };
  }
  static defaultProps = {
    route: [],
  };
  shouldComponentUpdate(nextProps) {
    if (
      nextProps.selectedKey !== this.props.selectedKey ||
      nextProps.route !== this.props.route
    ) {
      return true;
    }
    return false;
  }
  /**
   * 获得菜单子节点
   * @memberof SiderMenu
   */
  getNavMenuItems = (menusData = []) => {
    if (!menusData) {
      return [];
    }
    return menusData
      .filter((item) => item.name && !item.hideInMenu)
      .sort((a, b) => a.order - b.order)
      .map((item, index) => this.getSubMenuOrItem(item, index))
      .filter((item) => item);
  };
  /**
   * 设置 默认展开的父菜单 keys
   */
  setMenuOpenKeys = (path) => {
    const { defaultOpenKeys } = this.state;
    if (defaultOpenKeys.indexOf(path) === -1) {
      defaultOpenKeys.push(path);
      // this.setState({ defaultOpenKeys });
    }
  };
  getSubMenuOrItem = (item, index) => {
    if (!item.path && item.routes) {
      return (
        <Menu.ItemGroup
          key={index}
          title={
            item.icon ? (
              <span>
                {getIcon(item.icon)}
                <span>{item.name}</span>
              </span>
            ) : (
              item.name
            )
          }
        >
          {this.getNavMenuItems(item.routes)}
        </Menu.ItemGroup>
      );
    }
    if (item.routes && item.routes.some((child) => child.name)) {
      const { name } = item;
      if (this.props.selectedKey.indexOf(item.path) > -1) {
        this.setMenuOpenKeys(item.path);
      }
      return (
        <Menu.SubMenu
          title={
            item.icon ? (
              <span>
                {getIcon(item.icon)}
                <span>{name}</span>
              </span>
            ) : (
              name
            )
          }
          key={item.path}
        >
          {this.getNavMenuItems(item.routes)}
        </Menu.SubMenu>
      );
    }
    return (
      <Menu.Item key={item.path}>
        <Link path={item.path} name={item.name} icon={item.icon} />
      </Menu.Item>
    );
  };
  handleOpenChange() {}
  render() {
    const { route, selectedKey } = this.props;
    const _render = this.getNavMenuItems(route.routes);
    return (
      <Menu
        theme="dark"
        mode="inline"
        onOpenChange={this.handleOpenChange}
        selectedKeys={[selectedKey]}
        defaultOpenKeys={this.state.defaultOpenKeys}
        style={{ width: '100%' }}
      >
        {ANTD_MENU_SEARCH_IS_SHOW && <SearchMenus {...this.props} />}
        {_render}
      </Menu>
    );
  }
}
