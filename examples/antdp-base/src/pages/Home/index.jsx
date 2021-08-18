import React, { Component } from 'react';
import { QuickForm } from '@antdp/antdp-ui';
export default class Home extends Component {
  render() {
    return (
      <div>
        这里是首页，欢迎您！
        <QuickForm
          header="标题"
          formDatas={[
            {
              type: 'input',
              label: '测试',
              name: 'ane',
            },
          ]}
        />
      </div>
    );
  }
}
