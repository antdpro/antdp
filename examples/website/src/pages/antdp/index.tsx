import str from 'antdp/README.md';
import Markdown from "./../../components/Preview";

export default function Pages() {
  return (
    <div>
      <Markdown
        {...str}
        editePath="https://github.com/antdpro/antdp/edit/master/packages/antdp/README.md"
      />
    </div>
  );
}
