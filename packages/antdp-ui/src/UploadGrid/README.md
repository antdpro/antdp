UploadGrid 可拖拽上传组件
---

UploadGrid 可拖拽上传组件。

### 基础示例

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx  mdx:preview
import React, { useState } from 'react';
import { UploadGrid } from '@antdp/antdp-ui'
const Demo = () => {
  const [fileList,setFileList] = useState([])
  const uploadButton = (
    <div>
      <div>Upload</div>
    </div>
  );
  return (
    <div>
      <UploadGrid
        action=""
        listType="picture-card"
        fileList={fileList}
        onChange={({ fileList }) =>setFileList(fileList)}
      >
        {fileList.length >= 9 ? null : uploadButton}
      </UploadGrid>
    </div>
  )
}

export default Demo;
```
<!--End-->

### Props
组件继承 [`antd Upload`](https:ant.design/components/upload-cn/#header)

| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| onChange | 点击上传的回调函数 | `(params: { fileList: UploadFile[] }) => void`  |- |
| useDragHandle | 是否可以拖拽| boolean | - |
| children | 组件渲染的内容 | ReactNode | - |

```ts
export type Props = {
  onChange: (params: { fileList: UploadFile[] }) => void;
  /**是否可以拖拽*/
  useDragHandle?:boolean
  children?: ReactNode;
} & UploadProps & UploadListProps
```
