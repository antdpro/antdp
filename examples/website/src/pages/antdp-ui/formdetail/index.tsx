import str from '@antdp/antdp-ui/lib/FormDetail/README.md';
import Markdown from '../../../components/Preview';

export default function Pages() {
  return (
    <div>
      <Markdown
        {...str}
        editePath="https://github.com/antdpro/antdp/edit/master/packages/antdp-ui/src/FormDetail/README.md"
      />
    </div>
  );
}
