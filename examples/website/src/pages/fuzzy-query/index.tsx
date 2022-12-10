//
import str from '@antdp/fuzzy-query/README.md';
import Markdown from '../../components/Preview';
export default function Pages() {
  return (
    <div>
      <Markdown
        {...str}
        editePath="https://github.com/antdpro/antdp/edit/master/packages/antdp-fuzzy-query/README.md"
      />
    </div>
  );
}
