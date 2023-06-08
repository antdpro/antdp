import { ProList } from '@ant-design/pro-components';
import { Button, Space, Tag } from 'antd';
import { request } from '@umijs/max';
import CardDes from '@/components/CardDes';

export default () => {
  return (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <CardDes title="ProList" description="使用ProList快速请求查询列表" />
      <ProList
        toolBarRender={() => {
          return [
            <Button key="3" type="primary">
              新建
            </Button>,
          ];
        }}
        search={{}}
        rowKey="name"
        headerTitle="基础列表"
        request={async (params = {}) =>
          request('https://proapi.azurewebsites.net/github/issues', {
            params,
          })
        }
        pagination={{
          pageSize: 10,
        }}
        showActions="hover"
        metas={{
          title: {
            dataIndex: 'user',
            title: '用户',
          },
          avatar: {
            dataIndex: 'avatar',
            search: false,
          },
          description: {
            dataIndex: 'title',
            search: false,
          },
          subTitle: {
            dataIndex: 'labels',
            render: (_, row) => {
              return (
                <Space size={0}>
                  {row.labels?.map((label) => (
                    <Tag color="blue" key={label.name}>
                      {label.name}
                    </Tag>
                  ))}
                </Space>
              );
            },
            search: false,
          },
          actions: {
            render: (text, row) => [
              <a
                href={row.url}
                target="_blank"
                rel="noopener noreferrer"
                key="link"
              >
                链路
              </a>,
              <a
                href={row.url}
                target="_blank"
                rel="noopener noreferrer"
                key="warning"
              >
                报警
              </a>,
              <a
                href={row.url}
                target="_blank"
                rel="noopener noreferrer"
                key="view"
              >
                查看
              </a>,
            ],
            search: false,
          },
          status: {
            // 自己扩展的字段，主要用于筛选，不在列表中显示
            title: '状态',
            valueType: 'select',
            valueEnum: {
              all: { text: '全部', status: 'Default' },
              open: {
                text: '未解决',
                status: 'Error',
              },
              closed: {
                text: '已解决',
                status: 'Success',
              },
              processing: {
                text: '解决中',
                status: 'Processing',
              },
            },
          },
        }}
      />
    </Space>
  );
};
