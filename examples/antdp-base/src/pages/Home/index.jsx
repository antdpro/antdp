import { Link, useRequest } from '@umijs/max';
import { Avatar, Card, Col, List, Row, Statistic } from 'antd';
import { serviceActivities, serviceProject } from '../../services/api';
import styles from './style.less';

const PageHeaderContent = ({ currentUser }) => {
  const loading = currentUser && Object.keys(currentUser).length;
  if (!loading) {
    return <Skeleton avatar paragraph={{ rows: 1 }} active />;
  }
  return (
    <div className={styles.pageHeaderContent}>
      <div className={styles.avatar}>
        <Avatar size="large" src={currentUser.avatar} />
      </div>
      <div className={styles.content}>
        <div className={styles.contentTitle}>
          早安，
          {currentUser.name}
          ，祝你开心每一天！
        </div>
        <div>
          {currentUser.title} |{currentUser.group}
        </div>
      </div>
    </div>
  );
};

const ExtraContent = () => (
  <div className={styles.extraContent}>
    <div className={styles.statItem}>
      <Statistic title="项目数" value={56} />
    </div>
    <div className={styles.statItem}>
      <Statistic title="团队内排名" value={8} suffix="/ 24" />
    </div>
    <div className={styles.statItem}>
      <Statistic title="项目访问" value={2223} />
    </div>
  </div>
);

export default function Home(props) {
  const { data } = useRequest(serviceProject, { manual: false });
  const { data: activities, loading: activitiesLoading } = useRequest(
    serviceActivities,
    { manual: false },
  );

  const renderActivities = (item) => {
    const events = item.template.split(/@\{([^{}]*)\}/gi).map((key) => {
      if (item[key]) {
        return (
          <a href={item[key].link} key={item[key].name}>
            {item[key].name}
          </a>
        );
      }
      return key;
    });
    return (
      <List.Item key={item.id}>
        <List.Item.Meta
          avatar={<Avatar src={item.user.avatar} />}
          title={
            <span>
              <a className={styles.username}>{item.user.name}</a>
              &nbsp;
              <span className={styles.event}>{events}</span>
            </span>
          }
          description={
            <span className={styles.datetime} title={item.updatedAt}>
              {item.updatedAt}
            </span>
          }
        />
      </List.Item>
    );
  };

  return (
    <div>
      <Card>
        <PageHeaderContent
          currentUser={{
            avatar:
              'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
            name: 'xxx',
            userid: '00000001',
            email: 'antdp@.com',
            signature: '海纳百川，有容乃大',
            title: '交互专家',
            group: '尼好集成有限责任公司',
          }}
        />
        <ExtraContent />
      </Card>
      <Row gutter={24}>
        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
          <Card
            style={{ marginBottom: 24, marginTop: 24 }}
            title="进行中的项目"
            bordered={false}
            extra="全部项目"
            loading={false}
            bodyStyle={{ padding: 0 }}
          >
            {(data || []).map((item) => (
              <Card.Grid className={styles.projectGrid} key={item.id}>
                <Card.Meta
                  avatar={<Avatar size="small" src={item.logo} />}
                  title={
                    <div className={styles.cardTitle}>
                      <Link to={item.href}>{item.title}</Link>
                    </div>
                  }
                  description={item.description}
                />
              </Card.Grid>
            ))}
          </Card>
        </Col>
        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
          <Card
            bodyStyle={{ padding: 0 }}
            bordered={false}
            title="动态"
            loading={activitiesLoading}
          >
            <List
              loading={activitiesLoading}
              renderItem={(item) => renderActivities(item)}
              dataSource={activities || []}
              size="large"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
