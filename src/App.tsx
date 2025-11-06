import { Flex } from "antd";
import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner";
import { Footer } from "./components/Footer/Footer";
import { HeroBanner } from "./components/HeroBanner/HeroBanner";
import { BrandLogos } from "./components/BrandLogos/BrandLogos";
import { FeaturesGrid } from "./components/FeaturesGrid/FeaturesGrid";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Banner
        title="10+ Years In Business | 4 Continents | 16+ Countries | 32+ Locations"
        className={styles.topBanner}
        size="small"
      />
      <Header />
      <Flex
        className={styles.heroBannerContainer}
        justify="center"
        align="center"
      >
        <HeroBanner />
      </Flex>
      <BrandLogos />
      <FeaturesGrid />
      <Footer />
    </>
  );
}

export default App;
