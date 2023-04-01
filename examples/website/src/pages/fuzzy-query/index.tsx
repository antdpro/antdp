import Markdown from '../../components/Preview';
import React from 'react';

export default function Pages() {
  return (
    <Markdown
      path={() => import('@antdp/fuzzy-query/README.md')}
      editePath="https://github.com/antdpro/antdp/edit/master/packages/antdp-fuzzy-query/README.md"
    />
  );
}
