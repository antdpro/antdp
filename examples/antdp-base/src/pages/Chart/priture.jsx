import { TinyColumn } from '@ant-design/charts';
import 'antd/dist/reset.css';

const Priture = () => {
  const data = [274, 337, 81, 497, 666, 219, 269];
  const config = {
    height: 64,
    autoFit: false,
    data,
    tooltip: {
      customContent: function (x, data) {
        return `NO.${x}: ${data[0]?.data?.y.toFixed(2)}`;
      },
    },
  };

  return <TinyColumn {...config} />;
};
export default Priture;
