import React from 'react';
import { Space } from 'antd';
import Demo1 from './Demo1';
import Demo2 from './Demo2';
import Demo3 from './Demo3';
import Demo4 from './Demo4';

const Page = () => {
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <Demo1 />
      <div style={{ marginTop: 24 }} />
      <Demo2 />
      <div style={{ marginTop: 24 }} />
      <Demo3 />
      <div style={{ marginTop: 24 }} />
      <Demo4 />
    </Space>
  );
};
export default Page;
