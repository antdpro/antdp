import str from '@antdp/antdp-ui/lib/UploadGrid/README.md';
import Markdown from '../../../components/Preview';
import React from 'react';

export default function Pages() {
  return (
    <div>
      <Markdown
        {...str}
        editePath="https://github.com/antdpro/antdp/edit/master/packages/antdp-ui/src/UploadGrid/README.md"
      />
    </div>
  );
}
