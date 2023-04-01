import React from 'react';
import Markdown from '../../components/Preview';
export default function Pages() {
  return (
    <Markdown
      path={() => import('@antdp/edit-table/README.md')}
      editePath="https://github.com/antdpro/antdp/edit/master/packages/antdp-edit-table/README.md"
    />
  );
}
