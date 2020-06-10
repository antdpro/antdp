import React, { useEffect, useState, Fragment, useMemo } from 'react';
import { history, matchPath } from 'umi';
import { Tabs, Result } from 'antd';
import Iframe from './Iframe';
import RenderContent from './RenderContent';
import './index.css';

export default (props = {}) => {
  const dataSource = props.dataSource || [];
  const [tabAll, setTabAll] = useState([]);
  useEffect(() => {
    let urlData = null;
    dataSource.forEach((item) => {
      const match = matchPath(props.activeKey, item);
      if (match) {
        urlData = { ...item, path: props.activeKey, match };
      }
    });

    if (
      tabAll.length === 0 ||
      !tabAll.find((item) => item.path === props.activeKey)
    ) {
      if (urlData) {
        setTabAll([...tabAll, urlData]);
      }
    }
  }, [props.activeKey]);
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
          activeKey={props.activeKey}
          onTabClick={(targetKey) => {
            history.push(targetKey);
          }}
          onEdit={(targetKey, action) => {
            let index = 0;
            const dataKeys = tabAll.filter((item, idx) => {
              if (item.path === targetKey) {
                index = idx;
              }
              return item.path !== targetKey;
            });
            if (props.activeKey === targetKey) {
              let activeKey = '';
              if (dataKeys && dataKeys.length > 0) {
                activeKey = dataKeys[index === 0 ? 0 : index - 1].path;
              }
              history.push(activeKey);
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
        const match = matchPath(props.activeKey, pane);
        const isShowView = !!match;
        const Comp = /(function|object)/.test(typeof pane.component)
          ? pane.component
          : () => NotFound;

        if (ANTD_IS_IFRAME_RENDER) {
          return (
            <Iframe
              bodyPadding={props.bodyPadding}
              isShowView={isShowView}
              match={pane.match}
              child={Comp}
              key={index}
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
              key={index}
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
              key={index}
            />
          );
        }
        return null;
      })}
    </Fragment>
  );
};
