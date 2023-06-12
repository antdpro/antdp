import { useLocation } from '@kkt/pro';
import { useMemo } from 'react';

export function useComponentMarkdown() {
  const { pathname } = useLocation();
  const mdText = useMemo(() => {
    const componentName = pathname?.split('/').at(-1);
    if (componentName) {
      try {
        const mdText = require(`src/pages/${componentName}/README.md`)?.default
          ?.source;
        return mdText;
      } catch {}
    }
    return '';
  }, [pathname]);

  return mdText;
}
