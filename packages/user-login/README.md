@antdp/basic-layouts
---

入口公共界面

## Installation

```bash
npm i @antdp/basic-layouts --save
```

## Basic Usage

```jsx
import BasicLayout from '@antdp/basic-layouts';
import logo from './logo.svg';

export default (props) => {
  return (
    <BasicLayout
      {...props}
      projectName="Ant Design Pro2"
      logo={logo}
    />
  )
};
```

## Component Interface

```typescript
import React from 'react';
import { FormProps, FormItemProps } from 'antd/lib/form';
import { InputProps } from 'antd/lib/input';


export interface formItem extends FormItemProps {
  inputProps?: InputProps;
}

export interface UserLoginProps extends FormProps{
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
}
```