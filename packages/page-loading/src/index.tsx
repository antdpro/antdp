import React from 'react';
import { Spin } from 'antd';
import { SpinProps } from 'antd/es/spin';

export interface PageLoading extends SpinProps { }

// loading components from code split
// https://umijs.org/plugin/umi-plugin-react.html#dynamicimport
export default function PageLoading(props: PageLoading = {}) {
  return (
    <div style={{ paddingTop: 100, paddingBottom: 100, textAlign: 'center' }} className="antdp-page-loading">
      <Spin size="large" tip="加载中..." {...props} />
    </div>
  );
};
