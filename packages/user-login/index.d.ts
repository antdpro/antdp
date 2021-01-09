import React from 'react';
import { FormProps, FormItemProps, } from 'antd/lib/form';
import { ButtonProps } from 'antd/lib/button';
import { InputProps } from 'antd/lib/input';
export interface formItem extends FormItemProps {
  inputProps?: InputProps;
}

export interface UserLoginState { }

export interface formBtnsProps {
  label?: JSX.Element,
  attr?: ButtonProps
}

export interface UserLoginProps extends FormProps {
  /**
   * 项目logo
   */
  logo?: JSX.Element;
  /**
   * 项目名称
   */
  projectName?: string;
  className?: string;
  loading?: boolean;
  formItems?: formItem[];
  formBtns?: formBtnsProps[]
}

export default class UserLogin extends React.Component<
  UserLoginProps,
  UserLoginState
  > {
  static defaultProps: UserLoginProps;
  state: UserLoginState;
  constructor(props: UserLoginProps);
  render(): JSX.Element;
}
