import { UserOutlined } from '@ant-design/icons';
import { useReactQuery } from '@antdp/hooks';
import { Avatar, Card, Divider, Skeleton } from 'antd';
import { serviceProject } from '../../../services/api';
import styles from './style.less';

const PageHeaderContent = ({ currentUser }) => {
  const loading = currentUser && Object.keys(currentUser).length;
  const labels = ['很有想法', '专注设计', '海纳百川', '活泼开朗', '川妹子'];
  const teams = [
    {
      title: '科学搬砖组',
      icon: 'user',
    },
    {
      title: '中二少女团',
      icon: 'user',
    },
    {
      title: '程序员日常',
      icon: 'user',
    },
    {
      title: '高逼格设计',
      icon: 'user',
    },
    {
      title: '科学搬砖组',
      icon: 'user',
    },
  ];
  if (!loading) {
    return <Skeleton avatar paragraph={{ rows: 1 }} active />;
  }
  return (
    <div className={styles.pageHeaderContent}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          <Avatar size="large" src={currentUser.avatar} />
        </div>
        <div className={styles.content}>
          <div className={styles.contentTitle}>{currentUser.name}</div>
          <div>海纳百川，有容乃大</div>
        </div>
      </div>
      <div className={styles.describe}>
        <div>
          <UserOutlined style={{ marginRight: 10 }} />
          交互专家
        </div>
        <div>
          <UserOutlined style={{ marginRight: 10 }} />
          尼好集成有限责任公司
        </div>
        <div>
          <UserOutlined style={{ marginRight: 10 }} />
          浙江省杭州市
        </div>
      </div>
      <Divider dashed />
      <div className={styles.describe}>
        <div className={styles.title}>标签</div>
        <div className={styles.labels}>
          {labels.map((a, i) => {
            return (
              <div key={i} className={styles.labelsItem}>
                {a}
              </div>
            );
          })}
        </div>
      </div>
      <Divider dashed />
      <div className={styles.describe}>
        <div className={styles.title}>团队</div>
        <div className={styles.labels}>
          {teams.map((a, i) => {
            return (
              <div className={styles.teamsItem} key={i}>
                <Avatar
                  size={20}
                  style={{ marginRight: 8 }}
                  src="https://xsgames.co/randomusers/avatar.php?g=pixel"
                />
                {a.title}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default function User() {
  useReactQuery({
    queryKey: ['project'],
    url: serviceProject,
  });
  return (
    <Card bordered={false}>
      <PageHeaderContent
        currentUser={{
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
          name: 'xxx',
          userid: '00000001',
          email: 'antdp@.com',
          signature: '海纳百川，有容乃大',
        }}
      />
    </Card>
  );
}
