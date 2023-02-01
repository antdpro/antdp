import React from 'react';
import { GetStoreProps } from './interface';
import warning from 'rc-util/lib/warning';

const warningFunc: any = () => {
  warning(
    false,
    'Can not find FormContext. Please make sure you wrap Field under Form.',
  );
};

export const HideContext = React.createContext<GetStoreProps>({
  getComponents: warningFunc,
  getStoreState: warningFunc,
  setInitialValues: warningFunc,
  updateValue: warningFunc,
  getItemStore: () => ({
    init: warningFunc,
    register: warningFunc,
    getStoreState: warningFunc,
    updateValue: warningFunc,
    getValue: warningFunc,
  }),
});

export const useHideContext = () => React.useContext(HideContext);
