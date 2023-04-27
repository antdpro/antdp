import { Tabs } from 'antd';
import Lists from './Lists';
import CardLists from './CardLists';
import ApplyLists from './ApplyLists';
const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: '1',
    label: `文章(8)`,
    children: <Lists />,
  },
  {
    key: '2',
    label: `应用(8)`,
    children: <ApplyLists />,
  },
  {
    key: '3',
    label: `项目(8)`,
    children: <CardLists />,
  },
];
const Contents = () => {
  return (
    <div style={{ marginLeft: 20 }}>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};
export default Contents;
