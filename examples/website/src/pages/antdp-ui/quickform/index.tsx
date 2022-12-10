import str from '@antdp/antdp-ui/lib/QuickForm/README.md';
import Markdown from '../../../components/Preview';

export default function Pages() {
  return (
    <div>
      <Markdown
        {...str}
        editePath="https://github.com/antdpro/antdp/edit/master/packages/antdp-ui/src/QuickForm/README.md"
      />
    </div>
  );
}
