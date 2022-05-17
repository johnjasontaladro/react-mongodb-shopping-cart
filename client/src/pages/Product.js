import Loader from "../components/Loader";
import Header from "../components/Header";
import SearchArea from "../components/SearchArea";
import LogoCarouselSection from "../components/LogoCarouselSection";
import Footer from "../components/Footer";
import BreadCrumbSection from "../components/BreadCrumbSection";
import ProductDetailsSection from "../components/ProductDetailsSection";

function Product() {
  return (
    <>
      <Loader />
      <Header />
      <SearchArea />
      <BreadCrumbSection heading="Shop" tagline="Fresh and Organic" />
      <ProductDetailsSection />
      <LogoCarouselSection />
      <Footer />
    </>
  );
}

export default Product;
