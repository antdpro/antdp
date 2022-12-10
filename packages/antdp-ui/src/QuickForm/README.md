QuickForm 快速表单
---

快速生成Form表单。

### 基础示例

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx  mdx:preview
import React, { useRef } from 'react';
import { QuickForm } from '@antdp/antdp-ui'

const QuickFormDemo = (props) => {
  const baseRef = useRef();
  return (
      <QuickForm
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
          }
        ]}
      />
  );
}
export default QuickFormDemo
```
<!--End-->
### Props

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
| formHide | Form.useFormItemHide 返回值 | Object | - |
| initialHide | 初始值 隐藏显示 字段对应的值 | `{ [x: string]: boolean }` | - |

### itemProps

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
| render | 自定义渲染| JSX.Element | - |

```ts
interface QuickFormProps<Values> extends FormProps<Values> {
  /** 表单集合 */
  formDatas: Array<ItemsProps<object>>,
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
  
   /** Form.useFormItemHide 返回值  */
  formHide?: GetStoreProps;
  /** 初始值 隐藏显示 字段对应的值 */
  initialHide?: { [x: string]: boolean };
}

interface ItemsProps<T> {
  defaultcolspan?: any;
  /** 表单元素标题 */
  label: string,
  /** 表单名称 antd from 组件 getFieldDecorator 第一个参数 */
  name: string,
  /** 表单初始值 */
  initialValue?: string | any,
  /** 表单是否独占一行  */
  full?: boolean,
  /** 表单隐藏  */
  hideInForm?: boolean,
  /** input select 等表单组件属性集合 具体参考 antd  */
  attributes?: T | any,
  type?: string | undefined,
  options?: Array<{ label: string, value: string | number }> | [] | undefined,
  span?: number
  render?: JSX.Element;
}

export type QuickFormComponent<Values = any> = (
  props: QuickFormProps<Values>,
  ref?: ((instance: FormInstance<Values> | null) => void) | React.RefObject<FormInstance<Values>> | null | undefined
) => React.ReactElement
```
