import Icon from '@ant-design/icons';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import React from 'react';
import { IntlShape } from 'react-intl/lib/src/types';
import { NavLink } from 'react-router-dom';
// @ts-ignore
import { matchRoutes } from '@umijs/max';
import { HandleMenuProps, RouterMenu } from './interface';

/**
 *
 * 1. 对路由权限进行判定
 * 2. 保存每个子集对应的父级
 * 3. 父级链
 */
export class HandleMenu {
  authMenus: any[] = [];
  /**所有直接渲染的父级菜单*/
  parentMenu: RouterMenu[] = [];
  parentflatMenu: RouterMenu[] = [];
  /**子集key对应的父级key*/
  childParent: Map<string, string> = new Map([]);
  /**key对应子集数据*/
  childMenu: Map<string, RouterMenu[]> = new Map([]);
  // 所有子集菜单 平铺
  flatMenu: RouterMenu[] = [];
  // 所有菜单 平铺
  flatAllMenu: RouterMenu[] = [];
  /**语言转换*/
  intlLanguage?: IntlShape;
  /**路由数据*/
  routers: RouterMenu[] = [];
  /**处理权限后的菜单**/
  checkAuthMenus: RouterMenu[] = [];

  /**当前菜单对应的父级菜单*/
  pathToParentMenus: Map<string, RouterMenu[]> = new Map([]);

  /**是否进行权限校验*/
  isCheckAuth?: boolean = false;
  /**是否使用*/
  isTOPLEFT?: boolean = false;

  /**记录上次父级菜单*/
  preParentPath?: string = '';
  /**记录上次菜单*/
  prePath?: string = '';

  constructor(props: HandleMenuProps) {
    // 所有的 权限菜单
    const auth_menus = sessionStorage.getItem('authMenu');
    if (auth_menus) {
      this.authMenus = JSON.parse(auth_menus);
    } else {
      this.authMenus = [];
    }
    this.routers = props.routers;
    this.intlLanguage = props.intlLanguage;
    this.isCheckAuth = props.isCheckAuth;
    this.isTOPLEFT = props.isTOPLEFT;

    if (this.isCheckAuth) {
      this.initAuth(this.routers);
    } else {
      this.checkAuthMenus = this.routers;
    }
    if (this.intlLanguage) {
      this.initLanguage(this.checkAuthMenus);
    }
    this.initFlat(this.checkAuthMenus);
    if (this.isTOPLEFT) {
      this.handelSiderMenu(this.checkAuthMenus);
      this.getTopMenus(this.checkAuthMenus);
    }
    /**默认 / 指定所有子集 */
    this.childMenu.set('/', this.checkAuthMenus);
  }
  /**验证权限*/
  checkAuth(path: string) {
    if (['/404', '/403', '/500', '/', '/welcome'].includes(path)) {
      return true;
    }
    const finx = this.authMenus.find((item) => item === path);
    if (finx) {
      return true;
    }
    return false;
  }

  /**
   * 1. 权限处理
   *    1. 子集全部没权限，父级也没有权限
   *    2. 子集存在权限，父级也存在权限
   *    3. 没有权限的自动把 path 转换成 403
   * */
  initAuth(routers: RouterMenu[], isParent = false) {
    let child: RouterMenu[] = [];
    routers
      .sort((it) => Number(it.order || 0))
      .forEach((item) => {
        const { routes } = item;
        const newItem = { ...item };
        if (Array.isArray(routes)) {
          newItem.routes = this.initAuth(routes, true);
        }
        if (!isParent) {
          this.checkAuthMenus.push({ ...item });
        }
        child.push(newItem);
      });
    return child;
  }

  /**
   * 2. 国际化翻译
   * */
  initLanguage(menus = this.checkAuthMenus, parentLocale = 'menu') {
    menus.forEach((item) => {
      const { name, locale, routes } = item;
      let parentLocales = parentLocale;
      if (name || locale) {
        const locale = `${parentLocale}.${item.locale || item.name}`;
        parentLocales = locale;
        const localeName = this.intlLanguage?.formatMessage({
          id: locale,
          defaultMessage: item.name || item.locale,
        });
        item.name = localeName;
        item.locale = localeName;
      }
      if (Array.isArray(routes)) {
        this.initLanguage(routes, parentLocales);
      }
    });
  }

  /**
   * 3. 扁平化数据
   */
  initFlat(menus = this.checkAuthMenus, parentMenu: RouterMenu[] = []) {
    menus.forEach((item) => {
      const { routes } = item;
      const newparentMenu = [...parentMenu].concat([item]);
      if (Array.isArray(routes)) {
        this.initFlat(routes, newparentMenu);
      }
      if (item.path) {
        this.flatAllMenu.push({ ...item });
        this.pathToParentMenus.set(item.path, newparentMenu);
      }
      if (item.path && !Array.isArray(routes)) {
        this.flatMenu.push({ ...item });
      }
    });
  }

  /**
   * 4. 处理数据,用于顶部和侧边菜单展示联动
   * */
  handelSiderMenu(
    menus = this.checkAuthMenus,
    isSider = false,
    parentPath: string = '/',
  ) {
    menus.forEach((item) => {
      const { routes, side, path = '' } = item;
      if (side) {
        if (Array.isArray(routes) && routes.length) {
          this.childMenu.set(path, routes);
          this.handelSiderMenu(routes, true, path);
        }
        this.childParent.set(path, parentPath);
      } else {
        if (Array.isArray(routes) && routes.length) {
          this.handelSiderMenu(routes);
        }
      }
      if (isSider) {
        this.childParent.set(path, parentPath);
      } else {
        this.childParent.set(path, path);
      }
    });
  }

  /**
   * 5. 获取顶部渲染数据
   * */
  getTopMenus(menus = this.checkAuthMenus, index = 0) {
    const topMenus: RouterMenu[] = [];
    menus.forEach((item) => {
      const { side, path, routes } = item;
      const newItem = { ...item };
      if (Array.isArray(routes)) {
        newItem.routes = this.getTopMenus(routes, index + 1);
      }
      if (!side && path) {
        topMenus.push({ ...newItem });
        this.parentflatMenu.push({ ...newItem });
      }
      if (index === 0) {
        this.parentMenu.push({ ...newItem });
      }
    });
    return topMenus;
  }

  /**
   * 6. 获取导航面包屑
   * */
  getBreadcrumb(path: string) {
    return this.pathToParentMenus.get(path) || [];
  }

  /**7. 根据当前路由地址取父级key，再使用父级key进行取渲染内容,如果不是顶部渲染方式，则直接默认*/
  getSiderMenus(path: string) {
    if (this.isTOPLEFT) {
      let siderMenus = this.childMenu.get(path);
      if (!siderMenus) {
        siderMenus = this.childMenu.get(this.getParentPath(path));
      }
      return siderMenus || [];
    }
    return this.checkAuthMenus;
  }

  /**8. 获取父级path*/
  getParentPath(path: string) {
    const parentPath = this.childParent.get(path) || '/';
    return parentPath;
  }

  // 查询所有父节点和自己是否有权限
  getCheckAuthAll(path: string) {
    const node = this.flatAllMenu.find((item) => item.path === path);
    if (!node) {
      return false;
    }
    const pathList: string[] = [];
    let currentNode: RouterMenu | undefined = node;
    while (currentNode) {
      pathList.push(currentNode.path || '');
      currentNode = this.flatAllMenu.find(
        (item) => item.id === currentNode?.parentId,
      );
    }
    let hasPermission = true; // 假设有权限
    // 从最上层父节点开始逐一判断权限
    for (let i = pathList.length - 1; i >= 0; i--) {
      const p = pathList[i];
      if (!this.checkAuth(p)) {
        hasPermission = false;
        break;
      }
    }
    return hasPermission;
  }

  /**9. 获取跳转地址*/
  getToPath(path: string) {

    let [currentItem] = matchRoutes(this.flatAllMenu, path)

    if (currentItem && currentItem.route) {
      currentItem = currentItem.route
    }
    // 1. 先判断是不是 side === true
    // const currentItem = this.flatAllMenu.find((item) => item.path === path);
    if (currentItem?.path === '/') {
      this.preParentPath = '';
      this.prePath = currentItem.redirectTo;
      return currentItem.redirectTo;
    }

    if (!currentItem) {
      this.preParentPath = '';
      if (this.prePath === '/404') {
        return false;
      }
      this.prePath = '/404';
      return '/404';
    }

    // 查询所有父节点和自己是否有权限
    if (!!ANTD_AUTH_CONF && !this.getCheckAuthAll(currentItem?.path || '')) {
      this.prePath = '/403';
      this.preParentPath = '';
      return '/403';
    }

    if (!currentItem?.side) {
      this.prePath = currentItem.path || '';
      this.preParentPath = '';
      return false;
    }
    if (this.preParentPath === currentItem.path) {
      this.prePath = currentItem.path;
      return false;
    }
    this.preParentPath = currentItem.path;
    const siderMenus = this.childMenu.get(path);

    const findx = siderMenus?.find((item) => item.index || item.redirectTo);
    const current = findx?.path || findx?.redirectTo;

    if (this.prePath === current) {
      return false;
    }
    this.prePath = current;
    return current;
  }

  /**10 更加path地址获取当前配置数据*/
  getPathItem(path: string) {
    const currentItem = this.flatAllMenu.find((item) => item.path === path);
    return currentItem;
  }
}

export function isUrl(path: string) {
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
export function getIcon(icon: string) {
  if (typeof icon === 'string') {
    if (isUrl(icon)) {
      return <Icon component={() => <img src={icon} alt="icon" />} />;
    }
    return <></>;
  }
  return icon;
}

/**获取菜单渲染**/
export const getSiderMenus = (menus: RouterMenu[] = [], isSider = false) => {
  const loop = (menus: RouterMenu[] = [], parentSider = false) => {
    return menus
      .filter((items) => {
        if (items.hideInMenu || !items.name || (isSider && parentSider)) {
          return false;
        }
        return true;
      })
      .map((item) => {
        const { path, icon, name, routes } = item;
        const ite: any = {};
        if (icon) {
          ite.icon = getIcon(icon);
        }
        if (name) {
          ite.label = name;
          ite.title = name;
        }
        if (routes && routes.length && (!item.side || !isSider)) {
          ite.children = loop(routes, item.side);
        } else if (path && name) {
          ite.label = <NavLink to={path}>{name}</NavLink>;
        }
        ite.key = path;
        return ite;
      }) as ItemType[];
  };

  return loop(menus);
};

export const themeColor = {
  light: {
    '--primary-slider-bg': '#fff',
    '--primary-header-bg': '#fff',
    '--primary-shadow': '#9393930d',
    '--primary-slider-trigger-border': 'rgba(0,0,0,.06)',
    '--primary-sider-trigger-text-color': '#1d1d1d',
    '--primary-header-text-color': '#1d1d1d',
    '--primary-title-text-color': '#1d1d1d',
    '--primary-content-bg': '#f5f5f5',
    'itemSelectedBg': '#e6f7ff',
    'colorItemBgSelected': 'rgba(0, 0, 0, 0.06)',
    'itemActiveBg': '#e6f7ff',
    'horizontalItemSelectedBg': 'rgba(0, 0, 0, 0.06)',
    'itemColor': 'rgba(0, 0, 0, 0.65)',
    'itemHoverColor': 'rgba(0, 0, 0, 0.85)',
    'itemSelectedColor': 'rgb(24, 144, 255)',
    'colorBgElevated': '#fff',
  },
  dark: {
    '--primary-slider-bg': '#1d1d1d',
    '--primary-header-bg': '#1d1d1d',
    '--primary-shadow': '#001529',
    '--primary-slider-trigger-border': '#fff',
    '--primary-sider-trigger-text-color': '#fff',
    '--primary-header-text-color': '#fff',
    '--primary-title-text-color': '#fff',
    '--primary-content-bg': '#1d1d1d',
    'itemSelectedBg': 'rgb(24, 144, 255)',
    'colorItemBgSelected': '#fff',
    'itemActiveBg': '#fff',
    'horizontalItemSelectedBg': '#fff',
    'itemColor': 'rgba(229, 224, 216, 0.85)',
    'itemHoverColor': 'rgba(229, 224, 216, 0.85)',
    'itemSelectedColor': '#fff',
    'colorBgElevated': 'rgba(229, 224, 216, 0.85)',
  },
};
