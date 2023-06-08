import Markdown from '../../components/Preview';

export default function Pages() {
  return (
    <Markdown
      path={() => import('@antdp/authorized/README.md')}
      editePath="https://github.com/antdpro/antdp/edit/master/packages/authorized/README.md"
    />
  );
}

