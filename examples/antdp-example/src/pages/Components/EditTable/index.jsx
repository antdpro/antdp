import React from 'react';
import { Space } from 'antd';
import CardDes from '@/components/CardDes';
import Demo1 from './demo1';
import Demo2 from './demo2';
import Demo3 from './demo3';
import Demo4 from './demo4';
import Demo5 from './demo5';

const Page = () => {
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <CardDes
        title="编辑表格"
        description="@antdp/edit-table 多功能编辑表格"
      />
      <Demo1 />
      <div style={{ marginTop: 24 }} />
      <Demo2 />
      <div style={{ marginTop: 24 }} />
      <Demo3 />
      <div style={{ marginTop: 24 }} />
      <Demo4 />
      <div style={{ marginTop: 24 }} />
      <Demo5 />
    </Space>
  );
};
export default Page;
