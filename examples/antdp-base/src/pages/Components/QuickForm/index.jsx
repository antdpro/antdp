import CardDes from '@/components/CardDes';
import { ButtonGroupPro, QuickForm } from '@antdp/antdp-ui';
import { Card, Space } from 'antd';
import 'antd/dist/reset.css';
import { useMemo, useState } from 'react';
import { detailItems } from './item';

const Page = () => {
  const [queryInfo, setInfo] = useState({ time2: 123456, fileList: [] });

  const data = useMemo(() => {
    return detailItems({
      queryInfo,
      setInfo,
    });
  }, [queryInfo, setInfo]);

  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <CardDes
        title="快速表单"
        description="@antdp/antdp-ui 我们自己封装的业务表单控件，可超快速生成表单"
      />
      <Card>
        <QuickForm header="表单一" formDatas={data} />
        <QuickForm header="表单二" formDatas={data} />
        <ButtonGroupPro
          button={[
            {
              type: 'primary',
              label: '提交',
              onClick: () => {},
            },
          ]}
        />
      </Card>
    </Space>
  );
};
export default Page;
