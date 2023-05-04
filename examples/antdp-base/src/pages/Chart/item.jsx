export const datas = [
  {
    type: '1月',
    sales: 38,
  },
  {
    type: '2月',
    sales: 52,
  },
  {
    type: '3月',
    sales: 61,
  },
  {
    type: '4月',
    sales: 145,
  },
  {
    type: '5月',
    sales: 48,
  },
  {
    type: '6月',
    sales: 38,
  },
  {
    type: '7月',
    sales: 38,
  },
  {
    type: '8月',
    sales: 38,
  },
  {
    type: '9月',
    sales: 48,
  },
  {
    type: '10月',
    sales: 38,
  },
  {
    type: '11月',
    sales: 38,
  },
  {
    type: '12月',
    sales: 38,
  },
];
export const headData = [
  {
    id: 1,
    title: '总销售额',
    pice: '¥ 126,560',
    foot: '日销售额￥12,423',
  },
  {
    id: 2,
    title: '访问量',
    pice: '6560',
    foot: '日访问量1,234',
  },
  {
    id: 3,
    title: '支付笔数',
    pice: '560',
    foot: '转化率60%',
  },
  {
    id: 4,
    title: '运营活动效果',
    pice: '78%',
    foot: '周同比12% 日同比11%',
  },
];

export const lists = [
  {
    id: 1,
    label: '工专路 1 号店',
    num: '323,234',
  },
  {
    id: 2,
    label: '工专路 2 号店',
    num: '323,234',
  },
  {
    id: 3,
    label: '工专路 3 号店',
    num: '323,234',
  },
  {
    id: 4,
    label: '工专路 4 号店',
    num: '323,234',
  },
  {
    id: 5,
    label: '工专路 5 号店',
    num: '323,234',
  },
  {
    id: 6,
    label: '工专路 6 号店',
    num: '323,234',
  },
  {
    id: 7,
    label: '工专路 7 号店',
    num: '323,234',
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

export const data1 = [
  {
    type: '家具家电',
    sales: 38,
  },
  {
    type: '粮油副食',
    sales: 52,
  },
  {
    type: '生鲜水果',
    sales: 61,
  },
  {
    type: '美容洗护',
    sales: 145,
  },
  {
    type: '母婴用品',
    sales: 48,
  },
  {
    type: '进口食品',
    sales: 38,
  },
  {
    type: '食品饮料',
    sales: 38,
  },
  {
    type: '家庭清洁',
    sales: 38,
  },
];

export const data = [
  264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513,
  546, 983, 340, 539, 243, 226, 192,
];
export const config = {
  height: 60,
  autoFit: false,
  data,
  smooth: true,
  color: '#E5EDFE',
  pattern: {
    type: 'line',
    cfg: {
      stroke: '#5B8FF9',
    },
  },
};
