FormDetail 快速详情表单
---

快速生成详情表单表单。

## 基础示例


<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```tsx   mdx:preview
import React, { useRef, useState } from 'react';
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
              initialValue: 'zz爱ff',
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
              name: "fruits",
              type: "radio",
              options: [{ label: "青菜", value: 1 }, { label: "黄瓜", value: 2 }],
              initialValue: 2
            }
          ]}
        />
  )
}
export default FormDetailDemo;
```
<!--End-->

## Props

| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| formDatas | 表单集合 | `Array<itemsProps & any>`  |- |
| collapseAttributes | antd collapse 组件属性集合 | Object | - |
| panelAttributes | antd collapse.panel 组件属性集合 | Object | - |
| visible | 折叠表单下是否初始化选中面板 | boolean | false |
| colspan | 表单单行排列 | number | - |
| header | 组件头部标题 |  `React.ReactNode` | - |
| defaultFormItemLayout | 自定义表单栅格宽度占比,参照 antd 栅格布局 | Object | - |
| defaultFormLayout | 自定义表单排列方式 | FormLayout | - |
| size | 尺寸 | number | - |
| type | 表单类型:modal ｜ cardform ｜ CardPro | string | - |
| extra | antd collapse.panel 自定义渲染每个面板右上角的内容 | Object | - |

### itemsProps

| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| defaultcolspan | 表单默认列span | number  |- |
| label | 表单元素标题 | string | - |
| name | 表单名称 antd from 组件 getFieldDecorator 第一个参数 | string | - |
| initialValue | 表单初始值 | string ｜ any | - |
| full | 表单是否独占一行 | boolean | - | 
| hideInForm | 表单隐藏 |  boolean | - |
| attributes | input select 等表单组件属性集合 | T ｜ any | - |
| type |列表需要展示的其他组件，如:（Checkbox,Radio,Select等）| string ｜ undefined | - |
| options | ?? |  `Array<{ label: string, value: string ｜ number }>` | - |
| span | 设置列表的占位格数| number | - |

