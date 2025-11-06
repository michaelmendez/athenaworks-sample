import { Button, Flex, Typography, theme } from "antd";
import styles from "./HeroBanner.module.css";

const { Title, Text } = Typography;
const { useToken } = theme;

export const HeroBanner = () => {
  const { token } = useToken();

  return (
    <Flex
      align="center"
      justify="center"
      className={styles.container}
      vertical
    >
      <Title level={1} className={styles.title} style={{ color: token.colorPrimary }}>
        World-Class Software Engineering Teams,
        <br />
        Pre-vetted to Solve Your Biggest Challenges.
      </Title>

      <Text className={styles.subtitle}>
        Accelerate your projects with nearshore, offshore, and onshore tech
        talent —expertly matched to your needs.
      </Text>

      <Button type="primary" shape="round" size="large" className={styles.button}>
        Our Delivery Models
      </Button>
    </Flex>
  );
};
