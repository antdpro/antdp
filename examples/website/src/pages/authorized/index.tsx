import str from '@antdp/authorized/README.md';
import Markdown from '../../components/Preview';
import React from 'react';

export default function Pages() {
  return (
    <div>
      <Markdown
        {...str}
        editePath="https://github.com/antdpro/antdp/edit/master/packages/authorized/README.md"
      />
    </div>
  );
}
