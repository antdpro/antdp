import React from 'react';
import {
  Input,
  InputNumber,
  AutoComplete,
  Cascader,
  DatePicker,
  Rate,
  Slider,
  TreeSelect,
  Select,
  Checkbox,
  Mentions,
  Radio,
  Switch,
  TimePicker,
  Upload,
} from 'antd';
import { TextAreaProps } from 'antd/lib/input/TextArea';
import { CheckboxGroupProps } from 'antd/lib/checkbox/Group';
import { RangePickerProps } from 'antd/lib/date-picker/index';
import { InternalNamePath } from 'rc-field-form/lib/interface';
import {
  InputProps,
  AutoCompleteProps,
  CascaderProps,
  DatePickerProps,
  RateProps,
  SliderSingleProps,
  TreeSelectProps,
  InputNumberProps,
  SelectProps,
  CheckboxProps,
  MentionProps,
  RadioProps,
  SwitchProps,
  TimePickerProps,
  UploadProps,
} from 'antd';

export type ItemChildType =
  | 'Custom'
  | 'Input'
  | 'InputNumber'
  | 'TextArea'
  | 'Select'
  | 'AutoComplete'
  | 'Cascader'
  | 'Checkbox'
  | 'DatePicker'
  | 'Mentions'
  | 'Radio'
  | 'Rate'
  | 'Slider'
  | 'Switch'
  | 'TimePicker'
  | 'TreeSelect'
  | 'Upload'
  | 'RangePicker';

export type ItemChildAttr<T = any, K = any> =
  | InputProps
  | InputNumberProps
  | SelectProps<T>
  | AutoCompleteProps
  | CascaderProps
  | CheckboxProps
  | DatePickerProps
  | MentionProps
  | RadioProps
  | RateProps
  | SliderSingleProps
  | SwitchProps
  | TimePickerProps
  | TreeSelectProps<K>
  | UploadProps
  | TextAreaProps
  | RangePickerProps;

const { RangePicker } = DatePicker;

export function getFieldId(
  namePath: InternalNamePath,
  formName?: string,
): string | undefined {
  if (!namePath.length) {
    return undefined;
  }
  const mergedId = namePath.join('_');
  return formName ? `${formName}_${mergedId}` : mergedId;
}

export function toArray<T>(candidate?: T | T[] | false): T[] {
  if (candidate === undefined || candidate === false) {
    return [];
  }
  return Array.isArray(candidate) ? candidate : [candidate];
}

export const getItem = ({ attr, type, inputNode }: {
  attr?: Partial<ItemChildAttr<any, any>>;
  type?: ItemChildType;
  inputNode?: ((...arg: any[]) => React.ReactNode) | React.ReactNode;
}) => {
  let renderItem = undefined;
  if (type === 'Input') {
    const inputAttr = attr as InputProps;
    renderItem = <Input {...inputAttr} />;
  } else if (type === 'TextArea') {
    const inputAttr = attr as TextAreaProps;
    renderItem = <Input.TextArea {...inputAttr} />;
  } else if (type === 'InputNumber') {
    const inputAttr = attr as InputNumberProps;
    renderItem = <InputNumber {...inputAttr} />;
  } else if (type === 'AutoComplete') {
    const inputAttr = attr as AutoCompleteProps;
    renderItem = <AutoComplete {...inputAttr} />;
  } else if (type === 'Cascader') {
    const inputAttr = attr as CascaderProps;
    renderItem = <Cascader {...inputAttr} />;
  } else if (type === 'DatePicker') {
    const inputAttr = attr as DatePickerProps;
    renderItem = <DatePicker {...inputAttr} />;
  } else if (type === 'Rate') {
    const inputAttr = attr as RateProps;
    renderItem = <Rate {...inputAttr} />;
  } else if (type === 'Slider') {
    const inputAttr = attr as SliderSingleProps;
    renderItem = <Slider {...inputAttr} />;
  } else if (type === 'TreeSelect') {
    const inputAttr = attr as TreeSelectProps<any>;
    renderItem = <TreeSelect {...inputAttr} />;
  } else if (type === 'Select') {
    const inputAttr = attr as SelectProps<any>;
    renderItem = <Select {...inputAttr} />;
  } else if (type === 'Checkbox') {
    const inputAttr = attr as CheckboxGroupProps;
    renderItem = <Checkbox.Group {...inputAttr} />;
  } else if (type === 'Mentions') {
    const inputAttr = attr as MentionProps;
    renderItem = <Mentions {...inputAttr} />;
  } else if (type === 'Radio') {
    const inputAttr = attr as RadioProps;
    renderItem = <Radio.Group {...inputAttr} />;
  } else if (type === 'Switch') {
    const inputAttr = attr as SwitchProps;
    renderItem = <Switch {...inputAttr} />;
  } else if (type === 'TimePicker') {
    const inputAttr = attr as TimePickerProps;
    renderItem = <TimePicker {...inputAttr} />;
  } else if (type === 'Upload') {
    const inputAttr = attr as UploadProps;
    renderItem = <Upload {...inputAttr} />;
  } else if (type === 'RangePicker') {
    const inputAttr = attr as RangePickerProps;
    renderItem = <RangePicker {...inputAttr} />;
  } else if (type === 'Custom') {
    renderItem = inputNode;
  }
  return renderItem;
};
