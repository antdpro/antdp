import React from 'react';
import Markdown from '../../components/Preview';

export default function Pages() {
  return (
    <Markdown
      path={() => import('@antdp/layout-tabs/README.md')}
      editePath="https://github.com/antdpro/antdp/edit/master/packages/layout-tabs/README.md"
    />
  );
}
