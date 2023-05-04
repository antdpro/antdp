import { FormDetail } from '@antdp/antdp-ui';
import { Card, Space, Table, Steps } from 'antd';
import CardDes from '@/components/CardDes';
import 'antd/dist/reset.css';
import { detailItems, userItems, columns, data, columns1, data1 } from './item';

const Page = () => {
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <CardDes title="基础详情页" description="常见于详情页的信息展示" />
      <Card>
        <FormDetail isView={true} header="退款申请" formDatas={detailItems} />
      </Card>
      <Card>
        <FormDetail isView={true} header="用户信息" formDatas={userItems} />
      </Card>
      <Card>
        <h3>退货商品</h3>
        <Table
          columns={columns}
          dataSource={data}
          bordered={false}
          footer={() => (
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontWeight: 500,
              }}
            >
              <div>总计</div>
              <div>￥61.50</div>
            </div>
          )}
          pagination={false}
        />
      </Card>
      <Card>
        <h3>退货进度</h3>
        <Table
          columns={columns1}
          dataSource={data1}
          bordered={false}
          pagination={false}
        />
      </Card>
    </Space>
  );
};
export default Page;
