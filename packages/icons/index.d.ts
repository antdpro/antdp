import React from 'react';
import { AntdIconProps } from '@ant-design/icons/lib/components/AntdIcon';

export interface IconsProps extends AntdIconProps {
  /**
   * 图标类型。遵循图标的命名规范
   */
  type?: string;
}

export default class Icons extends React.Component<IconsProps> {
  static defaultProps: IconsProps;
  constructor(props: IconsProps);
  render(): JSX.Element;
}
