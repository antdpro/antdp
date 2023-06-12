import { ProCard, StatisticCard } from '@ant-design/pro-components';
import { message } from '@antdp/basic-layouts';
import { Link, useRequest } from '@umijs/max';
import { Avatar, Card, Divider, List, Skeleton, Space, Statistic } from 'antd';
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

export default function Home() {
  const { data } = useRequest(serviceProject, { manual: false });
  const { data: activities, loading: activitiesLoading } = useRequest(serviceActivities, {
    manual: false,
    onSuccess: () => message.success('查询成功'),
  });
  const imgStyle = {
    display: 'block',
    width: 42,
    height: 42,
  };
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
    <Space direction="vertical" size="middle">
      <Card>
        <PageHeaderContent
          currentUser={{
            avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
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

      <Card>
        <StatisticCard.Group direction={'row'}>
          <StatisticCard
            statistic={{
              title: '支付金额',
              value: 2176,
              icon: (
                <img
                  style={imgStyle}
                  src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*dr_0RKvVzVwAAAAAAAAAAABkARQnAQ"
                  alt="icon"
                />
              ),
            }}
          />
          <StatisticCard
            statistic={{
              title: '访客数',
              value: 475,
              icon: (
                <img
                  style={imgStyle}
                  src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*-jVKQJgA1UgAAAAAAAAAAABkARQnAQ"
                  alt="icon"
                />
              ),
            }}
          />
          <StatisticCard
            statistic={{
              title: '成功订单数',
              value: 87,
              icon: (
                <img
                  style={imgStyle}
                  src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*FPlYQoTNlBEAAAAAAAAAAABkARQnAQ"
                  alt="icon"
                />
              ),
            }}
          />
          <StatisticCard
            statistic={{
              title: '浏览量',
              value: 1754,
              icon: (
                <img
                  style={imgStyle}
                  src="https://gw.alipayobjects.com/mdn/rms_7bc6d8/afts/img/A*pUkAQpefcx8AAAAAAAAAAABkARQnAQ"
                  alt="icon"
                />
              ),
            }}
          />
        </StatisticCard.Group>
      </Card>

      <Card>
        <StatisticCard.Group direction={'row'}>
          <StatisticCard
            statistic={{
              title: '冻结金额',
              value: 20190102,
              precision: 2,
              suffix: '元',
            }}
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/RLeBTRNWv/bianzu%25252043x.png"
                alt="直方图"
                width="100%"
              />
            }
          />
          <Divider type={'vertical'} />
          <StatisticCard
            statistic={{
              title: '设计资源数',
              value: 234,
            }}
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/RLeBTRNWv/bianzu%25252043x.png"
                alt="直方图"
                width="100%"
              />
            }
          />
          <Divider type={'vertical'} />
          <StatisticCard
            statistic={{
              title: '信息完成度',
              value: 5,
              suffix: '/ 100',
            }}
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/RLeBTRNWv/bianzu%25252043x.png"
                alt="直方图"
                width="100%"
              />
            }
          />
        </StatisticCard.Group>
      </Card>

      <ProCard
        title="数据概览"
        extra="2019年9月28日 星期五"
        split={'vertical'}
        headerBordered
        bordered
      >
        <ProCard split="horizontal">
          <ProCard split="horizontal">
            <ProCard split="vertical">
              <StatisticCard
                statistic={{
                  title: '昨日全部流量',
                  value: 234,
                  description: <Statistic title="较本月平均流量" value="8.04%" trend="down" />,
                }}
              />
              <StatisticCard
                statistic={{
                  title: '本月累计流量',
                  value: 234,
                  description: <Statistic title="月同比" value="8.04%" trend="up" />,
                }}
              />
            </ProCard>
            <ProCard split="vertical">
              <StatisticCard
                statistic={{
                  title: '运行中实验',
                  value: '12/56',
                  suffix: '个',
                }}
              />
              <StatisticCard
                statistic={{
                  title: '历史实验总数',
                  value: '134',
                  suffix: '个',
                }}
              />
            </ProCard>
          </ProCard>
          <StatisticCard
            title="流量走势"
            chart={
              <img
                src="https://gw.alipayobjects.com/zos/alicdn/_dZIob2NB/zhuzhuangtu.svg"
                width="100%"
              />
            }
          />
        </ProCard>
        <StatisticCard
          title="流量占用情况"
          chart={
            <img
              src="https://gw.alipayobjects.com/zos/alicdn/qoYmFMxWY/jieping2021-03-29%252520xiawu4.32.34.png"
              alt="大盘"
              width="100%"
            />
          }
        />
      </ProCard>

      <Card
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

      <Card bodyStyle={{ padding: 0 }} bordered={false} title="动态" loading={activitiesLoading}>
        <List
          loading={activitiesLoading}
          renderItem={(item) => renderActivities(item)}
          dataSource={activities || []}
          size="large"
        />
      </Card>
    </Space>
  );
}
