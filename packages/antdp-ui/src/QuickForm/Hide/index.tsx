import React from 'react';
import { HideContext } from './context';
import { GetStoreProps, NamePath } from './interface';

export interface HideState { }

export interface HideProps {
  hideContent: GetStoreProps;
  name: NamePath;
  initialValue?: boolean;
  children?: React.ReactNode
}

class Hide extends React.Component<HideProps, HideState> {
  private mounted = false;
  private cancelRegisterFunc = () => { };

  constructor(props: HideProps) {
    super(props);
    if (props.hideContent) {
      const { hideContent } = props;
      const { init } = hideContent.getItemStore();
      init(this);
    }
  }

  componentDidMount() {
    const { hideContent } = this.props;
    // Register on init
    if (hideContent) {
      const { register } = hideContent.getItemStore();
      this.cancelRegisterFunc = register(this);
    }
    this.mounted = true;
  }

  componentWillUnmount() {
    this.cancelRegisterFunc();
    this.mounted = false;
  }

  getNamePath = () => {
    const { name } = this.props;
    if (!Array.isArray(name)) {
      return [name];
    }
    return name;
  };
  // 更新组件
  refresh = () => {
    if (this.mounted) {
      this.forceUpdate();
    }
  };

  getValue = () => {
    const { hideContent } = this.props;
    const { getValue } = hideContent.getItemStore();
    return getValue(this.getNamePath());
  };

  render() {
    const { children } = this.props;
    // 默认 false 展示
    // 只是判断是否进行显示和隐藏
    return !this.getValue() ? children : <React.Fragment />;
  }
}

export default (
  props: Omit<HideProps, 'hideContent'> & { [x: string]: any },
) => {
  const hideContent = React.useContext(HideContext);
  return <Hide {...props} hideContent={hideContent} />;
};
