import React from 'react';

export const filterEmptyChildRoutes = (routes) => {
  const newRoutes = [];
  routes.forEach((item) => {
    const newItem = { ...item };
    if (newItem.hideRoute) {
      // 隐藏的路由不需要放入
    } else if (Array.isArray(newItem.children)) {
      if (newItem.children.length) {
        newItem.children = filterEmptyChildRoutes(newItem.children);
      }
      if (newItem.children.length) {
        newRoutes.push({ ...newItem });
      }
    } else {
      newRoutes.push({ ...newItem });
    }
  });
  return newRoutes;
};

export const handleRoutes = (routes, childRoutes, navigate) => {
  return routes
    .filter((item) => !item.hideRoute)
    .map((item) => {
      const newItem = { ...item };
      if (Array.isArray(item.children) && item.children.length) {
        newItem.children = handleRoutes(item.children, childRoutes, navigate);
      }
      if (item.element) {
        const Element = item.element;
        const roles = item.roles || [];
        if (!React.isValidElement(item.element)) {
          const element = (
            <React.Suspense fallback={<></>}>
              <Element roles={roles} navigate={navigate} routes={childRoutes} />
            </React.Suspense>
          );
          newItem.element = element;
        } else {
          newItem.element = React.cloneElement(Element, {
            roles: roles,
            navigate: navigate,
            routes: childRoutes,
          });
        }
      }
      return newItem;
    });
};
