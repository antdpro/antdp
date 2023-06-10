import { Badge } from 'antd';
export const columns1 = [
  {
    title: '时间',
    dataIndex: 'key',
  },
  {
    title: '当前进度',
    dataIndex: 'name',
  },
  {
    title: '状态',
    dataIndex: 'barCode',
    render: (text) => <Badge status={text === '成功' ? 'success' : 'processing'} text={text} />,
  },
  {
    title: '操作员ID',
    dataIndex: 'price',
  },
  {
    title: '耗时',
    className: 'num',
    dataIndex: 'num',
  },
];
export const data1 = [
  {
    key: '2017-10-01 14:10',
    name: '联系客户',
    barCode: '进行中',
    price: '取货员 ID1234',
    num: '5mins',
  },
  {
    key: '2017-10-01 14:05',
    name: '取货员出发',
    barCode: '成功',
    price: '取货员 ID1234',
    num: '1h',
  },
  {
    key: '2017-10-01 13:05',
    name: '取货员接单',
    barCode: '成功',
    price: '取货员 ID1234',
    num: '5mins',
  },
  {
    key: '2017-10-01 13:00',
    name: '申请审批通过',
    barCode: '成功',
    price: '系统',
    num: '1h',
  },
  {
    key: '2017-10-01 12:00',
    name: '发起退货申请',
    barCode: '成功',
    price: '用户',
    num: '5mins',
  },
];

export const columns2 = [
  {
    title: '文本',
    key: 'text',
    dataIndex: 'id',
  },
  {
    title: '状态',
    key: 'state',
    dataIndex: 'state',
    valueType: 'select',
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      open: {
        text: '未解决',
        status: 'Error',
      },
      closed: {
        text: '已解决',
        status: 'Success',
      },
    },
  },
  {
    title: '状态2',
    key: 'state2',
    dataIndex: 'state2',
  },
  {
    title: '时间',
    key: 'date',
    dataIndex: 'date',
    valueType: 'date',
  },
  {
    title: '时间',
    key: 'date',
    dataIndex: 'date',
    valueType: 'date',
    fieldProps: {
      format: 'DD.MM.YYYY',
    },
  },
  {
    title: '开关',
    key: 'switch',
    dataIndex: 'switch',
    valueType: 'switch',
  },
  {
    title: 'money',
    key: 'money',
    dataIndex: 'money',
    valueType: 'money',
    fieldProps: {
      moneySymbol: '$',
    },
  },
  {
    title: 'money无符号',
    key: 'money',
    dataIndex: 'money',
    valueType: 'money',
    fieldProps: {
      moneySymbol: false,
    },
  },
  {
    title: 'money负数无符号',
    key: 'money2',
    dataIndex: 'money2',
    valueType: 'money',
    fieldProps: {
      moneySymbol: false,
    },
  },
];
