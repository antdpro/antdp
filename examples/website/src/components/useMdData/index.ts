import { useEffect, useState } from 'react';
import { CodeBlockData } from 'markdown-react-code-preview-loader';

export type MdDataHandle = () => Promise<{ default: CodeBlockData }>;

const useMdData = (path: MdDataHandle) => {
  const version = VERSION;
  const [mdData, setMdData] = useState<CodeBlockData>({
    source: '',
    components: {},
    data: {},
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(() => true);
    const getMd = async () => {
      try {
        const result = await path();
        if (result.default) {
          // 某些 markdown 文档体会指定文档版本的版本号
          result.default.source = result.default.source.replace(
            /@anem\/anem-app@[\d]+\.[\d]+\.[\d]+/g,
            `@anem/anem-app@${version}`,
          );
          setMdData(result.default);
        }
      } catch (err) {
        console.warn(err);
      }
      setLoading(() => false);
    };
    getMd();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { mdData, loading };
};

export default useMdData;
