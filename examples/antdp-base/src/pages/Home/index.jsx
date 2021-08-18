import React, { Component } from 'react';
import { QuickForm } from '@antdp/antdp-ui';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  render() {
    return (
      <QuickForm
        ref={this.ref}
        formDatas={[
          {
            label: '备注',
            name: 'remark',
            type: 'input',
          },
          {
            label: '水果',
            name: 'fruit',
            type: 'select',
            options: [{ label: 'apple', value: 1 }],
          },
        ]}
      />
    );
  }
}
