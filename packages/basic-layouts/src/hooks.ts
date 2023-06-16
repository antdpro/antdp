import DocumentTitleDom, { DocumentTitle } from '@antdp/document-title';
import {
  createContext,
  createElement,
  useContext,
  useMemo,
  useState,
} from 'react';
import { useLocation } from 'react-router-dom';
// @ts-ignore
import { useAppData } from '@umijs/max';
import { LayoutModel, RouterMenu, UseLayoutsProps } from './interface';
import { HandleMenu } from './utils';

export interface LayoutsContextType extends UseLayoutsProps {
  HandleMenu: HandleMenu;
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LayoutsContext = createContext<LayoutsContextType>({
  HandleMenu: new HandleMenu({ routers: [] }),
  collapsed: false,
  setCollapsed: () => null,
  layout: LayoutModel.MIX,
});

export const useLayouts = () => useContext(LayoutsContext);

export const LayoutsProvider = (props: UseLayoutsProps) => {
  const { intlLanguage, children, ...rest } = props;
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const { clientRoutes } = useAppData();
  const layout = props.layout;

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
      isTOPLEFT: layout === LayoutModel.TOPLEFT,
    });
  }, [routes, intlLanguage, layout]);

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

  return createElement<DocumentTitle>(DocumentTitleDom, {
    title: renderTitle,
    children: createElement(LayoutsContext.Provider, {
      value: {
        HandleMenu: Menus,
        collapsed,
        setCollapsed,
        layout: LayoutModel.MIX,
        defultOpenMenus: false,
        ...rest,
      },
      children,
    }),
  });
};
