import React from 'react';
import str from '@antdp/edit-table/README.md';
import Markdown from '../../components/Preview';
export default function Pages() {
  return (
    <div>
      <Markdown
        {...str}
        editePath="https://github.com/antdpro/antdp/edit/master/packages/antdp-edit-table/README.md"
      />
    </div>
  );
}
