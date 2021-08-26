UploadGrid 可拖拽上传组件
---

UploadGrid 可拖拽上传组件。

### 基础示例

<!--DemoStart--> 
```jsx
import React, { Component } from 'react';
import { UploadGrid } from '@antdp/antdp-ui'
import { PlusOutlined } from '@ant-design/icons/lib';
export default class Home extends Component {
  state = {
    fileList: []
  }
  uploadButton = (
    <div>
      <PlusOutlined />
      <div>Upload</div>
    </div>
  );
  render() {
    return (
      <div>
        <UploadGrid
          action=""
          listType="picture-card"
          fileList={this.state.fileList}
          onChange={({ fileList }) => { this.setState({ fileList: fileList }) }}
        >
          {this.state.fileList.length >= 9 ? null : this.uploadButton}
        </UploadGrid>
      </div>
    )
  }
}
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
