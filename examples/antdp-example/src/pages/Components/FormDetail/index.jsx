import { useState } from 'react';
import { FormDetail } from '@antdp/antdp-ui';
import { Card } from 'antd';
import 'antd/dist/reset.css';
import { useMemo } from 'react';
import { detailItems } from '../QuickForm/item';

const Page = () => {
  const [queryInfo, setInfo] = useState({ time2: 123456, fileList: [] });

  const data = useMemo(() => {
    return detailItems({
      queryInfo,
      setInfo,
    });
  }, [queryInfo, setInfo]);

  return (
    <Card>
      <FormDetail isView={true} header="表单一" formDatas={data} />
      <FormDetail isView={true} header="表单二" formDatas={data} />
      <FormDetail isView={true} header="表单三" formDatas={data} />
    </Card>
  );
};
export default Page;
