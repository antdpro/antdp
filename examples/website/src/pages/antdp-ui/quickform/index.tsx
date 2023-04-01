import Markdown from '../../../components/Preview';
import React from 'react';

export default function Pages() {
  return (
    <Markdown
      path={() => import('@antdp/antdp-ui/lib/QuickForm/README.md')}
      editePath="https://github.com/antdpro/antdp/edit/master/packages/antdp-ui/src/QuickForm/README.md"
    />
  );
}
