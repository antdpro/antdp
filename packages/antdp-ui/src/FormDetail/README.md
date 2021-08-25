FormDetail 快速详情表单
---

快速生成详情表单表单。

### 基础示例

<!--DemoStart--> 
```jsx
import React, { useRef , useState } from 'react';
import { FormDetail } from '@antdp/antdp-ui'

const FormDetailDemo = () => {
  return (
       <FormDetail
        isView={true}
        formDatas={[
          {
            label: "备注",
            name: "remark",
            type: "input",
            initialValue: 'zz爱ff'
          },
          {
            label: "水果",
            name: "fruit",
            type: "select",
            options: [{ label: "苹果", value: 1 }],
            initialValue: 1
          },
          {
            label: "蔬菜",
            name: "fruit",
            type: "radio",
            options: [{ label: "青菜", value: 1 }, { label: "黄瓜", value: 2 }],
            initialValue: 2
          },
          {
            label: "蔬菜",
            name: "fruit",
            type: "datePicker",
            initialValue: moment()
          }
        ]}
      />
  );
}
export default FormDetailDemo
```
<!--End-->

### Props

```ts
interface FormDetailProps extends QuickFormProps<any> {
  isView: boolean;
  bordered: boolean | undefined;
  layout?: 'horizontal' | 'vertical';
  style?:object;
  otherDescriptions?:DescriptionsProps
}

interface QuickFormProps<Values> extends FormProps<Values> {
  /** 表单集合 */
  formDatas: Array<itemsProps | any>,
  /** antd collapse 组件属性集合 */
  collapseAttributes?: Object;
  /** antd collapse.panel 组件属性集合 */
  panelAttributes?: Object;
  /** 折叠表单下是否初始化选中面板 */
  visible?: boolean;
  /** 表单单行排列 */
  colspan?: number;
  /** 组件头部标题 */
  header?: React.ReactNode | any;
  /** 自定义表单栅格宽度占比,参照 antd 栅格布局 */
  defaultFormItemLayout?: Object,
  /** 自定义表单排列方式 */
  defaultFormLayout?: FormLayout,
  /** 尺寸,参照 antd */
  size?: any,
  /** 表单类型:modal&cardform&CardPro */
  type?: string,
  /** antd collapse.panel 自定义渲染每个面板右上角的内容 */
  extra?: any
}

interface itemsProps<T> {
  defaultcolspan: any;
  /** 表单元素标题 */
  label: string,
  /** 表单名称 antd from 组件 getFieldDecorator 第一个参数 */
  name: string,
  /** 表单初始值 */
  initialValue: string | any,
  /** 表单是否独占一行  */
  full: boolean,
  /** 表单隐藏  */
  hideInForm: boolean,
  /** input select 等表单组件属性集合 具体参考 antd  */
  attributes: T | any,
  type?: string | undefined,
  options?: Array<{ label: string, value: string | number }> | [] | undefined,
  span?: number
}

```
