import str from '@antdp/antdp-ui/lib/FormDetail/README.md';
import Markdown from '../../../components/markdown';
import { FormDetail } from '@antdp/antdp-ui';

export default function Pages() {
  return (
    <div>
      <Markdown
        dependencies={{ FormDetail }}
        source={str}
        editePath="https://github.com/antdpro/antdp/edit/master/packages/antdp-ui/src/FormDetail/README.md"
      />
    </div>
  );
}
