import { Badge } from 'antd';

export const columns = [
  {
    title: '商品编号',
    dataIndex: 'key',
  },
  {
    title: '商品名称',
    dataIndex: 'name',
  },
  {
    title: '商品条码',
    dataIndex: 'barCode',
  },
  {
    title: '单价',
    dataIndex: 'price',
  },
  {
    title: '数量（件）',
    className: 'num',
    dataIndex: 'num',
  },
  {
    title: '金额',
    dataIndex: 'money',
    align: 'right',
  },
];
export const data = [
  {
    key: '1234561',
    name: '矿泉水 550ml',
    barCode: '12421432143214321',
    price: '2.00	',
    num: '1',
    money: '￥2.00',
  },
  {
    key: '1234562',
    name: '凉茶 300ml',
    barCode: '12421432143214322',
    price: '3.00',
    num: '2',
    money: '￥6.00',
  },
  {
    key: '1234563',
    name: '好吃的薯片',
    barCode: '12421432143214323',
    price: '7.00	',
    num: '4',
    money: '￥28.00',
  },
  {
    key: '1234564',
    name: '特别好吃的蛋卷',
    barCode: '12421432143214324',
    price: '8.50	',
    num: '3',
    money: '￥25.50',
  },
];

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
