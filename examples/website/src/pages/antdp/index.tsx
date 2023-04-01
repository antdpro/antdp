import React from 'react';
import str from 'antdp/README.md';
import Markdown from "../../components/Preview";

export default function Pages() {
  return (
    <Markdown
      {...str}
      editePath="https://github.com/antdpro/antdp/edit/master/packages/antdp/README.md"
    />
  );
}
