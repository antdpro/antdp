(this["webpackJsonp@example/website"]=this["webpackJsonp@example/website"]||[]).push([[13],{978:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return s}));var i=e(266),o=e(4);function s(){return Object(o.jsx)("div",{children:Object(o.jsx)(i.a,{source:"UploadGrid \u53ef\u62d6\u62fd\u4e0a\u4f20\u7ec4\u4ef6\n---\n\nUploadGrid \u53ef\u62d6\u62fd\u4e0a\u4f20\u7ec4\u4ef6\u3002\n\n### \u57fa\u7840\u793a\u4f8b\n\n\x3c!--DemoStart--\x3e \n```jsx\nimport React, { Component } from 'react';\nimport { UploadGrid } from '@antdp/antdp-ui'\nimport { PlusOutlined } from '@ant-design/icons/lib';\nexport default class Home extends Component {\n  state = {\n    fileList: []\n  }\n  uploadButton = (\n    <div>\n      <PlusOutlined />\n      <div>Upload</div>\n    </div>\n  );\n  render() {\n    return (\n      <div>\n        <UploadGrid\n          action=\"\"\n          listType=\"picture-card\"\n          fileList={this.state.fileList}\n          onChange={({ fileList }) => { this.setState({ fileList: fileList }) }}\n        >\n          {this.state.fileList.length >= 9 ? null : this.uploadButton}\n        </UploadGrid>\n      </div>\n    )\n  }\n}\n```\n\x3c!--End--\x3e\n\n### Props\n\u7ec4\u4ef6\u7ee7\u627f [`antd Upload`](https:ant.design/components/upload-cn/#header)\n```ts\nexport type Props = {\n  onChange: (params: { fileList: UploadFile[] }) => void;\n  /**\u662f\u5426\u53ef\u4ee5\u62d6\u62fd*/\n  useDragHandle?:boolean\n  children?: ReactNode;\n} & UploadProps & UploadListProps\n```\n"})})}}}]);
//# sourceMappingURL=13.34515a47.chunk.js.map