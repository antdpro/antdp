import React, { useRef } from 'react';
import { Button } from 'antd';
import moment from 'moment';
export const baseItems = () => [
  {
    label: '消息对象',
    name: 'name2',
    type: 'input',
  },
  {
    label: '消息名称',
    name: 'name3',
    type: 'input',
    isHide: true,
  },
];

export const columns = [
  {
    title: '序号',
    dataIndex: 'number',
    fixed: 'left',
    width: 90,
    align: 'center',
    render: (text, record, index) => {
      return index + 1;
    },
  },
  {
    title: '姓名',
    dataIndex: 'name',
    align: 'center',
    width: 90,
  },
  {
    title: '年龄',
    dataIndex: 'title',
    align: 'center',
    width: 90,
  },
  {
    title: '地址',
    dataIndex: 'address',
    align: 'center',
    width: 90,
  },
];
