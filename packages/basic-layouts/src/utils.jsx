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

/**
 * @description: 根据 menuUrl 判断是否存在权限
 * @param {string} path 路径
 * @param {Array} authMenus 权限路由
 * @return {*}
 */
const checkRouter = (path, authMenus) => {
  let fig = true;
  const finx = authMenus.findIndex(
    (item) => item[ANTD_AUTH_CONF.auth_check_url] === path,
  );
  if (finx === -1) {
    fig = false;
  }
  if (path === '/404' || path === '/403' || path === '/welcome') {
    fig = true;
  }
  return fig;
};
/**
 * @description: 对路由进行语言转换和权限路由
 * @param {*} routes
 * @param {*} intlLanguage
 * @param {*} list
 * @return {*}
 */
export const getMenuItemRouters = (
  routes,
  authMenus,
  intlLanguage,
  parentLocale = 'menu',
  list = [],
) => {
  (routes || []).forEach((item) => {
    let parentLocales = parentLocale;
    if (
      intlLanguage &&
      (Reflect.has(item, 'name') || Reflect.has(item, 'locale'))
    ) {
      const locale = `${parentLocale}.${item.locale || item.name}`;
      parentLocales = locale;
      const localeName = intlLanguage.formatMessage({
        id: locale,
        defaultMessage: item.name || item.locale,
      });
      item.name = localeName;
      item.locale = localeName;
    }
    if (ANTD_AUTH_CONF) {
      if (checkRouter(item.path, authMenus)) {
        if (item.children || item.routes) {
          const children = getMenuItemRouters(
            item.children || item.routes,
            authMenus,
            intlLanguage,
            parentLocales,
          );
          item.routes = children;
          item.children = children;
        }
        list.push({ ...item });
      }
    } else {
      if (item.children || item.routes) {
        const children = getMenuItemRouters(
          item.children || item.routes,
          authMenus,
          intlLanguage,
          parentLocales,
        );
        item.routes = children;
        item.children = children;
      }
      list.push({ ...item });
    }
  });
  return list;
};
/**
 * @description: 为每一个子路由 保存父路由链
 * @param {*} menuData
 * @param {*} parent
 * @param {*} routerMap
 * @return {*}
 */
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

/**
 * @description:再做处理生成父级关联  循环找父级
 * @param {*} path
 * @param {*} menuData
 * @param {*} list
 * @return {*}
 */
const loopFindParnent = (path, menuData, list = []) => {
  const item = menuData.get(path);
  list.unshift(item);
  if (item && item.parentPath) {
    loopFindParnent(item.parentPath, menuData, list);
  }
  return list;
};
/**
 * @description: 获取路由面包屑
 * @param {*} routers
 * @return {*}
 */
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
