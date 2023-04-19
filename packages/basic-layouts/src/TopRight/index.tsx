import { UserOutlined } from '@ant-design/icons';
import { Avatar, Dropdown } from 'antd';
import { ItemType } from "antd/lib/menu/hooks/useItems"
import React, { useMemo, Fragment } from 'react';
import { Link, } from 'react-router-dom';
import Fullscreen from '@antdp/fullscreen';
import { useLayouts } from "./../hooks"

const User = () => {
  const { topRightMenu = [], profile = {}, topRightLanguage } = useLayouts()
  const { avatar, name, } = profile

  const rightMenu = useMemo(() => {
    return topRightMenu.map((item, index) => {
      const { icon, title, link, onClick, ...rest } = item
      if (item.divider) {
        return { type: "divider" }
      }
      if (!title) {
        return null;
      }
      let child = (
        <Fragment >
          {icon && <span style={{ marginRight: 5 }}>{icon}</span>}
          {title}
        </Fragment>
      );
      if (link) {
        child = <Link to={link}>{child}</Link>
      }
      return {
        ...rest,
        label: child,
        key: index,
        onClick,
      }
    })
  }, [topRightMenu]) as ItemType[]

  return (
    <React.Fragment>
      <Fullscreen />
      <Dropdown menu={{ items: rightMenu }} placement="bottomRight" trigger={['click']} >
        <span className="antdp-basic-layouts-header-user">
          <span style={{ marginRight: 8 }}>
            {avatar ? (
              <img src={avatar} />
            ) : (
              <Avatar
                size={24}
                icon={<UserOutlined style={{ minWidth: 'inherit', marginRight: 0 }} />}
              />
            )}
          </span>
          <span style={{ userSelect: "none" }} >{name || ' - '}</span>
        </span>
      </Dropdown>
      {topRightLanguage}
    </React.Fragment>
  )

}
export default User