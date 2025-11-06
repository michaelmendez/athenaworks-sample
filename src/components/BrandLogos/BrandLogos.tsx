import { Flex } from "antd";
import styles from "./BrandLogos.module.css";
import { SectionTitle } from "../common/SectionTitle";
import careerEquity from "../../assets/career-equity.webp";
import cyncly from "../../assets/cyncly.webp";
import dealPoint from "../../assets/deal-point.webp";
import gasops from "../../assets/gasops.webp";
import johnsonJohnson from "../../assets/johnson-johnson.webp";
import logapps from "../../assets/logapps.webp";
import maersk from "../../assets/maersk.webp";
import mindTrix from "../../assets/mind-trix.webp";
import netPride from "../../assets/net-pride.webp";

export const BrandLogos = () => {
  const logos = [
    { id: "career-equity", src: careerEquity, alt: "Career Equity" },
    { id: "cyncly", src: cyncly, alt: "Cyncly" },
    { id: "deal-point", src: dealPoint, alt: "Deal Point" },
    { id: "gasops", src: gasops, alt: "GasOps" },
    { id: "johnson-johnson", src: johnsonJohnson, alt: "Johnson & Johnson" },
    { id: "logapps", src: logapps, alt: "LogApps" },
    { id: "maersk", src: maersk, alt: "Maersk" },
    { id: "mind-trix", src: mindTrix, alt: "Mind Trix" },
    { id: "net-pride", src: netPride, alt: "Net Pride" },
  ];

  return (
    <Flex vertical justify="center" align="center" className={styles.container}>
      <SectionTitle level={5} variant="small" style={{ paddingBottom: "50px" }}>
        TRUSTED BY LEADING COMPANIES
      </SectionTitle>
      <div className={styles.scrollContainer}>
        <div className={styles.scrollContent}>
          {/* Render logos twice for seamless loop */}
          {[...logos, ...logos].map((logo, index) => (
            <div key={`${logo.id}-${index}`} className={styles.logoSlide}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </Flex>
  );
};
