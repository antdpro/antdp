import { UploadFile } from 'antd/es/upload/interface';
import { UploadProps, UploadListProps } from 'antd/lib/upload';
import { UploadChangeParam } from 'antd/lib/upload/interface';
import { ReactNode } from 'react';

export type Props = {
  onChange: (params: { fileList: UploadFile[] }) => void;
  children?: ReactNode;
  useDragHandle?: boolean | undefined;
} & UploadProps &
  UploadListProps;
