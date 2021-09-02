import React, { forwardRef } from 'react';
import { Descriptions, Tooltip } from 'antd';
import { DescriptionsProps } from 'antd/es/descriptions';
import { QuickFormProps } from '../QuickForm'
import QucikFrom from '../QuickForm'
import UploadGrid from '../UploadGrid'
import moment from 'moment';

type treeDataProps = {
  label?: string | number | undefined,
  title?: string | number | undefined,
  value: number | string,
  children?: Array<treeDataProps>
}
// 处理TreeSelect数据
const getTreeDataParent = (list: Array<treeDataProps> = [], current: Array<string | number> = [], objList: Array<string | number> = []) => {
  (list || []).forEach((item) => {
    if ((current || []).indexOf(item.value) >= 0) {
      objList.push(item.label || item.title || '');
    }
    if (item.children) {
      getTreeDataParent(item.children, current, objList);
    }
  });
  return objList;
};

interface FormDetailProps extends QuickFormProps<any> {
  isView: boolean;
  bordered: boolean | undefined;
  layout?: 'horizontal' | 'vertical';
  style?: object
  otherDescriptions?: DescriptionsProps
}

type FormDetailComponent = (
  props: FormDetailProps,
  ref?: any
) => React.ReactElement

const FormDetail: FormDetailComponent = (props, ref) => {
  const {
    formDatas = [],
    isView = false,
    header = '',
    type,
    colspan,
    style,
    layout = 'horizontal',
    bordered = true,
    otherDescriptions = {},
    ...others
  } = props
  return (
    <div style={style}>
      {' '}
      {isView ? (
        <Descriptions
          {...otherDescriptions}
          title={header}
          bordered={bordered}
          size="small"
          style={{ marginBottom: 24 }}
          column={colspan}
          layout={layout}
        >
          {formDatas.map((item, idx) => {
            let newOptions = item?.options || []
            let content: string | any;
            if (item.type === 'UploadGrid' || type === 'uploadGrid') {
              content = (
                <UploadGrid
                  useDragHandle={true}
                  {...item.attributes}
                />
              )
            } else if (item.type === 'radio' || item.type === 'Radio') {
              let value = newOptions.filter((itm: { value: any; }) => itm.value === item.initialValue);
              content = value && value.length > 0 && value[0].label || '';
            } else if (typeof item.initialValue === 'object' && moment.isMoment(item.initialValue)) {
              content = item.initialValue.format('YYYY-MM-DD');
            } else if (item.type === 'rangePicker' || item.type === 'RangePicker') {
              if (item.initialValue) {
                item.initialValue.forEach((date: { format: (arg0: string) => string; }) => {
                  if (date) {
                    content += date.format('YYYY-MM-DD HH:mm:ss');
                  }
                })
              }
            } else if (item.type === 'checkbox' || item.type === 'Checkbox') {
              const values = item.initialValue || [];
              const arr: Array<string | number | undefined> = []
              newOptions.forEach(itm => {
                if (values.includes(itm.value)) {
                  arr.push(itm.label)
                }
              })
              content = arr.join(',')
            } else if (item.type === 'cascader' || item.type === 'Cascader') {
              const values = item.initialValue;
              content = values ? values.join('') : '';
            } else if (item.type === 'select' || item.type === 'Select') {
              if (item.attributes && item.attributes.labelInValue) {
                content = item.initialValue && item.initialValue.label;
              } else {
                if (newOptions.length > 0) {
                  let selObj = newOptions.find((itm: { value: any; }) => itm.value === item.initialValue);
                  content = selObj ? selObj.label : item.initialValue;
                } else {
                  content = item.initialValue;
                }
                if (item.attributes && item.attributes.mode === 'multiple') {
                  content = (item.initialValue && item.initialValue.join(' ')) || '';
                }
              }
            } else if (item.type === 'treeSelect' || type === 'TreeSelect') {
              const { attributes, initialValue } = item;
              const { treeData, multiple, labelInValue } = attributes || {};
              // 对象 多选
              if (labelInValue && multiple) {
                content = (initialValue || []).map((item: { label: any; }) => item.label).toString();
                // 多选
              } else if (multiple) {
                const selObj = getTreeDataParent(treeData, [initialValue] || []);
                content = (selObj || []).toString();
                // 单选对象
              } else if (labelInValue) {
                content = (initialValue || {}).label || '';
                // 单选
              } else {
                const treeData = item?.attributes?.treeData || []
                const initialValue = item.initialValue
                if (treeData.length > 0) {
                  const selObj = getTreeDataParent(treeData, [initialValue] || [])
                  content = (selObj || []).toString();
                }
              }
            } else {
              content = typeof item.initialValue === 'object' ? item.initialValue && item.initialValue.label : item.initialValue;
            }
            return (
              !item.hideInForm && (
                <Descriptions.Item key={item.name + idx} label={item.label} span={item.span}>
                  {item.attributes && item.attributes.isTooltip ? (
                    <Tooltip title={content}>
                      <div style={item.attributes && item.attributes.style}>
                        {' '}
                        {content}
                        {item.attributes && item.attributes.addonAfter}
                      </div>
                    </Tooltip>
                  ) : (
                    <div style={item.attributes && item.attributes.style}>
                      {' '}
                      {content}
                      {item.attributes && item.attributes.addonAfter}
                    </div>
                  )}
                </Descriptions.Item>
              )
            );
          })}
        </Descriptions>
      ) : (
        <QucikFrom
          {...others}
          size="default"
          defaultFormLayout="vertical"
          header={header}
          formDatas={formDatas}
          colspan={colspan}
          type={type}
          ref={ref}
        />
      )}
    </div>
  );
}

export default forwardRef(FormDetail);
