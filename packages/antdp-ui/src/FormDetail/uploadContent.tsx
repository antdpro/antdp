
import React, { useState, Fragment } from 'react';
import { Upload, Modal } from 'antd';
import { imagePreview } from '../utils';
import { UploadFile } from 'antd/es/upload/interface';
// 渲染图片
const UploadContent = (props: any) => {
  const { item } = props
  const [previewImage, setPreviewImage] = useState('');

  const onPreview = async (file: UploadFile) => {
    await imagePreview(file, ({ image }) => {
      setPreviewImage(image);
    });
  };
  return (
    <Fragment>
      <Upload
        onPreview={onPreview}
        {...item.attributes}
      />
      <Modal
        visible={!!previewImage}
        footer={null}
        onCancel={() => setPreviewImage('')}
        bodyStyle={{ padding: 0 }}
      >
        <img style={{ width: '100%' }} alt="" src={previewImage} />
      </Modal>
    </Fragment>
  )
}
export default UploadContent