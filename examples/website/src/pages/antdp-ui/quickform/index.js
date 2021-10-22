import str from '@antdp/antdp-ui/lib/QuickForm/README.md';
import Markdown from '../../../components/markdown';
import { QuickForm } from '@antdp/antdp-ui';

export default function Pages() {
  return (
    <div>
      <Markdown
        dependencies={{ QuickForm }}
        source={str}
        editePath="https://github.com/antdpro/antdp/edit/master/packages/antdp-ui/src/QuickForm/README.md"
      />
    </div>
  );
}
