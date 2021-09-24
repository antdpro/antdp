//处理表单ref异步
export const asyncAwaitForm = async (form) => {
  return (
    (form &&
      form.validateFields &&
      form
        .validateFields()
        .then(async (vals) => {
          return vals;
        })
        .catch((errorInfo) => {
          return errorInfo;
        })) ||
    {}
  );
};
