import styles from "./Footer.module.css";
import { Typography, Flex } from "antd";

const { Title, Link } = Typography;

interface MenuBlobProps {
  title: string;
  items: { label: string; href?: string; id: string }[];
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5;
}

export const MenuBlob = ({
  title,
  items,
  className,
  level = 5,
}: MenuBlobProps) => {
  return (
    <Flex vertical gap="small" className={className}>
      <Title level={level} className={styles.whiteText}>
        {title}
      </Title>
      {items.map((item) => (
        <Link key={item.id} className={styles.whiteText} href={item.href}>
          {item.label}
        </Link>
      ))}
    </Flex>
  );
};
