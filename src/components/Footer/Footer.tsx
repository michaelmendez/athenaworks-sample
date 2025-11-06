import { Flex, Divider, Button, Row, Col } from "antd";
import styles from "./Footer.module.css";
import { MenuBlob } from "./MenuBlob";
import { Banner } from "../Banner/Banner";
import { CopyrightBar } from "./CopyrightBar";
import {
  FOOTER_DELIVERY_MODELS,
  FOOTER_EXPERTISE,
  FOOTER_ABOUT_US,
  FOOTER_RESOURCES,
  FOOTER_CONTACT,
} from "../../constants/navigation";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <Flex className={styles.logoSection}>
        <img
          src="https://athenaworks.com/wp-content/uploads/2025/08/AW-p.svg"
          alt="Athena logo"
        />
      </Flex>

      <Row className={styles.menuSection}>
        <Col xs={24} sm={12} md={8} lg={6}>
          <MenuBlob title="Delivery Models" items={FOOTER_DELIVERY_MODELS} />
          <MenuBlob title="Asset©" items={[]} className={styles.menuBlob} />
        </Col>

        <Col xs={24} sm={12} md={8} lg={6}>
          <MenuBlob title="Our Expertise" items={FOOTER_EXPERTISE} />
        </Col>

        <Col xs={24} sm={12} md={8} lg={4}>
          <MenuBlob title="About Us" items={FOOTER_ABOUT_US} />
        </Col>

        <Col xs={24} sm={12} md={12} lg={4}>
          <MenuBlob title="Resources" items={FOOTER_RESOURCES} />
        </Col>

        <Col xs={24} sm={24} md={12} lg={4}>
          <MenuBlob title="Contact" items={FOOTER_CONTACT} />
        </Col>
      </Row>

      <Flex vertical gap="middle" className={styles.bannerSection}>
        <Divider style={{ borderColor: "white", margin: 10 }} />
        <Banner
          title="Join our global team of top tier talent"
          subTitle="Find your next career opportunity at Athenaworks."
          className={styles.footerBanner}
        >
          <Button
            color="primary"
            type="primary"
            shape="round"
            size="large"
            style={{ width: "15rem" }}
          >
            Join Us Now
          </Button>
        </Banner>
        <Divider style={{ borderColor: "#white", margin: 10 }} />
      </Flex>
      <CopyrightBar />
    </footer>
  );
};
