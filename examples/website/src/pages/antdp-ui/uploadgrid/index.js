import str from '@antdp/antdp-ui/lib/UploadGrid/README.md';
import Markdown from '../../../components/markdown';
import { UploadGrid } from '@antdp/antdp-ui';

export default function Pages() {
  return (
    <div>
      <Markdown
        dependencies={{ UploadGrid }}
        source={str}
        editePath="https://github.com/antdpro/antdp/edit/master/packages/antdp-ui/src/UploadGrid/README.md"
      />
    </div>
  );
}
