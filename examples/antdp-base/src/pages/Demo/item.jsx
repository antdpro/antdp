import { DatePicker } from 'antd';
import React from 'react';

export const columns = ({ edit }) => [
  {
    title: '姓名',
    dataIndex: 'name',
    align: 'center',
    width: 90,
  },
  {
    title: '年龄',
    dataIndex: 'age',
    align: 'center',
    width: 90,
  },
  {
    title: '地址',
    dataIndex: 'address',
    align: 'center',
    width: 90,
  },
  {
    title: '操作',
    align: 'center',
    width: 90,
    render: (_, record) => {
      return (
        <span>
          {React.cloneElement(edit, {
            queryData: { ...record },
            label: '编辑',
          })}
        </span>
      );
    },
  },
];

const valueEnum = {
  all: { text: '全部', status: 'Default' },
  open: {
    text: '未解决',
    status: 'Error',
  },
  closed: {
    text: '已解决',
    status: 'Success',
    disabled: true,
  },
  processing: {
    text: '解决中',
    status: 'Processing',
  },
};

export const schema = ({ queryData }) => [
  {
    title: '姓名',
    dataIndex: 'name',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项',
        },
      ],
    },
    initialValue: queryData.name || '',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    initialValue: queryData.age || '',
  },
  {
    title: '状态',
    dataIndex: 'state',
    valueType: 'select',
    valueEnum,
  },
  {
    valueType: 'switch',
    title: '开关',
    dataIndex: 'Switch',
    fieldProps: {
      style: {
        width: '200px',
      },
    },
  },
  {
    title: '创建时间',
    key: 'showTime',
    colProps: {
      span: 8,
    },
    dataIndex: 'createName',
    renderFormItem: () => <DatePicker.RangePicker />,
  },
  {
    title: '更新时间',
    colProps: {
      span: 8,
    },
    dataIndex: 'updateName',
    renderFormItem: () => <DatePicker.RangePicker />,
  },
  {
    title: '购买时间',
    colProps: {
      span: 8,
    },
    dataIndex: 'created_at',
    valueType: 'dateRange',
    transform: (value) => {
      return {
        startTime: value[0],
        endTime: value[1],
      };
    },
  },
  {
    title: '列表',
    valueType: 'formList',
    dataIndex: 'list',
    colProps: {
      span: 24,
    },
    columns: [
      {
        title: '状态',
        dataIndex: 'state',
        valueType: 'select',
        valueEnum,
        formItemProps: {
          rules: [
            {
              required: true,
              message: '此项为必填项',
            },
          ],
        },
      },
      {
        title: '日期',
        valueType: 'dateTime',
        dataIndex: 'currentTime',
        formItemProps: {
          rules: [
            {
              required: true,
              message: '此项为必填项',
            },
          ],
        },
      },
    ],
  },
];
