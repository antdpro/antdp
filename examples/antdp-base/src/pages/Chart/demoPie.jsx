import { Pie } from '@ant-design/charts';
import 'antd/dist/reset.css';

const DemoPie = () => {
  const data = [
    {
      type: '食用酒水',
      value: 3321,
    },
    {
      type: '个护健康',
      value: 3113,
    },
    {
      type: '服饰箱包',
      value: 2341,
    },
    {
      type: '母婴产品',
      value: 1231,
    },
    {
      type: '家用电器',
      value: 4544,
    },
    {
      type: '其他',
      value: 1231,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: '销售额\n15781',
      },
    },
  };

  return <Pie {...config} />;
};
export default DemoPie;
