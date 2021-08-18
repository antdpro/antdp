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
  Card,
} from 'antd';
import CardPro from '../CardPro';
import PropTypes from 'prop-types';
import zhCN from 'antd/es/locale/zh_CN';
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
} from './formLayout';
import './index.css';

const Panel = Collapse.Panel;
const FormItem = Form.Item;
const Option = Select.Option;
const { Search } = Input;
const { RangePicker, MonthPicker } = DatePicker;

const QuickForm = forwardRef((props, ref) => {
  const {
    collapseAttributes, // antd collapse 组件属性集合
    panelAttributes, // antd collapse.panel 组件属性集合
    visible, // 折叠表单下是否初始化选中面板
    type, // 表单类型（弹框，显示分割线或折叠)modal,cardform, CardPro
    extra, // antd collapse.panel 自定义渲染每个面板右上角的内容
    formDatas, // 表单集合
    colspan, // 表单单行排列
    header, // 组件头部标题
    defaultFormLayout, // 自定义表单排列方式
    // eslint-disable-next-line no-unused-vars
    defaultFormItemLayout, // 自定义表单栅格宽度占比,参照 antd 栅格布局
    size, // 表单大小
    ...otherProps
  } = props;

  const HideFormItemDoM = []; // 隐藏的表单
  const FormItemDoM = [];
  let rowcolspan = ''; // col 里的布局
  let formitemlayout = ''; // formitem 的布局

  for (var i = 0; i < formDatas.length; i++) {
    if (formDatas[i].hideInForm) {
      HideFormItemDoM.push(formDatas[i]);
    } else {
      FormItemDoM.push(formDatas[i]);
    }
  }
  // 渲染成表单；
  const CollapseFormDoM = (item, idx) => {
    const {
      label,
      name,
      attributes,
      type,
      radioOptions,
      options,
      option,
      onlyimg,
      // eslint-disable-next-line no-unused-vars
      defaultFormItemLayout,
      dispatchOption,
      full,
      // eslint-disable-next-line no-unused-vars
      defaultRowColspan,
      // eslint-disable-next-line no-unused-vars
      hideInForm,
      // eslint-disable-next-line no-unused-vars
      descItem,
      ...otherts
    } = item;
    // 渲染下拉条件, 同时兼容option || options || radioOptions
    // eslint-disable-next-line max-len
    const dataList =
      option ||
      options ||
      radioOptions ||
      attributes?.option ||
      attributes?.options ||
      attributes?.radioOptions ||
      [];
    const optionDatas =
      dataList &&
      dataList.length > 0 &&
      // eslint-disable-next-line array-callback-return
      dataList.map(({ value, label, ...others }, _idx) => {
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
    const selectOption = optionDatas
      ? optionDatas
      : dispatchOption || attributes?.dispatchOption;

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
      // if (defaultFormLayout && defaultFormLayout === "vertical") {
      //   formitemlayout = null;
      // }
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
      // if (defaultFormLayout && defaultFormLayout === "vertical") {
      //   formitemlayout = null;
      // }
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
            ? 'and-FormCol'
            : ''
        }
        {...rowcolspan}
      >
        <FormItem
          className="and-FormItem"
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
              } else if (type === 'selectRange' || type === 'SelectRange') {
                return (
                  <SelectRange
                    label={label}
                    onChange={props.onChange}
                    rules={item.rules}
                    optionfirst={item.optionfirst}
                    optionlast={item.optionlast}
                    {...attributes}
                  />
                );
              } else if (type === 'radio' || type === 'Radio') {
                return (
                  <Radio.Group size={size ? size : 'small'} {...attributes}>
                    {selectOption}
                  </Radio.Group>
                );
              } else if (type === 'checkradio' || type === 'CheckRadio') {
                return (
                  <CheckRadio
                    option={item.options || item.option}
                    placeholder={
                      attributes && attributes.disabled ? '' : `请输入${label} `
                    }
                    {...componentprams}
                    onChange={props.onChange}
                    rules={item.rules}
                  />
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
                    placeholder={
                      attributes && attributes.disabled ? '' : `请选择${label} `
                    }
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
                    <Upload {...attributes} className="and-upload-images">
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

  // 隐藏的表单
  const hideCollapseForm = HideFormItemDoM.map((item, idx) =>
    CollapseFormDoM(item, idx),
  );

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
  const CollapseForm = result.map((it, indix) => {
    return (
      <Row key={indix}>
        {it.map((item, idx) => {
          return CollapseFormDoM(item, idx);
        })}
      </Row>
    );
  });

  // 渲染表单
  const AneFormDom = (
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
    return <div style={{ margin: -10 }}>{AneFormDom}</div>;
  }
  // type 为CardPro  带标题
  if (type === 'CardPro') {
    return (
      <CardPro title={header}>
        <div className="and-FormBox">{AneFormDom}</div>
      </CardPro>
    );
  }
  // type 为cardform 时 显示表单，分割线 分离每个表单
  if (type === 'cardform') {
    return (
      <div>
        <h3 className="and-FormTitle">{header}</h3>
        {AneFormDom}
        <Divider type="horizontal" className="and-FormDivider" />
      </div>
    );
  }
  return (
    <Collapse
      defaultActiveKey={!visible ? ['1'] : ''}
      {...collapseAttributes}
      className="and-mb10"
    >
      <Panel header={header} key="1" {...panelAttributes} extra={extra}>
        {AneFormDom}
      </Panel>
    </Collapse>
  );
});

export default QuickForm;

QuickForm.propTypes = {
  formDatas: PropTypes.array.isRequired,
  collapseAttributes: PropTypes.object,
  panelAttributes: PropTypes.object,
  visible: PropTypes.bool,
  colspan: PropTypes.number,
  header: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  defaultFormItemLayout: PropTypes.object,
  defaultFormLayout: PropTypes.string,
  size: PropTypes.string,
};

QuickForm.defaultProps = {
  visible: false,
  colspan: 2,
  size: 'default',
};
