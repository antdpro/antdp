import React from 'react';
import { FormInstance } from 'rc-field-form/lib/interface';

import RcForm from 'rc-field-form';
import Store from './Store';
import { EditFormsProps } from './interface.d';

export const EditForms = React.createContext<EditFormsProps>({
  formsRef: new Store(),
  dataSource: [],
  rowKey: 'id',
  onValuesChange: (
    id: string | number,
    form: FormInstance,
    value: object,
    allValue: object,
  ) => { },
});

/** tr 表格行自定义包裹内容  */
const Tr = (props: any) => {
  const [form] = RcForm.useForm();
  const {
    formsRef,
    onValuesChange = () => { },
    dataSource,
    rowKey,
  } = React.useContext(EditForms);
  React.useEffect(() => {
    return () => formsRef.remove(`${props['data-row-key']}`);
  }, []);
  formsRef.register(`${props['data-row-key']}`, form);
  // 注册
  const initValue = dataSource.find(
    // 防止 字符串和数字进行对比
    (item) => `${item[rowKey]}` === `${props['data-row-key']}`,
  );
  return (
    <RcForm
      onValuesChange={onValuesChange.bind(this, `${props['data-row-key']}`, form)}
      form={form}
      name={`${props['data-row-key']}`}
      component={false}
      initialValues={initValue || {}}
    >
      <tr {...props} />
    </RcForm>
  );
};

export default Tr;
