import React, { useRef, useState } from 'react';
import { useTableResizable } from '@/hooks';
import { Card, Table, Space, Row, Col } from 'antd';
import {
  QueryFilter,
  ProFormText,
  ProFormDatePicker,
  ProFormSelect,
  ProFormDigit,
  ProFormSwitch,
  ProFormDateRangePicker,
  ProFormDateTimePicker,
  ProFormTimePicker,
  ProFormDateTimeRangePicker,
} from '@ant-design/pro-form';
import 'antd/dist/antd.css';
import { QuickForm, ButtonGroupPro, CardPro } from '@antdp/antdp-ui';
import { baseItems, columns } from './item';
import { asyncAwaitForm } from '@/utils/utils';
import { selectPage } from '@/services/api';

const SearchTable = () => {
  const baseRef = useRef();
  const [filter, setFilter] = useState(null);

  const { submit, loading, dataSource, ...otherTableProps } = useTableResizable(
    selectPage,
    (query) => {
      return {
        queryData: {
          ...query,
        },
      };
    },
  );

  const handleOk = async (info) => {
    submit(info);
    setFilter(info);
  };

  return (
    <Space direction="vertical" style={{ display: 'block', marginTop: 12 }}>
      <Card size="small">
        <QueryFilter
          layout="vertical"
          defaultCollapsed={false}
          onFinish={handleOk}
        >
          <ProFormSelect
            name="sex"
            label="性别"
            showSearch
            options={[
              {
                value: 'man',
                label: '男',
              },
              {
                value: 'woman',
                label: '女',
              },
            ]}
            // 继承antd组件props
            fieldProps={{
              labelInValue: true,
              optionFilterProp: 'children',
            }}
          />
          <ProFormDigit name="count" label="数量" />
          <ProFormText name="name1" label="名称" />
          <ProFormDatePicker name="dateTime" label="时间" allowClear={false} />
          <ProFormDatePicker
            name="month"
            label="月"
            fieldProps={{ picker: 'month', format: 'YYYY-MM' }}
          />
          <ProFormDateRangePicker name="date" label="日期范围" />
          <ProFormDateTimePicker name="datetime" label="日期时间" />
          <ProFormDateTimeRangePicker
            name="datetimeRanger"
            label="日期时间范围"
          />
          <ProFormTimePicker name="time" label="时间" />
          <ProFormTimePicker.RangePicker name="timeRanger" label="时间范围" />
        </QueryFilter>
        <Table
          rowKey={'id'}
          {...otherTableProps}
          rowSelection={null}
          bordered
          columns={columns}
          dataSource={dataSource}
          loading={loading}
        />
      </Card>
    </Space>
  );
};
export default SearchTable;
