import React, { Component } from 'react';
import { useModel } from 'umi';

export default () => {
  const { user, fetchUser } = useModel('useAuthModel', (model) => ({
    user: model.user,
    fetchUser: model.fetchUser,
  }));
  console.log(user);
  return <div>欢迎来到antdp</div>;
};
// export default class Home extends Component {
//   constructor(props) {
//     super(props);
//     this.ref = React.createRef();
//   }
//   render() {
//     return <div>欢迎来到antdp</div>;
//   }
// }
