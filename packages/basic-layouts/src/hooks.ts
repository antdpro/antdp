import {
  useMemo,
  createContext,
  createElement,
  useContext,
  useState,
} from 'react';
import DocumentTitle from '@antdp/document-title';
import { useLocation } from 'react-router-dom';
// @ts-ignore
import { useAppData } from '@umijs/max';

import { UseLayoutsProps, RouterMenu } from './interface';
import { HandleMenu } from './utils';

interface LayoutsContextType {
  HandleMenu: HandleMenu;
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LayoutsContext = createContext<
  LayoutsContextType & UseLayoutsProps
>({
  HandleMenu: new HandleMenu({ routers: [] }),
  collapsed: false,
  setCollapsed: () => null,
});

export const useLayouts = () => useContext(LayoutsContext);

export const LayoutsProvider = (props: UseLayoutsProps) => {
  const { intlLanguage, children, ...rest } = props;
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const { clientRoutes } = useAppData();

  const routes = useMemo(() => {
    const routes = (clientRoutes as RouterMenu[]).find(
      (item) => item.path === '/',
    );
    return routes?.routes || [];
  }, [clientRoutes]);

  const Menus = useMemo(() => {
    return new HandleMenu({
      routers: routes || [],
      intlLanguage: intlLanguage,
      isCheckAuth: !!ANTD_AUTH_CONF,
      isTOPLEFT: !!ANTD_MENU_TOP_LEFT,
    });
  }, [routes, intlLanguage]);

  const title = useMemo(() => {
    const item = Menus.getPathItem(location.pathname);
    return item?.name || '';
  }, [location.pathname]);

  const renderTitle = useMemo(() => {
    let arr = [];
    if (title) {
      arr.push(title);
    }
    if (props.projectName) {
      arr.push(props.projectName);
    }
    return arr.filter(Boolean).join('-');
  }, [title, props.projectName]);

  return createElement(DocumentTitle, {
    title: renderTitle,
    children: createElement(LayoutsContext.Provider, {
      value: { HandleMenu: Menus, collapsed, setCollapsed, ...rest },
      children,
    }),
  });
};
