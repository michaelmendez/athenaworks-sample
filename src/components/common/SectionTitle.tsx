import { Typography } from "antd";
import type { ReactNode } from "react";

const { Title } = Typography;

interface SectionTitleProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5;
  variant?: "small" | "medium" | "large";
  className?: string;
  style?: React.CSSProperties;
}

export const SectionTitle = ({
  children,
  level = 3,
  variant = "medium",
  className,
  style,
}: SectionTitleProps) => {
  const variantStyles: Record<string, React.CSSProperties> = {
    small: {
      fontSize: "13px",
      letterSpacing: "var(--letter-spacing-xl)",
      textAlign: "center",
      fontWeight: 600,
    },
    medium: {
      fontSize: "1.5rem",
      fontWeight: 600,
      textAlign: "center",
    },
    large: {
      fontSize: "2rem",
      fontWeight: 700,
      textAlign: "center",
    },
  };

  return (
    <Title
      level={level}
      className={className}
      style={{
        ...variantStyles[variant],
        ...style,
      }}
    >
      {children}
    </Title>
  );
};
