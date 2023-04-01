import str from 'create-antdp/README.md';
import Markdown from '../../components/Preview';

export default function Pages() {
  return (
    <Markdown
      {...str}
      editePath="https://github.com/antdpro/antdp/edit/master/packages/antdp/README.md"
    />
  );
}
