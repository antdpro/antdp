import str from '@antdp/basic-layouts/README.md';
import Markdown from '../../components/Preview';
import React from 'react';

export default function Pages() {
  return (
    <Markdown
      {...str}
      editePath="https://github.com/antdpro/antdp/edit/master/packages/basic-layouts/README.md"
    />
  );
}
