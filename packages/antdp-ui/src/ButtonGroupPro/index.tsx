import React, { useEffect, useState } from 'react';
import { Button, Dropdown, Menu, Badge } from 'antd';
import { ButtonProps } from 'antd/es/button';
import { ButtonGroupProps, ButtonType } from 'antd/lib/button';
import { AuthorizedBtn } from '@antdp/authorized'
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
  option?: Array<MenusOptionProps>;
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
  const [menuDropdownLabel, setmenuDropdownLabel] = useState<{ label: string | React.ReactNode, key?: number | undefined }>({ label: '', key: undefined })
  const [ButtonandDropdown, setButtonandDropdown] = useState(false)

  useEffect(() => {
    button && button.length > 0 && button.map((item) => {
      if (item.ButtonandDropdown) {
        setButtonandDropdown(true)
      }
    });
  }, [])

  const handleMenuClick = (menus: any, idx: number | undefined, e: MenusProps) => {
    menus.forEach((menu: any, index: number | undefined) => {
      if (index === Number(e?.key) && menu.onClick) {
        setmenuDropdownLabel({ label: menu.label, key: idx })
        menu.onClick();
      }
    })
  };

  const renderMenu = (menus: Array<MenusProps> | undefined, idx: number | undefined) => {
    return (
      <Menu onClick={(e: MenuInfo) => handleMenuClick(menus, idx, e)}>
        {menus &&
          menus.length > 0 &&
          menus.map((items: MenusProps, keys: number) => {
            // 权限
            if (items.path) {
              const accessStr = sessionStorage.getItem('authBtn');
              const access = accessStr ? JSON.parse(accessStr) : [];
              if (!access) return null;
              return access.includes(`${items.path}`) ? (
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

  return (
    <div className={classNames('antdp-ButtonGroup', className)}>
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
          const badgeaParams = item.badge && item.badge === 'dot' ? { dot: true } : { count: item.badge };
          // Menu多选菜单
          if (item.menu && item.menu.length > 0) {
            const DropdownButtonDom = (
              <Button
                size="middle"
                type={props.type || 'default'}
                style={{
                  margin: ButtonandDropdown ? '0 0 0 -3px' : '12px 0 12px 12px'
                }}
              >
                {menuDropdownLabel.key === idx ? menuDropdownLabel.label : item.label}{' '}
                <DownOutlined />
              </Button>
            );
            return item.path ? (
              <div key={idx}>
                <Dropdown overlay={() => renderMenu(item.menu, idx)}>
                  {DropdownButtonDom}
                </Dropdown>
              </div>
            ) : (
              <Dropdown overlay={() => renderMenu(item.menu, idx)} key={idx}>
                {DropdownButtonDom}
              </Dropdown>
            )
          }
          // ButtonGroup按钮组
          if (item.type === 'buttonGroup') {
            return (
              <ButtonGroup key={idx}>
                {item.option &&
                  item.option?.length > 0 &&
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
                    it.path ? (
                      <AuthorizedBtn key={idx} path={item.path}>
                        <Button {...buttonGroupprops}>{it.label}</Button>
                      </AuthorizedBtn>
                    ) : (
                      <Button {...buttonGroupprops} key={index}>
                        {it.label}
                      </Button>
                    )
                  })}
              </ButtonGroup>
            );
          }
          // 自定义render
          if (item.render) {
            return item.path ? <AuthorizedBtn key={idx} path={item.path}>{item.render(item.label)}</AuthorizedBtn> : <span key={idx}>{item.render(item.label)}</span>;
          }
          // 单独Button
          if (item.path) {
            return item.badge ? (
              <AuthorizedBtn key={idx} path={item.path}>
                <Badge {...badgeaParams} style={{ marginTop: '15px' }}>
                  {buttondom}
                </Badge>
              </AuthorizedBtn>
            ) : (
              <AuthorizedBtn key={idx} path={item.path}>
                {buttondom}
              </AuthorizedBtn>
            )
          } else {
            return item.badge ? (
              <span key={idx}>
                <Badge {...badgeaParams} style={{ marginTop: '15px' }}>
                  {buttondom}
                </Badge>
              </span>
            ) : (
              <Button {...props}>{item.label}</Button>
            )
          }
        })}
    </div>
  );
}
export default ButtonGroupPro