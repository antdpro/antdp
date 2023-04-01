import Markdown from '../../components/Preview';
export default function Pages() {
  return (
    <Markdown
      path={() => import('@antdp/page-loading/README.md')}
      editePath="https://github.com/antdpro/antdp/edit/master/packages/page-loading/README.md"
    />
  );
}
