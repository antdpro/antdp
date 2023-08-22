FuzzyQuery 模糊查询
===

## 依赖安装

```bash
 npm i @antdp/fuzzy-query
```

## 基本使用

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```tsx mdx:preview
import React from 'react';
import { Input, Col, InputNumber, Button, Select ,Form} from 'antd';
import FuzzyQuery from '@antdp/fuzzy-query';
import 'antd/dist/reset.css';

const Query =() => {
  const [value, setValue] = React.useState([])
  // 根据key模糊查询组织
  const selectLike = async () => {
     return Array.from({ length: 20 }).map((_, index) => {
        return {
          label: `名称---${index}`,
          phone: index,
        }
      })
  };
  return (
    <div>
      <FuzzyQuery
        request={selectLike}
        mode='multiple'
        value={value}
        onChange={setValue}
        placeholder="请选择"
        columns={[{ dataIndex: "label", title: "用户名" }, { dataIndex: "phone", title: "电话" }]}
        fieldNames={{ value: "phone" }}
      />
    </div>
  );
};
export default Query
```

## 延迟时间5s
```tsx mdx:preview
import React from 'react';
import { Input, Col, InputNumber, Button, Select ,Form} from 'antd';
import FuzzyQuery from '@antdp/fuzzy-query';
import 'antd/dist/reset.css';

const Query =() => {
  const [value, setValue] = React.useState([])
  // 根据key模糊查询组织
  const selectLike = async () => {
     return Array.from({ length: 20 }).map((_, index) => {
        return {
          label: `名称---${index}`,
          phone: index,
        }
      })
  };
  return (
    <div>
      <FuzzyQuery
        request={selectLike}
        mode='multiple'
        value={value}
        onChange={setValue}
        placeholder="请选择"
        columns={[{ dataIndex: "label", title: "用户名" }, { dataIndex: "phone", title: "电话" }]}
        fieldNames={{ value: "phone" }}
        debounceTimeout={5000}
      />
    </div>
  );
};
export default Query
```

## API
[更多参数参考 antd5 Select组件](https://ant.design/components/select-cn#api)

| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| columns | 表格标题 | `TablesProps["columns"]`  | - |
| request | 请求 | `(params: any) => Promise<{ label: any, value: any, [s: string]: any }[]>`  | - |
| debounceTimeout | 延迟时间 | `number`  | - |

