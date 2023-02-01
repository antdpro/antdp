import str from '@antdp/antdp-ui/lib/CardPro/README.md';
import Markdown from '../../../components/Preview';
import React from 'react';

export default function Pages() {
  return (
    <div>
      <Markdown
        {...str}
        editePath="https://github.com/antdpro/antdp/edit/master/packages/antdp-ui/src/CardPro/README.md"
      />
    </div>
  );
}
