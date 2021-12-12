import { FormInstance } from 'rc-field-form/lib/interface';
import React from "react"
class Store {
  private store: { [s: string]: FormInstance } = {};
  /** 移除 */
  remove = (name: string) => {
    delete this.store[`${name}`];
  };
  /** 注册 */
  register = (name: string, form: FormInstance<any>) => {
    this.store[`${name}`] = form;
  };
  /** 获取所有的 from 保存值 */
  getStore = (): { [s: string]: FormInstance<any> } => this.store;

  /** 通过 key 获取 form 表单 */
  getToKeyForm = (key: string | number) => {
    return this.store[`${key}`]
  }

}

export const useStore = (store?: Store) => {
  const refs = React.useRef<Store>()
  if (store) {
    refs.current = store
  } else {
    refs.current = new Store()
  }
  return [refs.current]
}

export default Store;
