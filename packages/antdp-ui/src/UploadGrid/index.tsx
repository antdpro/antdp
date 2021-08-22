import React, { CSSProperties, memo, useState } from 'react';
import { arrayMove, SortableContainer, SortableElement, SortEnd } from 'react-sortable-hoc';
import './pictureGrid.css';
import { UploadFile } from 'antd/es/upload/interface';
import { UploadChangeParam } from 'antd/lib/upload';
import { imagePreview } from './pictureUtil';
import UploadList from 'antd/es/upload/UploadList';
import { Modal, Upload } from 'antd';
import { Props, SortableListParams, SortableItemParams } from './types';


const itemStyle: CSSProperties = {
  width: 104,
  height: 104,
  margin: 4,
  cursor: 'grab'
};

const listStyle: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  maxWidth: '100%',
};
// 照片墙
const SortableItem = SortableElement((params: SortableItemParams) => {
  const { onPreview, onRemove, item, props: attrubites } = params
  return (
    <div style={itemStyle}>
      <UploadList
        {...attrubites}
        locale={{ previewFile: '预览图片', removeFile: '删除图片' }}
        showDownloadIcon={false}
        listType={attrubites.listType}
        onPreview={onPreview}
        onRemove={onRemove}
        items={[item]}
      />
    </div>
  )
})
// 照片墙+上传组件
const SortableList = SortableContainer((params: SortableListParams) => {
  const { items, props, onPreview, onRemove, onChange } = params
  return (
    <div style={listStyle}>
      {items.map((item, index) => (
        <SortableItem
          key={`${item.uid}`}
          index={index}
          item={item}
          props={props}
          onPreview={onPreview}
          onRemove={onRemove}
        />
      ))}
      <Upload
        {...props}
        showUploadList={false}
        onChange={onChange}
      >
        {props.children}
      </Upload>
    </div>
  );
});

const UploadGrid: React.FC<Props> = memo(({ onChange: onFileChange, ...props }) => {
  const [previewImage, setPreviewImage] = useState('');
  const fileList = props.fileList || [];
  const onSortEnd = ({ oldIndex, newIndex }: SortEnd) => {
    onFileChange({ fileList: arrayMove(fileList, oldIndex, newIndex) });
  };

  const onChange = ({ fileList: newFileList }: UploadChangeParam) => {
    onFileChange({ fileList: newFileList });
  };

  const onRemove = (file: UploadFile) => {
    const newFileList = fileList.filter(
      (item) => item.uid !== file.uid
    );
    onFileChange({ fileList: newFileList });
  };

  const onPreview = async (file: UploadFile) => {
    await imagePreview(file, ({ image }) => {
      setPreviewImage(image);
    });
  };
  return (
    <>
      <SortableList
        // 当移动 1 之后再触发排序事件，默认是0，会导致无法触发图片的预览和删除事件
        distance={1}
        items={fileList}
        onSortEnd={onSortEnd}
        axis="xy"
        helperClass="SortableHelper"
        props={props}
        onChange={onChange}
        onRemove={onRemove}
        onPreview={onPreview}
      />
      <Modal
        visible={!!previewImage}
        footer={null}
        onCancel={() => setPreviewImage('')}
        bodyStyle={{ padding: 0 }}
      >
        <img style={{ width: '100%' }} alt="" src={previewImage} />
      </Modal>
    </>
  );
});

export default UploadGrid

