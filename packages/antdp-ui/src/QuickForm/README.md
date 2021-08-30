QuickForm 快速表单
---

快速生成Form表单。

### 基础示例

<!--DemoStart--> 
```jsx
import React, { useRef , useState } from 'react';
import { QuickForm } from '@antdp/antdp-ui'

const QuickFormDemo = (props) => {
  const [ fileList , setFileList ] =useState([])
  const baseRef = useRef();
  return (
      <QuickForm
        ref={baseRef}
        formDatas={[
          {
            label: "备注",
            name: "remark",
            type: "input"
          },
          {
            label: "水果",
            name: "fruit",
            type: "select",
            options: [{ label: "apple", value: 1 }]
          },
          {
            label: "照片",
            name: "picture",
            type: "UploadGrid",
            full:true,
            attributes:{
              fileList:fileList,
              onChange:({ fileList }) =>setFileList(fileList) ,
              action:"",
              listType:"picture-card",
              // 是否展示下载&查看&删除按钮
              showDownloadIcon:false
              showPreviewIcon:true
              showRemoveIcon:true
            }
          }
        ]}
      />
  );
}
export default QuickFormDemo
```
<!--End-->

### Props

```ts

interface QuickFormProps<Values> extends FormProps<Values> {
  /** 表单集合 */
  formDatas: Array<ItemsProps | any>,
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

interface ItemsProps {
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
  attributes: object
}

export type QuickFormComponent<Values = any> = (
  props: QuickFormProps<Values>,
  ref?: ((instance: FormInstance<Values> | null) => void) | React.RefObject<FormInstance<Values>> | null | undefined
) => React.ReactElement
```
