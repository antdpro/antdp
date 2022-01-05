//
import str from '@antdp/fuzzy-query/README.md';
import Markdown from '../../components/markdown';
import * as antd from 'antd';
import FuzzyQuery from '@antdp/fuzzy-query';
export default function Pages() {
  return (
    <div>
      <Markdown
        dependencies={{ ...antd, FuzzyQuery }}
        source={str}
        editePath="https://github.com/antdpro/antdp/edit/master/packages/antdp-fuzzy-query/README.md"
      />
    </div>
  );
}
