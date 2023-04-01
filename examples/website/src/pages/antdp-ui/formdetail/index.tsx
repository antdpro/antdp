import str from '@antdp/antdp-ui/lib/FormDetail/README.md';
import Markdown from '../../../components/Preview';
import React from 'react';

export default function Pages() {
  return (
    <Markdown
      {...str}
      editePath="https://github.com/antdpro/antdp/edit/master/packages/antdp-ui/src/FormDetail/README.md"
    />
  );
}
