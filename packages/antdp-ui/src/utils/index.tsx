import React from 'react';
import { UploadFile } from 'antd/es/upload/interface';
import { MenusProps } from '../ButtonGroupPro'
import { AuthorizedBtn } from '@antdp/authorized';

const getBase64 = (file: File | Blob | undefined): Promise<string> => {
  if (!file) return Promise.reject(new Error('no file'));
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file!);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

const imagePreview = async (
  file: UploadFile,
  callback: (params: { image: string }) => void,
) => {
  const newFile = file;
  if (!newFile.url && !newFile.preview) {
    newFile.preview = await getBase64(file.originFileObj);
  }
  const newPreviewImage: string = newFile.url || newFile.preview || '';
  callback({
    image: newPreviewImage,
  });
};

const getMenusItems = (menus: MenusProps[] | undefined = []) => {
  const loop = (menus: MenusProps[] | undefined = []) => {
    return menus.map(items => {
      const { label, path, menus } = items
      const object: any = { ...items }
      object.label = path ? <AuthorizedBtn path={path}>{label}</AuthorizedBtn> : label
      if (menus) {
        object.children = loop(menus)
      }
      return object
    })
  }
  return loop(menus)
}

export { imagePreview, getMenusItems };
