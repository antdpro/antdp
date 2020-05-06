import React from 'react';
import Icon from '@ant-design/icons';

/**
 * 递归获取树列表
 * @param {Array} data 
 */
export function getTreeList(data, treeList = []) {
  data.forEach((node) => {
    if (node.routes) {
      treeList = getTreeList(node.routes, treeList);
    } else if (node.path) {
      node.key = node.path;
      treeList.push(node);
    }
  });
  return treeList;
}

export function isUrl(path) {
  /* eslint no-useless-escape:0 */
  return /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/.test(path);
}

// Allow menu.js config icon as string or ReactNode
//   icon: 'setting',
//   icon: 'icon-geren' #For Iconfont ,
//   icon: 'http://demo.com/icon.png',
//   icon: <Icon type="setting" />,
export function getIcon(icon) {
  if (typeof icon === 'string') {
    if (isUrl(icon)) {
      return <Icon component={() => <img src={icon} alt="icon" />} />;
    }
    const Icons = getIconComponent(icon);
    if (Icons) {
      return <Icons />
    }
    return icon
  }
  return icon;
};

export function getIconComponent(name) {
  let comp = null;
  try {
    comp = require(`@ant-design/icons/${toCamel(name)}Filled`);
  } catch (_) {
    try {
      comp = require(`@ant-design/icons/${toCamel(name)}Outlined`);
    } catch (error) {
      
    }
  }
  return comp.default || null;
}


export const toCamel = str => {
  let s = str && str
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
      .join('');
  return s.slice(0, 1).toUpperCase() + s.slice(1);
};