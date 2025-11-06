import { Card, Typography } from "antd";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import {
  BarChartOutlined,
  ThunderboltOutlined,
  SafetyOutlined,
  ClockCircleOutlined,
  TeamOutlined,
  TrophyOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";
import styles from "./FeaturesGrid.module.css";
import certifications from "../../assets/certifications.png";
import { SectionTitle } from "../common/SectionTitle";

const { Title } = Typography;

export const FeaturesGrid = () => {
  return (
    <div className={styles.container}>
      <SectionTitle variant="small">OUR ADVANTAGE</SectionTitle>
      <Title level={3} className={styles.heading}>
        Why partner with Athenaworks?
      </Title>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 2, 1024: 3 }}>
        <Masonry gutter="24px">
          <Card className={styles.card}>
            <BarChartOutlined className={styles.icon} />
            <h3 className={styles.title}>
              Optimize Costs Without Compromising Quality
            </h3>
            <p className={styles.text}>
              Achieve cost efficiency with global talent pools. Reduce spend by{" "}
              <strong>up to 50%</strong> while ensuring enterprise-grade
              results.
            </p>
          </Card>

          <Card className={styles.card}>
            <ThunderboltOutlined className={styles.icon} />
            <h3 className={styles.title}>Accelerate Time-To-Market</h3>
            <p className={styles.text}>
              24x5 engineering teams keep delivery on track and speed up your
              GTM strategy.
            </p>
          </Card>

          <Card className={`${styles.card} ${styles.certificationCard}`}>
            <SafetyOutlined className={styles.icon} />
            <h3 className={styles.title}>
              Certified for Excellence & Security
            </h3>
            <p className={styles.text}>
              Work with a certified software development partner. Helping
              clients since 2013.
            </p>
            <div className={styles.certifications}>
              <img
                src={certifications}
                alt="ISO 27000, AWS Partner, Microsoft Silver Partner, and Google Cloud Partner certifications"
              />
            </div>
            <button className={styles.seeMore} type="button">
              See more <RightCircleOutlined />
            </button>
          </Card>

          <Card className={`${styles.card} ${styles.darkCard}`}>
            <TeamOutlined className={styles.icon} />
            <h3 className={styles.title}>AI-Driven Efficiency</h3>
            <p className={styles.text}>Reduce delivery time and cost by</p>
            <div className={styles.percentage}>20-30%</div>
            <p className={styles.text}>
              With our AI-trained coding resources to streamline development.
            </p>
          </Card>

          <Card className={`${styles.card} ${styles.purpleCard}`}>
            <ClockCircleOutlined className={styles.icon} />
            <h3 className={styles.title}>Fast Hiring</h3>
            <p className={styles.text}>
              Build teams in just <strong>2-4 weeks.</strong>
            </p>
            <h3 className={`${styles.title} ${styles.titleSpaced}`}>
              Low Turnover
            </h3>
            <p className={styles.text}>
              <strong>&lt;5%</strong> attrition thanks to strong retention
              strategies.
            </p>
          </Card>
        </Masonry>
      </ResponsiveMasonry>

      <Card
        className={`${styles.card} ${styles.accentCard} ${styles.wideCard}`}
      >
        <div className={styles.accentContent}>
          <TrophyOutlined className={styles.accentIcon} />
          <div>
            <h2 className={styles.accentTitle}>Top 1% of Engineers</h2>
            <p className={styles.accentText}>
              Our pre-screened global network of 150,000+ experts—spanning
              LATAM, India, Eastern Europe, Africa and the US—ensures you get
              the best talent available.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};
