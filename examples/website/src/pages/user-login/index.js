import str from '@antdp/user-login/README.md';
import Markdown from '../../components/markdown';

export default function Pages() {
  return (
    <Markdown
      source={str}
      editePath="https://github.com/antdpro/antdp/edit/master/packages/user-login/README.md"
    />
  );
}
