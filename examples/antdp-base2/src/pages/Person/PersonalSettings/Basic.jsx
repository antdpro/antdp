import { useState, useMemo } from 'react';
import { QuickForm, ButtonGroupPro } from '@antdp/antdp-ui';
import { Card, Space, Avatar, Button, message, Upload } from 'antd';
import 'antd/dist/reset.css';
import { detailItems } from './item';
import { UploadOutlined } from '@ant-design/icons';
import Edit from './Edit';

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const Page = () => {
  const [queryInfo, setInfo] = useState({ time2: 123456, fileList: [] });

  const data = useMemo(() => {
    return detailItems({
      queryInfo,
      setInfo,
    });
  }, [queryInfo, setInfo]);

  return (
    <div>
      <div
        style={{
          fontWeight: 500,
          fontSize: 18,
          marginTop: 12,
          marginBottom: 12,
        }}
      >
        基本设置
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
        <div style={{ width: '50%' }}>
          <Edit />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div>头像</div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar
              size={100}
              style={{ margin: 20 }}
              src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
            />
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>更换头像</Button>
            </Upload>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
