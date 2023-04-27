import { useEffect, useState } from 'react';
import { CodeBlockData } from 'markdown-react-code-preview-loader';

export type MdDataHandle = () => Promise<{ default: CodeBlockData }>;

export const useMdData = (path: MdDataHandle) => {
  const [mdData, setMdData] = useState<CodeBlockData>({
    source: '',
    components: {},
    data: {},
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const $main = document.getElementsByTagName(
      'main',
    ) as HTMLCollectionOf<HTMLDivElement>;
    $main[0].scrollTo(0, 0);
  }, [path]);

  useEffect(() => {
    setLoading(() => true);
    const getMd = async () => {
      try {
        const result = await path();
        if (result.default) {
          setMdData(result.default);
        }
      } catch (err) {
        console.warn(err);
      }
      setLoading(() => false);
    };
    getMd();
    // eslint-disable-next-line
  }, [path]);
  return { mdData, loading };
};
