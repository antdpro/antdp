const titles = [
  'Alipay',
  'Angular',
  'Ant Design',
  'Ant Design',
  'Bootstrap',
  'React',
  'Vue',
  'Webpack',
];

const avatars = [
  'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png', // Alipay
  'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png', // Angular
  'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png', // Ant Design
  'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png', // Ant Design Pro
  'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png', // Bootstrap
  'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png', // React
  'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png', // Vue
  'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png', // Webpack
];

const avatars2 = [
  'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
  'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png',
  'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png',
  'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png',
  'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png',
  'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png',
  'https://gw.alipayobjects.com/zos/rmsportal/psOgztMplJMGpVEqfcgF.png',
  'https://gw.alipayobjects.com/zos/rmsportal/ZpBqSxLxVEXfcUNoPKrz.png',
  'https://gw.alipayobjects.com/zos/rmsportal/laiEnJdGHVOhJrUShBaJ.png',
  'https://gw.alipayobjects.com/zos/rmsportal/UrQsqscbKEpNuJcvBZBu.png',
];

export default {
  'POST /api/demo/selectPage': (req, res) => {
    const { pageSize } = req.body;
    const list = [];
    for (let i = 0; i < pageSize; i++) {
      list[i] = {
        id: i,
        name: '霞仔',
        title: '16',
        address: '上海市',
      };
    }
    setTimeout(() => {
      res.send({
        code: 1,
        message: '查询成功',
        data: {
          rows: list,
          total: 100,
        },
      });
    }, 2000);
  },
  'GET /api/project/notice': (_, res) => {
    res.send({
      code: 1,
      message: '查询成功',
      data: [
        {
          id: 'xxx1',
          title: titles[0],
          logo: avatars[0],
          description: '那是一种内在的东西，他们到达不了，也无法触及的',
          updatedAt: '2017-07-24',
          member: '科学搬砖组',
          href: '',
          memberLink: '',
        },
        {
          id: 'xxx2',
          title: titles[1],
          logo: avatars[1],
          description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
          updatedAt: '2017-07-24',
          member: '全组都是吴彦祖',
          href: '',
          memberLink: '',
        },
        {
          id: 'xxx3',
          title: titles[2],
          logo: avatars[2],
          description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
          updatedAt: '2017-07-24',
          member: '中二少女团',
          href: '',
          memberLink: '',
        },
        {
          id: 'xxx4',
          title: titles[3],
          logo: avatars[3],
          description: '那时候我只会想自己想要什么，从不想自己拥有什么',
          updatedAt: '2017-07-24',
          member: '程序员日常',
          href: '',
          memberLink: '',
        },
        {
          id: 'xxx5',
          title: titles[4],
          logo: avatars[4],
          description: '凛冬将至',
          updatedAt: '2017-07-24',
          member: '高逼格设计天团',
          href: '',
          memberLink: '',
        },
        {
          id: 'xxx6',
          title: titles[5],
          logo: avatars[5],
          description: '生命就像一盒巧克力，结果往往出人意料',
          updatedAt: '2017-07-24',
          member: '骗你来学计算机',
          href: '',
          memberLink: '',
        },
      ],
    });
  },
  'GET /api/activities': (_, res) => {
    res.send({
      code: 1,
      message: '查询成功',
      data: [
        {
          id: 'trend-1',
          updatedAt: '2017-07-24',
          user: {
            name: '曲丽丽',
            avatar: avatars2[0],
          },
          group: {
            name: '高逼格设计天团',
            link: 'https://github.com/antdpro/antdp',
          },
          project: {
            name: '六月迭代',
            link: 'https://github.com/antdpro/antdp',
          },
          template: '在 @{group} 新建项目 @{project}',
        },
        {
          id: 'trend-2',
          updatedAt: '2017-07-24',
          user: {
            name: '付小小',
            avatar: avatars2[1],
          },
          group: {
            name: '高逼格设计天团',
            link: 'https://github.com/antdpro/antdp',
          },
          project: {
            name: '六月迭代',
            link: 'https://github.com/antdpro/antdp',
          },
          template: '在 @{group} 新建项目 @{project}',
        },
        {
          id: 'trend-3',
          updatedAt: '2017-07-24',
          user: {
            name: '林东东',
            avatar: avatars2[2],
          },
          group: {
            name: '中二少女团',
            link: 'https://github.com/antdpro/antdp',
          },
          project: {
            name: '六月迭代',
            link: 'https://github.com/antdpro/antdp',
          },
          template: '在 @{group} 新建项目 @{project}',
        },
        {
          id: 'trend-4',
          updatedAt: '2017-07-24',
          user: {
            name: '周星星',
            avatar: avatars2[4],
          },
          project: {
            name: '5 月日常迭代',
            link: 'https://github.com/antdpro/antdp',
          },
          template: '将 @{project} 更新至已发布状态',
        },
        {
          id: 'trend-5',
          updatedAt: '2017-07-24',
          user: {
            name: '朱偏右',
            avatar: avatars2[3],
          },
          project: {
            name: '工程效能',
            link: 'https://github.com/antdpro/antdp',
          },
          comment: {
            name: '留言',
            link: 'https://github.com/antdpro/antdp',
          },
          template: '在 @{project} 发布了 @{comment}',
        },
        {
          id: 'trend-6',
          updatedAt: '2017-07-24',
          user: {
            name: '乐哥',
            avatar: avatars2[5],
          },
          group: {
            name: '程序员日常',
            link: 'https://github.com/antdpro/antdp',
          },
          project: {
            name: '品牌迭代',
            link: 'https://github.com/antdpro/antdp',
          },
          template: '在 @{group} 新建项目 @{project}',
        },
      ],
    });
  },
  'POST /api/getList': (_, res) => {
    res.send({
      code: 1,
      message: '查询成功',
      data: [
        {
          id: 'trend-1',
          avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
          title: 'Card title',
          descriptio: 'antdp 好用',
          image:
            'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
        },
        {
          id: 'trend-2',
          avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
          title: 'Card title',
          descriptio: 'antdp 好用',
          image:
            'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
        },
        {
          id: 'trend-3',
          avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
          title: 'Card title',
          descriptio: 'antdp 好用',
          image:
            'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
        },
        {
          id: 'trend-4',
          avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
          title: 'Card title',
          descriptio: 'antdp 好用',
          image:
            'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
        },
        {
          id: 'trend-5',
          avatar: 'https://xsgames.co/randomusers/avatar.php?g=pixel',
          title: 'Card title',
          descriptio: 'antdp 好用',
          image:
            'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
        },
      ],
    });
  },
};
