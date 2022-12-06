import React, { useEffect, useState, Fragment, useMemo } from 'react';
// @ts-ignore
import { history, matchPath } from 'umi';
import { Tabs, Result } from 'antd';
import { useLocation, RouteProps } from 'react-router-dom';
import Iframe from './Iframe';
import RenderContent from './RenderContent';
import './index.css';

export interface LayoutTabsRouter extends RouteProps {
  // component?: JSX.Element;
  exact?: boolean;
  icon: string;
  key: string;
  name: string;
  path: string;
  location?: any;
  match?: any;
}

export interface LayoutTabsProps {
  activeKey?: string[]
  dataSource?: LayoutTabsRouter[]
  children?: React.ReactNode;
  bodyPadding?: string;
}

export default (props: LayoutTabsProps) => {
  const {
    dataSource = [],
    bodyPadding = ''
  } = props;

  let location = useLocation();
  const [tabAll, setTabAll] = useState<LayoutTabsRouter[]>([]);

  useEffect(() => {
    let urlData: LayoutTabsRouter | null = null;
    dataSource.forEach((item: LayoutTabsRouter) => {
      const match = matchPath(location.pathname, item);
      if (match) {
        urlData = {
          ...item,
          path: location.pathname,
          match
        };
      }
    });
    if (location.search && urlData) {
      (urlData as LayoutTabsRouter).location = location;
    }

    const findActiveTab = tabAll.find(
      (item: { path: string }) => item.path === location.pathname,
    );
    if (tabAll.length === 0 || !findActiveTab) {
      if (urlData) {
        setTabAll([...tabAll, urlData]);
      }
    } else if (
      findActiveTab &&
      findActiveTab.location &&
      findActiveTab.location.search !== location.search
    ) {
      const updataTabs = [...tabAll].map((item: LayoutTabsRouter) => {
        if (item.path === location.pathname) {
          item.location = location;
        }
        return item;
      });
      setTabAll([...updataTabs]);
    }
  }, [location.pathname]);

  useMemo(() => {
    const tabData = [...tabAll].map((item: any) => {
      const match = matchPath(location.pathname, item);
      if (match) {
        item.location = location;
      }
      return item;
    });

    setTabAll([...tabData]);
  }, [location.search]);

  const NotFound = useMemo(
    () => (
      <Result status="404" title="404" subTitle="抱歉，你访问的页面不存在" />
    ),
    [],
  );
  return (
    <Fragment>
      {
        // @ts-ignore
        ANTD_IS_TABS && (
          <Tabs
            type="editable-card"
            className="antdps-global-tabs"
            hideAdd={true}
            activeKey={location.pathname}
            onTabClick={(targetKey) => {
              const opts = { pathname: targetKey, query: null, state: '' };
              const tab = tabAll.find((item: { path: string }) => item.path === targetKey);
              if (tab && tab.location) {
                opts.query = tab.location.query;
                opts.state = tab.location.state;
              } else if (targetKey === location.pathname) {
                opts.query = (location as any).query;
                opts.state = location.state as string;
              }
              history.push(opts);
            }}
            onEdit={(targetKey, action) => {
              let index = 0;
              const dataKeys = tabAll.filter((item: { path: string }, idx: number) => {
                if (item.path === targetKey) {
                  index = idx;
                }
                return item.path !== targetKey;
              });
              if (location.pathname === targetKey) {
                let opts: any = { exact: true, pathname: null, query: null, state: null };
                if (dataKeys && dataKeys.length > 0) {
                  const tab = dataKeys[index === 0 ? 0 : index - 1];
                  opts.pathname = tab.path;
                  if (tab && tab.location) {
                    opts.query = tab.location.query;
                    opts.state = tab.location.state;
                  }
                  history.push(opts);
                }
              }
              setTabAll([...dataKeys]);
            }}
          >
            {tabAll.map((pane: { name: string, path: string }, index: number) => (
              <Tabs.TabPane
                tab={pane.name}
                key={pane.path}
                closable={tabAll.length !== 1}
              />
            ))}
          </Tabs>
        )}
      {tabAll.map((pane: LayoutTabsRouter, index: number) => {
        if (!pane) return null;
        const match = matchPath(location.pathname, pane);
        const isShowView = !!match;
        const Comp =
          pane.component ||
          function () {
            return NotFound;
          };
        // @ts-ignore
        if (ANTD_IS_IFRAME_RENDER) {
          return (
            <Iframe
              bodyPadding={bodyPadding}
              isShowView={isShowView}
              match={pane.match}
              child={Comp as React.FC<any>}
              key={pane.path}
            />
          );
        }
        // @ts-ignore
        if (ANTD_IS_TABS) {
          return (
            <RenderContent
              bodyPadding={bodyPadding}
              isShowView={isShowView}
              match={pane.match}
              child={Comp as React.FC<any>}
              key={pane.path}
            />
          );
        }
        if (isShowView) {
          return (
            <RenderContent
              bodyPadding={bodyPadding}
              match={pane.match}
              isShowView={true}
              child={Comp as React.FC<any>}
              key={pane.path}
            />
          );
        }
        return null;
      })}
    </Fragment>
  );
};