QuickForm 快速表单
---

快速生成Form表单。

## 基础示例

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx  mdx:preview
import React, { useRef } from 'react';
import { QuickForm,CardPro } from '@antdp/antdp-ui'

const QuickFormDemo = (props) => {
  const baseRef = useRef();
  return (
    <CardPro>
       <QuickForm
        formDatas={[
          {
            label: "备注",
            name: "remark",
            type: "input",
            initialValue:"1234"
          },
          {
            label: "水果",
            name: "fruit",
            type: "select",
            options: [{ label: "apple", value: 1 }]
          }
        ]}
      />
    </CardPro>
  );
}
export default QuickFormDemo
```

## 各种类型表单

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx  mdx:preview
import React, { useRef } from 'react';
import { QuickForm } from '@antdp/antdp-ui'

const QuickFormDemo = (props) => {
  const baseRef = useRef();
  return (
    <div>
      <QuickForm
        header="折叠表单"
        type=""
        formDatas={[
          {
            label: "备注",
            name: "remark",
            type: "input"
          },
          {
            label: "备注2",
            name: "remark2",
            type: "input"
          }
        ]}
      />
      <QuickForm
        type="cardform"
        header="cardform 时 显示表单，分割线 分离每个表单"
        formDatas={[
          {
            label: "备注",
            name: "remark",
            type: "input"
          }
        ]}
      />
      <QuickForm
        type="CardPro"
        header="CardPro时，为卡片表单"
        formDatas={[
          {
            label: "备注",
            name: "remark",
            type: "input"
          }
        ]}
      />
    </div>
  );
}
export default QuickFormDemo
```

## 表单排列

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx  mdx:preview
import React, { useRef } from 'react';
import { QuickForm,CardPro } from '@antdp/antdp-ui'

const QuickFormDemo = (props) => {
  const baseRef = useRef();
  return (
    <CardPro>
       <QuickForm
        colspan={1}
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
    </CardPro>
  );
}
export default QuickFormDemo
```

## 表单size

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx  mdx:preview
import React, { useRef } from 'react';
import { QuickForm,CardPro } from '@antdp/antdp-ui'

const QuickFormDemo = (props) => {
  const baseRef = useRef();
  return (
    <CardPro>
      <QuickForm
        size="small"
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
    </CardPro>
  );
}
export default QuickFormDemo
```

## 折叠表单时每个面板右上角的内容

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx  mdx:preview
import React, { useRef } from 'react';
import { QuickForm,CardPro } from '@antdp/antdp-ui'

const QuickFormDemo = (props) => {
  const baseRef = useRef();
  return (
    <CardPro>
      <QuickForm
        type=""
        extra={<div>右上角内容</div>}
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
    </CardPro>
  );
}
export default QuickFormDemo
```

## 初始隐藏表单项

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx  mdx:preview
import React, { useRef } from 'react';
import { QuickForm,CardPro } from '@antdp/antdp-ui'

const QuickFormDemo = (props) => {
  const baseRef = useRef();
  // 获取form表单隐藏方法
  const [hide] = QuickForm.useFormItemHide();

   // 表单变更
  const onValuesChange = ({ remark }) => {
    if (remark === '1234') {
      // 组件显示
      hide.updateValue('fruit', false);
    } else{
      // 组件隐藏
      hide.updateValue('fruit', true);
    }
  };
  return (
    <CardPro>
      <QuickForm
        initialHide={{ 'fruit': true }}
        formHide={hide}
        onValuesChange={onValuesChange}
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
            isHide: true,
            options: [{ label: "apple", value: 1 }]
          }
        ]}
      />
    </CardPro>
  );
}
export default QuickFormDemo
```

## 表单提交验证

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx  mdx:preview
import React, { useRef,useState } from 'react';
import { QuickForm,CardPro,ButtonGroupPro } from '@antdp/antdp-ui'

const QuickFormDemo = (props) => {
  const [state,setState]=useState({})
  const baseRef = useRef();
  return (
    <CardPro>
       <QuickForm
        ref={baseRef}
        formDatas={[
          {
            label: "备注",
            name: "remark",
            type: "input",
            rules: [{required: true}]
          },
          {
            label: "水果",
            name: "fruit",
            type: "select",
            options: [{ label: "apple", value: 1 }]
          }
        ]}
      />
      <ButtonGroupPro
        button={[
          {
            type: 'primary',
            label: '提交',
            onClick: async () => {
              const value = await baseRef?.current?.validateFields();
              setState({...value})
            },
          }
        ]}
      />
      <div>{JSON.stringify(state)}</div>
    </CardPro>
  );
}
export default QuickFormDemo
```

<!--End-->
## Props
组件继承[antd Form](https://ant.design/components/form-cn)

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
| extra | antd collapse.panel 自定义渲染每个面板右上角的内容 | `React.ReactNode` | - |
| formHide | Form.useFormItemHide 返回值 | Object | - |
| initialHide | 初始值 隐藏显示 字段对应的值 | `{ [x: string]: boolean }` | - |
| initialHide | 初始值 隐藏显示 字段对应的值 | `{ [x: string]: boolean }` | - |

## itemProps

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