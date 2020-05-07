import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'umi';
import { getIcon } from '../utils';

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
  getMenuItemPath = item => {
    if (item.path) {
      return (
        <Link to={item.path}>
          {item.icon ? (
            <span>
              {getIcon(item.icon)}
              <span>{item.name}</span>
            </span>
          ) : (
            item.name
          )}
        </Link>
      );
    }
    return null;
  };
  /**
   * 获得菜单子节点
   * @memberof SiderMenu
   */
  getNavMenuItems = (menusData = []) => {
    if (!menusData) {
      return [];
    }
    return menusData
      .filter(item => item.name && !item.hideInMenu)
      .sort((a, b) => a.order - b.order)
      .map((item, index) => this.getSubMenuOrItem(item, index))
      .filter(item => item);
  };
  /**
   * 设置 默认展开的父菜单 keys
   */
  setMenuOpenKeys = path => {
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
    if (item.routes && item.routes.some(child => child.name)) {
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
    return <Menu.Item key={item.path}>{this.getMenuItemPath(item)}</Menu.Item>;
  };
  handleOpenChange() {}
  render() {
    const { route, selectedKey } = this.props;
    console.log('selectedKey:', selectedKey, this.state);
    return (
      <Menu
        theme="dark"
        mode="inline"
        onOpenChange={this.handleOpenChange}
        selectedKeys={[selectedKey]}
        defaultOpenKeys={this.state.defaultOpenKeys}
        style={{ width: '100%' }}
      >
        {this.getNavMenuItems(route.routes)}
      </Menu>
    );
  }
}
