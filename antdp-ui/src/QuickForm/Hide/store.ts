import React from 'react';
import {
  setValue,
  setValues,
  getValue,
} from 'rc-field-form/lib/utils/valueUtil';
import {
  FieldEntity,
  NamePath,
  InternalNamePath,
  GetStoreProps,
} from './interface';

class Store {
  // 保存状态
  store = {};

  //保存组件
  componentLists: FieldEntity[] = [];
  // 初始化
  private init = (entery: FieldEntity) => {
    const { initialValue } = entery.props || {};
    // 初始值
    if (initialValue !== undefined) {
      // 获取保存路径
      const pathName = entery.getNamePath();
      if (pathName) {
        this.store = setValue(this.store, pathName, initialValue);
      }
    }
  };

  // 挂载之后 组件保存
  private register = (entery: FieldEntity) => {
    this.componentLists.push(entery);
    const { initialValue } = entery.props || {};
    if (initialValue !== undefined) {
      entery.refresh();
    }
    return () => {
      // 组件卸载进行组件删除
      this.componentLists = this.componentLists.filter(
        (item) => item !== entery,
      );
      // 保存的值进行删除
      const pathName = entery.getNamePath();
      if (pathName) {
        this.store = setValue(this.store, pathName, undefined);
      }
    };
  };

  // 获取值
  private getStoreState = (pathName?: InternalNamePath) => {
    if (pathName) {
      // 如果有路径，则根据路径获取值
      return getValue(this.store, pathName);
    }
    return this.store;
  };

  private getComponents = () => {
    return this.componentLists;
  };

  getStore = () => {
    return {
      getComponents: this.getComponents,
      getStoreState: this.getStoreState,
      getItemStore: this.getItemStore,
      setInitialValues: this.setInitialValues,
      updateValue: this.updateValue,
    };
  };
  // 子项内的方法
  private getItemStore = () => {
    return {
      init: this.init,
      register: this.register,
      getStoreState: this.getStoreState,
      updateValue: this.updateValue,
      getValue: this.getValue,
    };
  };

  private setInitialValues = (initialValues: {}, init: boolean) => {
    if (init) {
      this.store = setValues({}, initialValues, this.store);
    }
  };

  // 更新值
  private updateValue = (pathName: NamePath, value: boolean) => {
    const path: InternalNamePath = Array.isArray(pathName)
      ? pathName
      : [pathName];
    this.store = setValue(this.store, path, value);
    // 通知对应的组件进行强制更新
    this.notifyObservers(path);
  };
  // 获取值
  private getValue = (pathName: NamePath) => {
    const path: InternalNamePath = Array.isArray(pathName)
      ? pathName
      : [pathName];
    return getValue(this.store, path);
  };
  // 通知更新组件
  private notifyObservers = (pathName: InternalNamePath) => {
    this.componentLists.forEach(({ refresh, getNamePath }) => {
      const currentPath = getNamePath();
      // 判断路径相同的进行值更新
      if (currentPath.join('') === pathName.join('')) {
        refresh();
      }
    });
  };
}

/** 状态管理 */
const useStore = (form?: GetStoreProps) => {
  const formRef = React.useRef<GetStoreProps>();
  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      const formStore: Store = new Store();
      formRef.current = formStore.getStore();
    }
  }
  return [formRef.current];
};

export default useStore;
