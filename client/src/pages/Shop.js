import Loader from "../components/Loader";
import Header from "../components/Header";
import SearchArea from "../components/SearchArea";
import LogoCarouselSection from "../components/LogoCarouselSection";
import Footer from "../components/Footer";
import BreadCrumbSection from "../components/BreadCrumbSection";
import ProductSection from "../components/ProductSection";

function Shop() {
  return (
    <>
      <Loader />
      <Header />
      <SearchArea />
      <BreadCrumbSection heading="Shop" tagline="Fresh and Organic" />
      <ProductSection />
      <LogoCarouselSection />
      <Footer />
    </>
  );
}

export default Shop;
