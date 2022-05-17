import Loader from "../components/Loader";
import Header from "../components/Header";
import SearchArea from "../components/SearchArea";
import HeroArea from "../components/HeroArea";
import FeatureListSection from "../components/FeatureListSection";
import FeaturedProductSection from "../components/FeaturedProductSection";
import LogoCarouselSection from "../components/LogoCarouselSection";
import Footer from "../components/Footer";
import ShopNowSection from "../components/ShopNowSection";
import AboutSection from "../components/AboutSection";

function Home() {
  return (
    <>
      <Loader />
      <Header />
      <SearchArea />
      <HeroArea />
      <FeatureListSection />
      <FeaturedProductSection />
      <ShopNowSection />
      <AboutSection />
      <LogoCarouselSection />
      <Footer />
    </>
  );
}

export default Home;
