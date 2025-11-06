import { Flex, Button, Typography, Space } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./CopyrightBar.module.css";

const { Text, Link } = Typography;

export const CopyrightBar = () => {
  return (
    <Flex justify="center" align="center" className={styles.container}>
      <div className={styles.content}>
        <Text className={styles.copyright}>©2025 ATHENAWORKS CANWILL</Text>

        <Space size="middle" className={styles.socialIcons}>
          <Button
            type="text"
            icon={<FontAwesomeIcon icon={faLinkedinIn} />}
            href="#"
            className={styles.socialIcon}
          />
          <Button
            type="text"
            icon={<FontAwesomeIcon icon={faXTwitter} />}
            href="#"
            className={styles.socialIcon}
          />
          <Button
            type="text"
            icon={<FontAwesomeIcon icon={faInstagram} />}
            href="#"
            className={styles.socialIcon}
          />
        </Space>

        <div className={styles.links}>
          <Link href="#" className={styles.link}>
            PRIVACY POLICY
          </Link>
          <Text className={styles.link}> | </Text>
          <Link href="#" className={styles.link}>
            TERMS AND CONDITIONS
          </Link>
        </div>
      </div>
    </Flex>
  );
};
