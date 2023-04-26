import { useState } from 'react';
import { useBoolean } from 'ahooks';
export default function useModelDemo() {
  // 表单
  const [queryInfo, setInfo] = useState({ time2: 123456, fileList: [] });
  // isView=true查看 isView=false新增&编辑
  const [isView, setIsView] = useState(false);
  // drawer弹框
  const [drawerVisible, { setFalse, setTrue }] = useBoolean(false);

  return {
    drawerVisible,
    setTrue,
    setFalse,
    queryInfo,
    setInfo,
    isView,
    setIsView,
  };
}
