import React, { useEffect, useState, Fragment, useMemo } from 'react';
import { history, matchPath } from 'umi';
import { Tabs, Result } from 'antd';
import { useLocation } from 'react-router-dom';
import Iframe from './Iframe';
import RenderContent from './RenderContent';
import './index.css';

export default (props = {}) => {
  const dataSource = props.dataSource || [];
  let location = useLocation();
  const [tabAll, setTabAll] = useState([]);
  useEffect(() => {
    let urlData = null;
    dataSource.forEach((item) => {
      const match = matchPath(location.pathname, item);
      if (match) {
        urlData = { ...item, path: location.pathname, match };
      }
    });
    if (location.search) {
      urlData.location = location;
    }

    const findActiveTab = tabAll.find(
      (item) => item.path === location.pathname,
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
      const updataTabs = [...tabAll].map((item) => {
        if (item.path === location.pathname) {
          item.location = location;
        }
        return item;
      });
      setTabAll([...updataTabs]);
    }
  }, [location.pathname]);

  useMemo(() => {
    const tabData = [...tabAll].map((item) => {
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
      {ANTD_IS_TABS && (
        <Tabs
          type="editable-card"
          className="antdps-global-tabs"
          hideAdd={true}
          activeKey={location.pathname}
          onTabClick={(targetKey) => {
            const opts = { pathname: targetKey };
            const tab = tabAll.find((item) => item.path === targetKey);
            if (tab && tab.location) {
              opts.query = tab.location.query;
              opts.state = tab.location.state;
            } else if (targetKey === location.pathname) {
              opts.query = location.query;
              opts.state = location.state;
            }
            history.push(opts);
          }}
          onEdit={(targetKey, action) => {
            let index = 0;
            const dataKeys = tabAll.filter((item, idx) => {
              if (item.path === targetKey) {
                index = idx;
              }
              return item.path !== targetKey;
            });
            if (location.pathname === targetKey) {
              let opts = { exact: true };
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
          {tabAll.map((pane, index) => (
            <Tabs.TabPane
              tab={pane.name}
              key={pane.path}
              closable={tabAll.length !== 1}
            />
          ))}
        </Tabs>
      )}
      {tabAll.map((pane, index) => {
        if (!pane) return null;
        const match = matchPath(location.pathname, pane);
        const isShowView = !!match;
        const Comp =
          pane.component ||
          function () {
            return NotFound;
          };
        // const Comp = (pane.component || /(function|object)/.test(typeof pane.component))
        //   ? pane.component
        //   : () => NotFound;

        if (ANTD_IS_IFRAME_RENDER) {
          return (
            <Iframe
              bodyPadding={props.bodyPadding}
              isShowView={isShowView}
              match={pane.match}
              child={Comp}
              key={pane.path}
            />
          );
        }
        if (ANTD_IS_TABS) {
          return (
            <RenderContent
              bodyPadding={props.bodyPadding}
              isShowView={isShowView}
              match={pane.match}
              child={Comp}
              key={pane.path}
            />
          );
        }
        if (isShowView) {
          return (
            <RenderContent
              bodyPadding={props.bodyPadding}
              match={pane.match}
              isShowView={true}
              child={Comp}
              key={pane.path}
            />
          );
        }
        return null;
      })}
    </Fragment>
  );
};
