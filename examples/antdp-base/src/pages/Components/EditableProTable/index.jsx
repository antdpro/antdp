import CardDes from '@/components/CardDes';
import { Space } from 'antd';
import Demo1 from './demo1';
import Demo2 from './demo2';
import Demo3 from './demo3';
import Demo4 from './demo4';

const Page = () => {
  return (
    <Space direction="vertical" style={{ display: 'flex', width: '100%' }}>
      <CardDes
        title="EditableProTable"
        description="EditableProTable 可编辑表格 EditableProTable 与 ProTable 的功能基本相同，为了方便使用 EditableProTable 增加了一些预设，关掉了查询表单和操作栏，同时修改了 value 和 onChange 使其可以方便的继承到 antd 的 Form 中"
      />
      <Demo1 />
      <Demo2 />
      <Demo3 />
      <Demo4 />
    </Space>
  );
};
export default Page;
