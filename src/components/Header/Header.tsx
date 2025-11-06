import { useState } from "react";
import { Flex, Menu, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { HEADER_MENU_ITEMS } from "../../constants/navigation";
import styles from "./Header.module.css";

export const Header: React.FC = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleMenuClick: MenuProps["onClick"] = () => {
    setDrawerVisible(false);
  };

  return (
    <Flex justify="space-around" align="center" className={styles.container}>
      <img
        src="https://athenaworks.com/wp-content/uploads/2023/06/l-athenawork.png.webp"
        alt="Athenaworks logo"
        className={styles.logo}
      />

      <Flex>
        <Menu
          className={styles.desktopMenu}
          mode="horizontal"
          disabledOverflow={true}
          items={HEADER_MENU_ITEMS}
        />

        <Button
          color="primary"
          type="primary"
          shape="round"
          size="middle"
          className={`${styles.button}`}
        >
          Contact Us
        </Button>
      </Flex>

      {/* Mobile Hamburger Button */}
      <Button
        type="text"
        icon={<MenuOutlined />}
        onClick={() => setDrawerVisible(true)}
        className={styles.hamburgerButton}
        aria-label="Open menu"
      />

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        className={styles.mobileDrawer}
      >
        <Menu
          mode="vertical"
          items={HEADER_MENU_ITEMS}
          onClick={handleMenuClick}
          className={styles.mobileMenu}
        />
      </Drawer>
    </Flex>
  );
};
