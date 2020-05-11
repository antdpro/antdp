import React, { useEffect, useState, useMemo, Fragment } from 'react';

import { history } from 'umi';
import { Tabs } from 'antd';
import './index.css';

export default (props = {}) => {
  const dataSource = props.dataSource || [];
  const [tabAllKey, setTabAllKey] = useState([props.activeKey]);
  useEffect(() => {
    if (!tabAllKey.includes(props.activeKey)) {
      console.log('tabAllKey:2222:', tabAllKey);
      tabAllKey.push(props.activeKey);
      setTabAllKey([...tabAllKey]);
    }
  }, [props.activeKey]);
  const data = dataSource.filter((item) => tabAllKey.includes(item.path));
  return (
    <Fragment>
      <Tabs
        type="editable-card"
        className="antdps-global-tabs"
        hideAdd={true}
        activeKey={props.activeKey}
        onTabClick={(targetKey, dddd) => {
          console.log('targetKey:onTabClick:', dddd, targetKey);
          history.push(targetKey);
        }}
        onEdit={(targetKey, action) => {
          let index = 0;
          const dataKeys = tabAllKey.filter((path, idx) => {
            if (path === targetKey) {
              index = idx;
            }
            return path !== targetKey;
          });
          let activeKey = '';
          if (dataKeys && dataKeys.length > 0) {
            activeKey = dataKeys[index === 0 ? 0 : index - 1];
          }
          setTabAllKey([...dataKeys]);
          history.push(activeKey);
        }}
      >
        {data.map((pane, index) => (
          <Tabs.TabPane
            tab={pane.name}
            key={pane.path}
            closable={data.length !== 1}
          />
        ))}
      </Tabs>
      {data.map((pane, index) => {
        if (!pane) return null;
        const Comp = /(function|object)/.test(typeof pane.component)
          ? pane.component
          : null;
        if (!Comp) return null;
        const isShowView = pane.path === props.activeKey;
        if (props.isReRender) {
          return (
            <div
              key={index}
              style={{
                display: isShowView ? 'block' : 'none',
                padding: props.bodyPadding || 14,
              }}
            >
              <Comp />
            </div>
          );
        }
        if (isShowView) {
          return (
            <div key={index} style={{ padding: props.bodyPadding || 14 }}>
              <Comp />
            </div>
          );
        }
        return null;
      })}
    </Fragment>
  );
};
