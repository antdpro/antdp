const menus = [
  '/',
  '/EditTable',
  '/welcome',
  '/dashboard',
  '/dashboard/demo',
  '/dashboard/workplace',
  '/dashboard/workplace/dashboard/demo',
  '/dashboard/workplace/dashboard/notfund',
  '/dashboard/workplace/dashboard/workplace',
  '/dashboard/notfund',
  '/EditTable/demo',
  '/EditTable/workplace',
  '/EditTable/notfund',
  '/EditTables',
  '/EditTabless',
  '/EditTable1',
  '/EditTables2',
  '/EditTabless3',
  '/EditTable4',
  '/EditTables5',
  '/EditTabless6',
  '/EditTable7',
  '/EditTables8',
  '/EditTabless9',
  '/404',
  '/403',
];
const btns = ['/demo/add1', '/demo/add2', '/demo/add3'];

export default {
  'POST /api/users/login': (req, res) => {
    const { username, password, phone, code, type } = req.body;
    if ((username === 'admin' && password === 'admin') || (code && phone)) {
      res.send({
        code: 1,
        message: '登录成功！',
        data: {
          type,
          menus,
          btns,
        },
        token: '3096208b45df735aeebf072e90a4',
      });
      return;
    }
    res.send({
      code: -1,
      message: '登录失败！',
      data: {
        type,
      },
      token: null,
    });
  },
};
