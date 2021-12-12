import str from '@antdp/edit-table/README.md';
import Markdown from '../../components/markdown';
import * as antd from 'antd';
import EditTable from '@antdp/edit-table';
export default function Pages() {
  return (
    <div>
      <Markdown
        dependencies={{ ...antd, EditTable }}
        source={str}
        editePath="https://github.com/antdpro/antdp/edit/master/packages/antdp-edit-table/README.md"
      />
    </div>
  );
}
