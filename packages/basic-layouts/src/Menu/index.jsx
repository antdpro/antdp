import React, { Component } from 'react';
import { Menu } from 'antd';
import Link from './Link';
import { getIcon } from '../utils';
import { getMenuItems } from "@antdp/authorized"

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
    const { route, selectedKey, isAuthorized } = this.props;
    const _render = isAuthorized ? this.getNavMenuItems(getMenuItems(route.routes))
      : this.getNavMenuItems(route.routes);
    return (
      <Menu
        theme="dark"
        mode="inline"
        onOpenChange={this.handleOpenChange}
        selectedKeys={[selectedKey]}
        defaultOpenKeys={this.state.defaultOpenKeys}
        style={{ width: '100%' }}
      >
        {_render}
      </Menu>
    );
  }
}
