"use strict";(self.webpackChunk_example_website=self.webpackChunk_example_website||[]).push([[380],{51860:function(n,e,t){t.r(e),t.d(e,{default:function(){return r}});var i="UploadGrid \u53ef\u62d6\u62fd\u4e0a\u4f20\u7ec4\u4ef6\n---\n\nUploadGrid \u53ef\u62d6\u62fd\u4e0a\u4f20\u7ec4\u4ef6\u3002\n\n### \u57fa\u7840\u793a\u4f8b\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport React, { useState } from 'react';\nimport { UploadGrid } from '@antdp/antdp-ui'\nconst Demo = () => {\n  const [fileList,setFileList] = useState([])\n  const uploadButton = (\n    <div>\n      <div>Upload</div>\n    </div>\n  );\n  return (\n    <div>\n      <UploadGrid\n        action=\"\"\n        listType=\"picture-card\"\n        fileList={fileList}\n        onChange={({ fileList }) =>setFileList(fileList)}\n      >\n        {fileList.length >= 9 ? null : uploadButton}\n      </UploadGrid>\n    </div>\n  )\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\x3c!--End--\x3e\n\n### Props\n\u7ec4\u4ef6\u7ee7\u627f [`antd Upload`](https:ant.design/components/upload-cn/#header)\n```ts\nexport type Props = {\n  onChange: (params: { fileList: UploadFile[] }) => void;\n  /**\u662f\u5426\u53ef\u4ee5\u62d6\u62fd*/\n  useDragHandle?:boolean\n  children?: ReactNode;\n} & UploadProps & UploadListProps\n```\n",d=t(94210),o=t(60813),a=t(14218);function r(){return(0,a.jsx)("div",{children:(0,a.jsx)(d.Z,{dependencies:{UploadGrid:o.kB},source:i,editePath:"https://github.com/antdpro/antdp/edit/master/packages/antdp-ui/src/UploadGrid/README.md"})})}}}]);
//# sourceMappingURL=380.e2543336.chunk.js.map