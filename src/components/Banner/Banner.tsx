import { Flex, Typography } from "antd";
import type { ReactNode } from "react";
import styles from "./Banner.module.css";

const { Text } = Typography;

interface BannerProps {
  title?: string;
  subTitle?: string;
  bgColor?: string;
  className?: string;
  children?: ReactNode;
  size?: "small" | "medium" | "large";
}

export const Banner = ({
  title,
  subTitle,
  bgColor = "#FFFFFF",
  className,
  children,
  size = "medium",
}: BannerProps) => {
  const getFontSize = () => {
    switch (size) {
      case "small":
        return { xs: 10, sm: 11, md: 12, lg: 14 };
      case "large":
        return { xs: 18, sm: 20, md: 24, lg: 32 };
      default:
        return { xs: 14, sm: 16, md: 18, lg: 24 };
    }
  };

  return (
    <Flex
      justify="center"
      align="center"
      wrap="wrap"
      gap="middle"
      className={`${styles.banner} ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      {title && (
        <Text
          strong={size === "small"}
          style={{
            color: "var(--color-white)",
            fontSize: getFontSize().lg,
            textAlign: "center",
            lineHeight: 1.3,
          }}
        >
          {title}
        </Text>
      )}
      {subTitle && (
        <Text
          style={{
            color: "var(--color-white)",
            opacity: 0.9,
            textAlign: "center",
          }}
        >
          {subTitle}
        </Text>
      )}
      {children && <div className={styles.actions}>{children}</div>}
    </Flex>
  );
};
