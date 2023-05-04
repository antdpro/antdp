import { Progress } from '@ant-design/charts';
import 'antd/dist/reset.css';

const Pillar = () => {
  const config = {
    height: 60,
    width: 200,
    autoFit: false,
    percent: 0.78,
    color: ['#5B8FF9', '#E8EDF3'],
  };

  return <Progress {...config} />;
};
export default Pillar;
