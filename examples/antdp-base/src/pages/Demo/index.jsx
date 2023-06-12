import { selectPage } from '@/services/api';
import { BetaSchemaForm, ProCard, ProTable } from '@ant-design/pro-components';
import { useDispatch, useSelector } from '@umijs/max';
import { Button, Modal } from 'antd';
import 'antd/dist/reset.css';
import { cloneElement, useRef } from 'react';
import { columns, schema } from './item';

const Edit = ({ visible, onClose, queryData }) => {
  const formRef = useRef();
  return (
    <Modal
      modalRender={(comps) => {
        return cloneElement(comps, {
          ...comps.props,
          style: {
            padding: 0,
          },
        });
      }}
      width={600}
      open={visible}
      onCancel={onClose}
      destroyOnClose={true}
      footer={
        <div
          style={{
            paddingBottom: 24,
            paddingRight: 24,
          }}
        >
          <Button key="cancel" onClick={onClose}>
            取消
          </Button>
          <Button
            key="save"
            type="primary"
            onClick={() => {
              formRef.current
                ?.validateFields()
                .then((values) => {
                  console.log('values', values);
                })
                .catch((err) => console.log('err', err));
            }}
          >
            保存
          </Button>
        </div>
      }
    >
      <ProCard title="新增/编辑" headerBordered bodyStyle={{ paddingBottom: 0 }}>
        <BetaSchemaForm
          formRef={formRef}
          submitter={false}
          layoutType="Form"
          onFinish={async (values) => {
            console.log(values);
          }}
          colProps={{
            span: 12,
          }}
          grid={true}
          columns={schema({ queryData })}
        />
      </ProCard>
    </Modal>
  );
};

const Demo = () => {
  const { queryData, visible } = useSelector((state) => state.demo);
  const dispatch = useDispatch();
  const update = (data) => {
    dispatch({
      type: 'demo/update',
      payload: data,
    });
  };
  const handleEdit = (record) => {
    update({ queryData: { ...record }, visible: true });
  };
  return (
    <div>
      <ProTable
        headerTitle="列表"
        options={false}
        search={{
          labelWidth: 'auto',
        }}
        toolBarRender={() => (
          <Button type="primary" onClick={() => update({ queryData: {}, visible: true })} key="add">
            新增
          </Button>
        )}
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
        columns={columns({ handleEdit })}
        rowKey="id"
      />
      <Edit queryData={queryData} visible={visible} onClose={() => update({ visible: false })} />
    </div>
  );
};
export default Demo;
