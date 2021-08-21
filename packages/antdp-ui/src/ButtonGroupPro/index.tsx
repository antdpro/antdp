import React, { useEffect, useState } from 'react';
import { Button, Dropdown, Menu, Badge, ButtonProps, } from 'antd';
import { ButtonGroupProps, ButtonType } from 'antd/lib/button';

import { DownOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import './index.css';
import { MenuInfo } from "rc-menu/lib/interface"

const ButtonGroup = Button.Group;

export interface ButtonGroupProProps {
  button: Array<any>;
  className?: string
}
export interface MenusProps extends Omit<MenuInfo, "item"> {
  /** 禁用 */
  disabled?: boolean;
  /**   */
  label?: string | React.ReactNode;
  /** 权限路径 */
  path?: string;
  item: any;
  [k: string]: any
}
export interface MenusOptionProps extends Omit<ButtonProps, "type">, ButtonGroupProps {
  path?: string;
  label?: string | React.ReactNode;
  option: Array<MenusOptionProps>;
  menu?: Array<MenusProps>;
  key?: number;
  ButtonandDropdown?: string | number;
  type?: ButtonType | "buttonGroup";
  render?: (...arg: any) => React.ReactNode;
  badge?: number | string
}

const ButtonGroupPro = (props: ButtonGroupProProps) => {
  const {
    button,
    className
  } = props
  const clsString = classNames('antdp-ButtonGroup', className);
  const [menuDropdownLabel, setmenuDropdownLabel] = useState<{ label: string | React.ReactNode, key?: number | undefined }>({ label: '', key: undefined })
  const [ButtonandDropdown, setButtonandDropdown] = useState(false)
  const handleMenuClick = (menus: any, idx: number | undefined, e: MenusProps) => {
    for (let i = 0; i < menus.length; i++) {
      if (i === e.item.props.index && menus[i].onClick) {
        setmenuDropdownLabel({ label: menus[i].label, key: idx })
        menus[i].onClick();
      }
    }
  };
  const renderMenu = (menus: Array<MenusProps> | undefined, idx: number | undefined) => {
    return (
      <Menu onClick={(e: MenuInfo) => handleMenuClick(menus, idx, e)}>
        {menus &&
          menus.length > 0 &&
          menus.map((items: MenusProps, keys: number) => {
            // 权限
            if (items.path) {
              const accessStr = sessionStorage.getItem('access');
              const access = accessStr ? JSON.parse(accessStr) : { permissions: [] };
              const { permissions } = access;
              if (!permissions) return null;
              return permissions.includes(`${items.path}`) ? (
                <Menu.Item key={keys} disabled={items.disabled}>
                  {items.label}
                </Menu.Item>
              ) : null;
            } else {
              return (
                <Menu.Item key={keys} disabled={items.disabled}>
                  {items.label}
                </Menu.Item>
              );
            }
          })}
      </Menu>
    );
  };
  useEffect(() => {
    button &&
      button.length > 0 &&
      button.map((item) => {
        if (item.ButtonandDropdown) {
          setButtonandDropdown(true)
        }
      });
  }, [])
  return (
    <div className={clsString}>
      {button &&
        button.length > 0 &&
        button.map((item: MenusOptionProps, idx) => {
          const props = {
            key: idx,
            size: 'middle',
            type: item.type || 'default',
            onClick: item.onClick,
            disabled: item.disabled,
            ...item,
          } as ButtonProps;
          const buttondom = <Button {...props}>{item.label}</Button>;
          if (item.menu && item.menu.length > 0) {
            const DropdownButtonDom = (
              <Button
                size="small"
                type={props.type || 'default'}
                style={{
                  margin: ButtonandDropdown ? '0 0 0 -3px' : '12px 0 12px 12px',
                  borderRadius: ButtonandDropdown ? '0 4px 4px 0' : '4px',
                }}
              >
                {menuDropdownLabel.key === idx ? menuDropdownLabel.label : item.label}{' '}
                <DownOutlined />
              </Button>
            );
            if (item.path) {
              return (
                <div key={idx}>
                  <Dropdown overlay={() => renderMenu(item.menu, idx)}>
                    {DropdownButtonDom}
                  </Dropdown>
                </div>
              );
            } else {
              return (
                <Dropdown overlay={() => renderMenu(item.menu, idx)} key={idx}>
                  {DropdownButtonDom}
                </Dropdown>
              );
            }
          }
          if (item.type === 'buttonGroup') {
            return (
              <ButtonGroup key={idx}>
                {item.option &&
                  item.option.length > 0 &&
                  item.option.map((it: MenusOptionProps, index: number) => {
                    const buttonGroupprops = {
                      size: 'middle',
                      type: it.type || 'default',
                      onClick: it.onClick,
                      disabled: it.disabled,
                      icon: item.icon,
                      style: {
                        margin: item.ButtonandDropdown ? '0 0 0 -2px' : '12px 0 12px 12px',
                      },
                      ...it,
                    } as ButtonProps;
                    if (it.path) {
                      return (
                        <div key={index}>
                          <Button {...buttonGroupprops}>{it.label}</Button>
                        </div>
                      );
                    } else {
                      return (
                        <Button {...buttonGroupprops} key={index}>
                          {it.label}
                        </Button>
                      );
                    }
                  })}
              </ButtonGroup>
            );
          }
          if (item.render) {
            if (item.path) {
              return (
                <div key={idx}>
                  {item.render(item.label)}
                </div>
              );
            }
            return <span key={idx}>{item.render(item.label)}</span>;
          }
          if (item.path) {
            if (item.badge) {
              const badgeaParams =
                item.badge && item.badge === 'dot' ? { dot: true } : { count: item.badge };
              return (
                <div key={idx}>
                  <Badge {...badgeaParams} style={{ marginTop: '15px' }}>
                    {buttondom}
                  </Badge>
                </div>
              );
            } else {
              return (
                <div key={idx}>
                  {buttondom}
                </div>
              );
            }
          } else {
            if (item.badge) {
              const badgeaParams =
                item.badge && item.badge === 'dot' ? { dot: true } : { count: item.badge };
              return (
                <span key={idx}>
                  <Badge {...badgeaParams} style={{ marginTop: '15px' }}>
                    {buttondom}
                  </Badge>
                </span>
              );
            } else {
              return <Button {...props}>{item.label}</Button>;
            }
          }
        })}
    </div>
  );
}
export default ButtonGroupPro