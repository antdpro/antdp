import { Column, Line, Bar } from '@ant-design/charts';
import { data } from './item';
import { Card, Space, Row, Col, List } from 'antd';
import 'antd/dist/reset.css';
import { Tabs, Skeleton } from 'antd';

const Demo = () => {
  const onChange = (key) => {
    console.log(key);
  };

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

  const Charts = (
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
  );

  const items = [
    {
      key: '1',
      label: `销售额`,
      children: Charts,
    },
    {
      key: '2',
      label: `访问量`,
      children: Charts,
    },
  ];
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <Card>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </Card>
    </Space>
  );
};
export default Demo;
