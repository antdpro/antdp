/**
 * @description: 进行路由筛选，对无权限路由进行移除
 * @param {Array} routes : 原始 routes.json 文件中路由
 * @param {Array}  authMenus 权限路由
 * [
 *  { menuUrl:"",id:"" },
 *  { menuUrl:"",id:"" },
 *  ...
 * ]
 */
export const formatMenu = (routes) => {
  //  所有的 权限菜单
  const authMenus =
    (sessionStorage.getItem('authMenu') &&
      JSON.parse(sessionStorage.getItem('authMenu'))) ||
    [];
  return getMenuItem(routes, authMenus);
};
/**
 * @description:  过滤路由
 * @param {Array} routes 原始 routes.json 文件中路由
 * @param {Array} authMenus 权限路由
 * @param {Array} list 保存返回 有权限 路由
 * @return {*}
 */
const getMenuItem = (routes, authMenus, list = []) => {
  (routes || []).forEach((item) => {
    const { path } = item;
    if (checkRouter(path, authMenus)) {
      if (item.children || item.routes) {
        const children = getMenuItem(item.children || item.routes, authMenus);
        item.routes = children;
        item.children = children;
      }
      list.push({ ...item });
    }
  });
  return list;
};
/**
 * @description: 根据 menuUrl 判断是否存在权限
 * @param {string} path 路径
 * @param {Array} authMenus 权限路由
 * @return {*}
 */
const checkRouter = (path, authMenus) => {
  let fig = true;
  const finx = authMenus.findIndex((item) => item.menuUrl === path);
  if (finx === -1) {
    fig = false;
  }
  if (path === '/404' || path === '/403') {
    fig = true;
  }
  return fig;
};
/**
 * @description: 按钮权限
 * @param { string } path 路径
 * @param { React.ReactNode } children 展示内容
 */
export const FormatBtn = ({ path, children }) => {
  if (!path) {
    return children || null;
  }
  const authBtns =
    (sessionStorage.getItem('authBtn') &&
      JSON.parse(sessionStorage.getItem('authBtn'))) ||
    [];
  const finx = authBtns.findIndex((item) => item.menuUrl === path);
  if (finx === -1) {
    return null;
  }
  return children || null;
};
/**
 * @description: 页面权限
 * authMenus 权限路由
 * @param {Array} allRouters 原始 routes.json 文件中路由
 * @param {string} pathname 当前路径
 * @return {*}
 */
export const getFormatPage = (allRouters, pathname) => {
  // 1. 有权限 无页面 404
  // 2. 有权限 有页面 403
  // 3. 无权限 有页面 403
  // 4. 无权限 无页面 404
  // 5. 其他
  const allMenu = !!sessionStorage.getItem('authMenu')
    ? JSON.parse(sessionStorage.getItem('authMenu'))
    : [];
  const check = mapRouterCheck(allRouters, pathname).length > 0 ? true : false;
  // 若不在权限路由中则提示无权限
  const authCheck =
    allMenu.findIndex((va) => va.menuUrl == pathname) >= 0 ? true : false;
  if (check && !authCheck) {
    // 无权访问
    return 403;
  } else if (check && authCheck) {
    // 其他
    return true;
  } else {
    // 找不到
    return 404;
  }
};
/**
 * @description:
 * @param { Array } data 路由
 * @param { string } pathName 路径
 * @param { Array<true|flase> } list  [ true | flase ]
 * @return {*}
 */
const mapRouterCheck = (data, pathName, list = []) => {
  (data || []).forEach((val) => {
    const { path, routes } = val;
    if (path == pathName) {
      list.push(val);
    } else if (routes) {
      mapRouterCheck(routes, pathName, list);
    }
  });
  return list;
};
