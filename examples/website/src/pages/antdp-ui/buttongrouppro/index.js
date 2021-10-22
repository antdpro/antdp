import str from '@antdp/antdp-ui/lib/ButtonGroupPro/README.md';
import Markdown from '../../../components/markdown';
import { ButtonGroupPro } from '@antdp/antdp-ui';

export default function Pages() {
  return (
    <div>
      <Markdown
        dependencies={{ ButtonGroupPro }}
        source={str}
        editePath="https://github.com/antdpro/antdp/edit/master/packages/antdp-ui/src/ButtonGroupPro/README.md"
      />
    </div>
  );
}
