import { Column, Line, Bar } from '@ant-design/charts';
import { datas, lists } from './item';
import { Card, Space, Row, Col, List, DatePicker } from 'antd';
import 'antd/dist/reset.css';
import { Tabs, Skeleton } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;

const Demo = () => {
  const onChange = (key) => {
    // console.log(key);
  };

  const config = {
    data: datas,
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
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ width: '60%' }}>
        <Column
          {...config}
          onReady={(plot) => {
            plot.on('plot:click', (evt) => {
              const { x, y } = evt;
              const { xField } = plot.options;
              const tooltipData = plot.chart.getTooltipItems({ x, y });
              // console.log(tooltipData);
            });
          }}
        />
      </div>
      <div style={{ width: '30%' }}>
        <List
          header={<div style={{ fontWeight: 'bold' }}>门店访问量排名</div>}
          className="demo-loadmore-list"
          itemLayout="horizontal"
          dataSource={lists}
          renderItem={(item) => (
            <List.Item actions={[<div>{item.num}</div>]}>
              <List.Item.Meta
                title={
                  <div style={{ fontWeight: 400 }}>
                    <span style={{ fontWeight: 'bold', marginRight: 6 }}>
                      <sapn sty>{item.id}</sapn>
                    </span>
                    {item.label}
                  </div>
                }
              />
            </List.Item>
          )}
        />
      </div>
    </div>
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
  const dateFormat = 'YYYY/MM/DD';

  const operations = (
    <RangePicker
      defaultValue={[
        dayjs('2023/05/01', dateFormat),
        dayjs('2023/05/03', dateFormat),
      ]}
      format={dateFormat}
    />
  );
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <Card>
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          tabBarExtraContent={operations}
        />
      </Card>
    </Space>
  );
};
export default Demo;
