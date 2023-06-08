import { SearchOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import React from 'react';
// @ts-ignore
import { history, useAppData, useLocation } from '@umijs/max';
import { RouterMenu } from '../interface';

const setHideInMenu = (data: RouterMenu[] = []) => {
  data.forEach((item) => {
    item.hideInMenu = true;
    if (item.routes && item.routes.length > 0) {
      setHideInMenu(item.routes);
    }
  });
};

const getRoutesList = (data: RouterMenu[] = [], list: RouterMenu[] = []) => {
  data.forEach((item) => {
    if (item.hideInMenu) {
      // 如果父级需要隐藏，则将所有子级 hideInMenu 属性设为 true
      setHideInMenu(item.routes);
    } else if (item.routes && item.routes.length > 0) {
      getRoutesList(item.routes, list);
    } else {
      list.push(item);
    }
  });
  return list;
};

const SearchMenus = () => {
  const location = useLocation();
  const { clientRoutes } = useAppData();
  const [collapsed, setCollapsed] = React.useState(false);
  const parentPath = location.pathname;

  const routes = React.useMemo(() => {
    const routes = (clientRoutes as RouterMenu[]).find(
      (item) => item.path === '/',
    );
    return routes?.routes || [];
  }, [clientRoutes]);

  const listRouters = React.useMemo(() => {
    return getRoutesList(routes);
  }, [routes]);

  const listMenus = React.useMemo(() => {
    return listRouters
      .filter((item: any) => {
        return item && 'name' in item && !item.hideInMenu && item.path !== '*';
      })
      .map((item: any) => ({ label: item.name, value: item.path }));
  }, [listRouters]);

  const currentValue = React.useMemo(() => {
    return (
      listMenus.find((item: any) => item.value === parentPath) || undefined
    );
  }, [parentPath]);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <SearchOutlined
        onClick={() => setCollapsed(!collapsed)}
        style={{ fontSize: 20, marginRight: collapsed ? 10 : 0 }}
      />
      <div style={{ display: collapsed ? 'block' : 'none' }}>
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
          style={{ width: 150 }}
        />
      </div>
    </div>
  );
};

export default SearchMenus;
