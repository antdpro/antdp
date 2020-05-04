import React, { Component } from 'react';
import { Menu } from 'antd';
import { Link } from 'umi';
import { getIcon } from '../utils';

export default class MeunView extends Component {
  static defaultProps = {
    route: [],
  }
  getMenuItemPath = (item) => {
    if (item.path) {
      return <Link to={item.path}>{item.name}</Link>
    }
    return null;
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
      .filter(item => item.name && !item.hideInMenu)
      .sort((a, b) => a.order - b.order)
      .map(item => this.getSubMenuOrItem(item))
      .filter(item => item);
  };
  getSubMenuOrItem = item => {
    if (item.routes && item.routes.some(child => child.name)) {
      const { name } = item;
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
  }
  handleOpenChange() {
    
  }
  render() {
    const { route } = this.props;
    return (
      <div>
        <Menu
          theme="dark"
          mode="inline"
          onOpenChange={this.handleOpenChange}
          selectedKeys={[]}
          style={{ width: '100%' }}
        >
          {this.getNavMenuItems(route.routes)}
        </Menu>
      </div>
    );
  }
}