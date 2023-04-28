import { Column, Line, Bar } from '@ant-design/charts';
import { data } from './item';
import { Card, Space } from 'antd';
import 'antd/dist/reset.css';

const Demo = () => {
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    meta: {
      type: { alias: '类别' },
      sales: { alias: '销售额' },
    },
  };

  const config2 = {
    data,
    xField: 'sales',
    yField: 'type',
    seriesField: 'type',
    color: ({ type }) => {
      return type === '美容洗护' ? '#FAAD14' : '#5B8FF9';
    },
    legend: false,
    meta: {
      type: {
        alias: '类别',
      },
      sales: {
        alias: '销售额',
      },
    },
  };

  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <Card>
        <Column
          {...config}
          onReady={(plot) => {
            plot.on('plot:click', (evt) => {
              const { x, y } = evt;
              const { xField } = plot.options;
              const tooltipData = plot.chart.getTooltipItems({ x, y });
              console.log(tooltipData);
            });
          }}
        />
      </Card>
      <Card title="条形图">
        <Bar {...config2} />
      </Card>
    </Space>
  );
};
export default Demo;
