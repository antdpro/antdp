import str from '@antdp/layout-tabs/README.md';
import React from 'react';
import Markdown from '../../components/Preview';

export default function Pages() {
  return (
    <Markdown
      {...str}
      editePath="https://github.com/antdpro/antdp/edit/master/packages/layout-tabs/README.md"
    />
  );
}
