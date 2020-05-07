import BasicLayout from '@antdp/basic-layouts';
import logo from './logo.svg';

export default props => {
  return (
    <BasicLayout
      {...props}
      projectName="Ant Design"
      siderWidth={210}
      logo={logo}
    />
  );
};
