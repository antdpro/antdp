UploadGrid 可拖拽上传组件
---

UploadGrid 可拖拽上传组件。

### 基础示例

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
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
ReactDOM.render(<Demo />, _mount_);
```
<!--End-->

### Props
组件继承 [`antd Upload`](https:ant.design/components/upload-cn/#header)
```ts
export type Props = {
  onChange: (params: { fileList: UploadFile[] }) => void;
  /**是否可以拖拽*/
  useDragHandle?:boolean
  children?: ReactNode;
} & UploadProps & UploadListProps
```
