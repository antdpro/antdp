import { selectPage } from '@/services/api';
import { BetaSchemaForm, ProTable } from '@ant-design/pro-components';
import { Button } from 'antd';
import 'antd/dist/reset.css';
import { columns, schema } from './item';

const Edit = ({ queryData, label }) => {
  return (
    <BetaSchemaForm
      title={label}
      trigger={label === '新增' ? <Button type="primary">{label}</Button> : <a>{label}</a>}
      modalProps={{
        destroyOnClose: true,
      }}
      layoutType="ModalForm"
      onFinish={async (values) => {
        console.log(values);
      }}
      colProps={{
        span: 12,
      }}
      grid={true}
      columns={schema({ queryData })}
    />
  );
};

const Demo = () => {
  return (
    <div>
      <ProTable
        headerTitle="列表"
        options={false}
        search={{
          labelWidth: 'auto',
        }}
        toolBarRender={() => <Edit queryData={{}} label="新增" />}
        request={async (params = {}) => {
          const { code, data } = await selectPage(params);
          if (code && code === 200) {
            return {
              data: data.rows || [],
              total: data.total,
              success: true,
            };
          }
        }}
        pagination={{
          showSizeChanger: true,
        }}
        cardProps={{
          size: 'small',
          style: {
            padding: 0,
          },
        }}
        cardBordered
        columns={columns({ edit: <Edit /> })}
        rowKey="id"
      />
    </div>
  );
};
export default Demo;
