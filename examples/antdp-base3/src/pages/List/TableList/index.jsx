import React from 'react';
import { Space } from 'antd';
import { columns } from './item';
import { selectPage } from '@/services/api';
import CardDes from '@/components/CardDes';
import { ProTable, PageContainer } from '@ant-design/pro-components';

const SearchTable = () => {
  return (
    <Space direction="vertical" style={{ display: 'block' }}>
      <CardDes title="ProTable" description="使用ProTable快速请求表格列表" />
      <div style={{ marginTop: 24 }}></div>
      <ProTable
        headerTitle="列表"
        options={false}
        search={{
          labelWidth: 'auto',
        }}
        request={async (params = {}) => {
          const { code, data } = await selectPage(params);
          if (code && code === 200) {
            return {
              data: data.rows || [],
              total: data.total,
              success: true,
            };
          }
        }}
        pagination={{
          showSizeChanger: true,
        }}
        cardProps={{
          size: 'small',
          style: {
            padding: 0,
          },
        }}
        cardBordered
        columns={columns}
        rowKey="id"
      />
    </Space>
  );
};
export default SearchTable;
