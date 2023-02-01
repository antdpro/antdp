import str from '@antdp/config/README.md';
import Markdown from '../../components/Preview';
import React from 'react';

export default function Pages() {
  return (
    <Markdown
      {...str}
      editePath="https://github.com/antdpro/antdp/edit/master/packages/config/README.md"
    />
  );
}
