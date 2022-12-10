FuzzyQuery 模糊查询
===

### 依赖安装

```bash
 npm i @antdp/fuzzy-query
```

### 参数

```ts
export interface FuzzyQueryProps extends SelectProps<any> {
  /** 表格标题 */
  columns?: TablesProps["columns"];
  /** 请求 */
  request: (params: any) => Promise<{ label: any, value: any, [s: string]: any }[]>
  /** 延迟时间 */
  debounceTimeout?: number
}
```

### 案例

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```tsx mdx:preview
import ReactDOM from 'react-dom';
import React from 'react';
import { Input, Col, InputNumber, Button, Select ,Form} from 'antd';
import FuzzyQuery from '@antdp/fuzzy-query';
import 'antd/dist/antd.css';

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