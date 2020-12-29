import React from 'react';
import Icon from '@ant-design/icons';

/**
 * 递归获取树列表
 * @param {Array} data
 */
export function getTreeList(data, treeList = []) {
  data.forEach((node) => {
    if (node.routes) {
      treeList = getTreeList(node.routes, treeList);
    } else if (node.path) {
      node.key = node.path;
      treeList.push(node);
    }
  });
  return treeList;
}
export const getMenuItemRouters = (routes, intlLanguage, list = []) => {
  (routes || []).forEach((item) => {
    if (
      intlLanguage &&
      (Reflect.has(item, 'name') || Reflect.has(item, 'locale'))
    ) {
      const localeName = intlLanguage.formatMessage({
        id: item.locale || item.name,
        defaultMessage: item.name || item.locale,
      });
      item.name = localeName;
      item.locale = localeName;
    }
    if (item.children || item.routes) {
      const children = getMenuItemRouters(
        item.children || item.routes,
        intlLanguage,
      );
      item.routes = children;
      item.children = children;
    }
    list.push({ ...item });
  });
  return list;
};

const getRouter = (menuData, parent, routerMap = new Map()) => {
  menuData.forEach((item) => {
    const { path, name } = item;
    if (path) {
      routerMap.set(path, { ...item, parentPath: parent });
    }
    if (item.children || item.routers) {
      getRouter(item.children || item.routers, path, routerMap);
    }
  });
  return routerMap;
};

// 再做处理生成父级关联
// 循环找父级
const loopFindParnent = (path, menuData, list = []) => {
  const item = menuData.get(path);
  list.unshift(item);
  if (item && item.parentPath) {
    loopFindParnent(item.parentPath, menuData, list);
  }
  return list;
};

export const getBreadcrumbNameRouterMap = (routers) => {
  const menuData = getRouter(routers);
  const routerMap = new Map();
  Array.from(menuData.keys()).map((item) => {
    const list = loopFindParnent(item, menuData);
    routerMap.set(item, list);
  });
  return routerMap;
};

export function isUrl(path) {
  /* eslint no-useless-escape:0 */
  return /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/.test(
    path,
  );
}

// Allow menu.js config icon as string or ReactNode
//   icon: 'setting',
//   icon: 'icon-geren' #For Iconfont ,
//   icon: 'http://demo.com/icon.png',
//   icon: <Icon type="setting" />,
export function getIcon(icon) {
  if (typeof icon === 'string') {
    if (isUrl(icon)) {
      return <Icon component={() => <img src={icon} alt="icon" />} />;
    }
    return <></>;
  }
  return icon;
}
