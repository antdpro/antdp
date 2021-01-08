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
