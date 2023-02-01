import { UserOutlined } from '@ant-design/icons';
import { Link } from '@umijs/max';
import { Avatar, Dropdown, Menu } from 'antd';
import React, { Component, Fragment } from 'react';
import './index.css';

export default class extends Component {
  shouldComponentUpdate(nextProps) {
    if (
      nextProps.profile &&
      (nextProps.profile.name !== this.props.profile.name ||
        nextProps.profile.avatar !== this.props.profile.avatar)
    ) {
      return true;
    }
    return false;
  }
  render() {
    const { profile, menu = [] } = this.props;
    const menuView = (
      <Menu>
        {menu.map((item, index) => {
          if (item.divider) {
            return <Menu.Divider key={index} />;
          }
          const { icon, title, link, to, ...otherProps } = item;
          if (!title) {
            return null;
          }
          const child = (
            <Fragment>
              {icon && <span style={{ marginRight: 5 }}>{icon}</span>}
              {title}
            </Fragment>
          );
          return (
            <Menu.Item key={index} {...otherProps}>
              {link ? <Link to={link}>{child}</Link> : <span>{child}</span>}
            </Menu.Item>
          );
        })}
      </Menu>
    );
    return (
      <Dropdown placement="bottomRight" overlay={menuView} trigger={['click']}>
        <span className="antdp-global-header-menu">
          <span style={{ marginRight: 8 }}>
            {profile.avatar ? (
              <img src={profile.avatar} />
            ) : (
              <Avatar
                size={24}
                icon={
                  <UserOutlined
                    style={{ minWidth: 'inherit', marginRight: 0 }}
                  />
                }
              />
            )}
          </span>
          <span>{profile.name || ' - '}</span>
        </span>
      </Dropdown>
    );
  }
}
