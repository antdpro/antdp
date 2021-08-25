/* eslint-disable camelcase */
import React, { forwardRef, Fragment } from 'react';
import {
  Form,
  Input,
  Select,
  Collapse,
  Row,
  Col,
  Cascader,
  InputNumber,
  Radio,
  Divider,
  AutoComplete,
  Upload,
  Modal,
  Button,
  Checkbox,
  TreeSelect,
  ConfigProvider,
  DatePicker,
  TimePicker,
  FormProps,
  FormInstance
} from 'antd';
import CardPro from '../CardPro';
import UploadGrid from '../UploadGrid'
import zhCN from 'antd/es/locale/zh_CN';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import {
  LoadingOutlined,
  PlusOutlined,
  UploadOutlined,
  AudioOutlined,
} from '@ant-design/icons';
import {
  colLayout_one,
  colLayout_two,
  colLayout_third,
  colLayout_fourth,
  fromItemLayout_two_row,
  fromItemLayout_conspan_two,
  fromItemLayout_conspan_third,
  fromItemLayout_conspan_fourth,
  fromItemLayout_third_row,
  fromItemLayout_conspan_one,
  formDefaultFormItemLayout
} from './formLayout';
import './index.css';

const Panel = Collapse.Panel;
const FormItem = Form.Item;
const Option = Select.Option;
const { Search } = Input;
const { RangePicker, MonthPicker } = DatePicker;

declare type FormLayout = 'horizontal' | 'inline' | 'vertical';

interface itemsProps<T> {
  defaultcolspan: any;
  /** 表单元素标题 */
  label: string,
  /** 表单名称 antd from 组件 getFieldDecorator 第一个参数 */
  name: string,
  /** 表单初始值 */
  initialValue: string | any,
  /** 表单是否独占一行  */
  full: boolean,
  /** 表单隐藏  */
  hideInForm: boolean,
  /** input select 等表单组件属性集合 具体参考 antd  */
  attributes: T | any,
  type?: string | undefined,
  options?: Array<{ label: string, value: string | number }> | [] | undefined,
  span?: number
}

export interface QuickFormProps<Values> extends FormProps<Values> {
  /** 表单集合 */
  formDatas: Array<itemsProps<object>>,
  /** antd collapse 组件属性集合 */
  collapseAttributes?: Object;
  /** antd collapse.panel 组件属性集合 */
  panelAttributes?: Object;
  /** 折叠表单下是否初始化选中面板 */
  visible?: boolean;
  /** 表单单行排列 */
  colspan?: number;
  /** 组件头部标题 */
  header?: React.ReactNode | any;
  /** 自定义表单栅格宽度占比,参照 antd 栅格布局 */
  defaultFormItemLayout?: Object,
  /** 自定义表单排列方式 */
  defaultFormLayout?: FormLayout,
  /** 尺寸,参照 antd */
  size?: any,
  /** 表单类型:modal&cardform&CardPro */
  type?: string,
  /** antd collapse.panel 自定义渲染每个面板右上角的内容 */
  extra?: any
}

export type QuickFormComponent<Values = any> = (
  props: QuickFormProps<Values>,
  ref?: ((instance: FormInstance<Values> | null) => void) | React.RefObject<FormInstance<Values>> | null | undefined
) => React.ReactElement

const QuickForm: QuickFormComponent = (props, ref) => {
  const {
    collapseAttributes,
    panelAttributes,
    visible = false,
    type = "cardform",
    extra,
    formDatas,
    colspan = 3,
    header,
    defaultFormLayout = "vertical",
    defaultFormItemLayout = formDefaultFormItemLayout,
    size = "default",
    ...otherProps
  } = props;

  const HideFormItemDoM = []; // 隐藏的表单
  const FormItemDoM = [];
  let rowcolspan: string | any; // col 里的布局
  let formitemlayout: string | any; // formitem 的布局

  for (var i = 0; i < formDatas.length; i++) {
    if (formDatas[i].hideInForm) {
      HideFormItemDoM.push(formDatas[i]);
    } else {
      FormItemDoM.push(formDatas[i]);
    }
  }
  // 计算一个row里排几个表单；
  const result = [];
  for (let i = 0, j = FormItemDoM.length; i < j; i++) {
    if (FormItemDoM[i].full) {
      result.push(FormItemDoM.slice(i, i + 1));
    } else {
      if (FormItemDoM[i + 1] && FormItemDoM[i + 1].full) {
        result.push(FormItemDoM.slice(i, i + 1));
      } else if (FormItemDoM[i].defaultcolspan) {
        result.push(FormItemDoM.slice(i, i + FormItemDoM[i].defaultcolspan));
        i = i + FormItemDoM[i].defaultcolspan - 1;
      } else {
        result.push(FormItemDoM.slice(i, i + colspan));
        i = i + colspan - 1;
      }
    }
  }
  // 渲染成表单;
  const CollapseFormDoM = (item: any, idx: React.Key | null | undefined) => {
    const {
      label,
      name,
      attributes,
      type,
      options,
      onlyimg,
      defaultFormItemLayout,
      full,
      defaultRowColspan,
      hideInForm,
      descItem,
      ...otherts
    } = item;
    const dataList = options || [];
    const optionDatas =
      dataList &&
      dataList.length > 0 &&
      dataList.map(({ value, label, ...others }: any, _idx: React.Key | null | undefined) => {
        if (type === 'select' || type === 'Select') {
          return (
            <Option value={value} key={_idx} {...others}>
              {label}
            </Option>
          );
        } else if (type === 'radio' || type === 'Radio') {
          return (
            <Radio.Button value={value} key={_idx} {...others}>
              {label}
            </Radio.Button>
          );
        }
      });
    const selectOption = optionDatas ? optionDatas : []
    const rowcolspan_num = [
      colLayout_one,
      colLayout_two,
      colLayout_third,
      colLayout_fourth,
    ];
    const formitemlayout_num = [
      fromItemLayout_conspan_one,
      fromItemLayout_conspan_two,
      fromItemLayout_conspan_third,
      fromItemLayout_conspan_fourth,
    ];
    if (colspan && full) {
      rowcolspan = colLayout_one;
      if (colspan === 3 || colspan === 4) {
        if (props.defaultFormItemLayout) {
          // 如果FormCollapse组件上带有defaulFormItemLayout参数
          formitemlayout = props.defaultFormItemLayout;
          // eslint-disable-next-line max-depth
          if (item.defaultFormItemLayout || item.defaultRowColspan) {
            // 如果FormCollapse组件内部的某个小组件带有defaulFormItemLayout参数
            formitemlayout = item.defaultFormItemLayout;
            rowcolspan = item.defaultRowColspan; // 单独的表单col 布局
          }
        } else if (item.defaultFormItemLayout || item.defaultRowColspan) {
          //FormCollapse组件内部只有某个小组件带了defaulFormItemLayout参数
          formitemlayout = item.defaultFormItemLayout;
          rowcolspan = item.defaultRowColspan; // 单独的表单col 布局
        } else {
          formitemlayout = fromItemLayout_third_row;
        }
      } else {
        formitemlayout = fromItemLayout_two_row;
      }
    } else {
      rowcolspan = rowcolspan_num[colspan - 1];
      if (props.defaultFormItemLayout) {
        formitemlayout = props.defaultFormItemLayout;
        if (item.defaultFormItemLayout || item.defaultRowColspan) {
          // 如果FormCollapse组件内部的某个小组件带有defaultFormItemLayout参数
          formitemlayout = item.defaultFormItemLayout;
          rowcolspan = item.defaultRowColspan; // 单独的表单col 布局
        }
      } else if (item.defaultFormItemLayout || item.defaultRowColspan) {
        formitemlayout =
          item.defaultFormItemLayout || formitemlayout_num[colspan - 1];
        rowcolspan = item.defaultRowColspan; // 单独的表单col 布局
      } else {
        formitemlayout = formitemlayout_num[colspan - 1];
      }
    }

    // 上传图片的按钮展示
    const uploadButtonDom = () => {
      if (item.attributes.listType === 'picture-card') {
        if (item.attributes.imageUrl && item.attributes.imageUrl !== '') {
          return (
            <img
              src={item.attributes.imageUrl}
              alt="avatar"
              style={{ width: '100%' }}
            />
          );
        } else if (item.attributes.fileList) {
          // 上传的图片大于或等于8张时 并且 没有onlyimg参数，显示icon上传按钮
          if (item.attributes.fileList.length >= 8 && !onlyimg) {
            return (
              <div>
                {item.attributes.loading === 'loading' ? (
                  <LoadingOutlined />
                ) : (
                  <PlusOutlined />
                )}
                <div className="ant-upload-text">上传</div>
              </div>
            );
            // 上传的图片大于或等于1张时 并且 有onlyimg参数，不显示上传按钮
          } else if (item.attributes.fileList.length >= 1 && onlyimg) {
            return null;
          }
          return (
            <div>
              {item.attributes.loading === 'loading' ? (
                <LoadingOutlined />
              ) : (
                <PlusOutlined />
              )}
              <div className="ant-upload-text">上传</div>
            </div>
          );
        }
      } else {
        return (
          <div>
            <Button>
              <UploadOutlined />
              上传
            </Button>
          </div>
        );
      }
    };

    return (
      <Col
        key={idx}
        style={{
          display: item.hideInForm ? 'none' : 'block',
          padding:
            defaultFormLayout && defaultFormLayout === 'vertical'
              ? '0px 12px 8px 12px'
              : '0',
        }}
        className={
          defaultFormLayout && defaultFormLayout === 'vertical'
            ? 'antdp-FormCol'
            : ''
        }
        {...rowcolspan}
      >
        <FormItem
          className="antdp-FormItem"
          colon={false}
          label={label}
          name={name}
          {...(defaultFormLayout && defaultFormLayout === 'vertical'
            ? null
            : formitemlayout)}
          {...otherts}
        >
          {name ? (
            (() => {
              // 组件基础参数
              const componentprams = {
                size: size ? size : 'small',
                ...attributes,
              };
              if (type === 'select' || type === 'Select') {
                return (
                  <Select
                    dropdownMatchSelectWidth={false}
                    allowClear
                    placeholder={
                      attributes && attributes.disabled ? '' : `请选择${label} `
                    }
                    {...componentprams}
                  >
                    {selectOption}
                  </Select>
                );
              } else if (type === 'radio' || type === 'Radio') {
                return (
                  <Radio.Group size={size ? size : 'small'} {...attributes}>
                    {selectOption}
                  </Radio.Group>
                );
              } else if (type === 'datePicker' || type === 'DatePicker') {
                return (
                  <DatePicker
                    locale={locale}
                    style={{ width: '100%' }}
                    placeholder={
                      attributes && attributes.disabled ? '' : `请选择${label} `
                    }
                    {...componentprams}
                  />
                );
              } else if (type === 'monthPicker' || type === 'MonthPicker') {
                return (
                  <MonthPicker
                    locale={locale}
                    style={{ width: '100%' }}
                    placeholder={
                      attributes && attributes.disabled ? '' : `请选择${label} `
                    }
                    {...componentprams}
                  />
                );
              } else if (type === 'rangePicker' || type === 'RangePicker') {
                return (
                  <RangePicker
                    locale={locale}
                    style={{ width: '100%' }}
                    {...componentprams}
                  />
                );
              } else if (
                type === 'timepicker' ||
                type === 'timePicker' ||
                type === 'TimePicker'
              ) {
                return (
                  <TimePicker
                    locale={locale}
                    style={{ width: '100%' }}
                    placeholder={
                      attributes && attributes.disabled ? '' : `请选择${label} `
                    }
                    {...componentprams}
                  />
                );
              } else if (type === 'cascader' || type === 'Cascader') {
                return (
                  <Cascader
                    placeholder={
                      attributes && attributes.disabled ? '' : `请选择${label} `
                    }
                    {...componentprams}
                  />
                );
              } else if (type === 'textarea' || type === 'TextArea') {
                return (
                  <Input.TextArea
                    placeholder={
                      attributes && attributes.disabled ? '' : `请输入${label} `
                    }
                    {...componentprams}
                  />
                );
              } else if (type === 'inputNumber' || type === 'InputNumber') {
                return (
                  <InputNumber
                    placeholder={
                      attributes && attributes.disabled ? '' : `请输入${label} `
                    }
                    style={{ width: '100%' }}
                    {...componentprams}
                  />
                );
              } else if (type === 'treeSelect' || type === 'TreeSelect') {
                return (
                  <TreeSelect
                    placeholder={
                      attributes && attributes.disabled ? '' : `请选择${label} `
                    }
                    {...componentprams}
                  ></TreeSelect>
                );
              } else if (type === 'checkbox' || type === 'Checkbox') {
                if (
                  (item.options && item.options.length > 0) ||
                  (item.option && item.option.length > 0)
                ) {
                  return (
                    <Checkbox.Group
                      options={item.options || item.option}
                      {...attributes}
                    />
                  );
                }
                return (
                  <Checkbox {...attributes}>
                    {label || item.checkboxLable}
                  </Checkbox>
                );
              } else if (type === 'upload') {
                return (
                  <Fragment>
                    <Upload {...attributes} className="antdp-upload-images">
                      {uploadButtonDom()}
                    </Upload>
                    {attributes.listType === 'picture-card' ? (
                      <Modal
                        visible={attributes.previewVisible}
                        footer={null}
                        onCancel={attributes.onCancel}
                      >
                        <img
                          alt="example"
                          style={{ width: '100%' }}
                          src={attributes.previewImage}
                        />
                      </Modal>
                    ) : null}
                  </Fragment>
                );
              } else if (type === 'UploadGrid' || type === 'uploadGrid') {
                return (
                  <UploadGrid {...attributes}>
                    {uploadButtonDom()}
                  </UploadGrid>
                )
              } else if (type === 'autoComplete' || type === 'AutoComplete') {
                return (
                  <AutoComplete
                    placeholder={
                      attributes && attributes.disabled ? '' : `请输入${label} `
                    }
                    {...componentprams}
                  />
                );
              } else if (type === 'Password') {
                return (
                  <Input.Password
                    placeholder={
                      attributes && attributes.disabled ? '' : `请输入${label} `
                    }
                    {...componentprams}
                  />
                );
              } else {
                if (
                  (attributes && attributes.type === 'Search') ||
                  type === 'InputSearch'
                ) {
                  const suffix = (
                    <AudioOutlined
                      style={{
                        fontSize: 16,
                        color: '#fff',
                      }}
                    />
                  );
                  return (
                    <Search
                      suffix={suffix}
                      placeholder={
                        attributes && attributes.disabled
                          ? ''
                          : `请输入${label} `
                      }
                      {...componentprams}
                    />
                  );
                }
                return (
                  <Input
                    placeholder={
                      attributes && attributes.disabled ? '' : `请输入${label} `
                    }
                    {...componentprams}
                  />
                );
              }
            })()
          ) : (
            <Input
              placeholder={
                attributes && attributes.disabled ? '' : `请输入${label} `
              }
              size={size}
              {...attributes}
            />
          )}
        </FormItem>
      </Col>
    );
  };
  // 隐藏的表单集合
  const hideCollapseForm = HideFormItemDoM.map((item, idx) => CollapseFormDoM(item, idx));
  // 表单集合
  const CollapseForm = result.map((it, indix) => {
    return (
      <Row key={indix}>
        {it.map((item, idx) => {
          return CollapseFormDoM(item, idx);
        })}
      </Row>
    );
  });
  // Form+表单集合
  const FormDom = (
    <ConfigProvider locale={zhCN}>
      <Form
        layout={defaultFormLayout ? defaultFormLayout : 'horizontal'}
        ref={ref}
        {...(defaultFormLayout && defaultFormLayout === 'vertical'
          ? null
          : formitemlayout)}
        {...otherProps}
      >
        <Row>{hideCollapseForm}</Row>
        <div>{CollapseForm}</div>
      </Form>
    </ConfigProvider>
  );
  // type 为 modal时没有折叠，没有标题，直接显示form表单内容
  if (type === 'modal') {
    return <div style={{ margin: -10 }}>{FormDom}</div>;
  }
  // type 为CardPro  带标题
  if (type === 'CardPro') {
    return (
      <CardPro title={header}>
        <div className="antdp-FormBox">{FormDom}</div>
      </CardPro>
    );
  }
  // type 为cardform 时 显示表单，分割线 分离每个表单
  if (type === 'cardform') {
    return (
      <div>
        <h3 className="antdp-FormTitle">{header}</h3>
        {FormDom}
        <Divider type="horizontal" className="antdp-FormDivider" />
      </div>
    );
  }
  return (
    <Collapse
      defaultActiveKey={!visible ? ['1'] : ''}
      {...collapseAttributes}
      className="antdp-mb10"
    >
      <Panel header={header} key="1" {...panelAttributes} extra={extra}>
        {FormDom}
      </Panel>
    </Collapse>
  );
};

export default forwardRef(QuickForm);
