import str from '@antdp/antdp-ui/lib/CardPro/README.md';
import { CardPro } from '@antdp/antdp-ui';
import Markdown from '../../../components/markdown';

export default function Pages() {
  return (
    <div>
      <Markdown
        dependencies={{ CardPro }}
        source={str}
        editePath="https://github.com/antdpro/antdp/edit/master/packages/antdp-ui/src/CardPro/README.md"
      />
    </div>
  );
}
