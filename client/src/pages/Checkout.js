import BreadCrumbSection from "../components/BreadCrumbSection";
import CheckoutSection from "../components/CheckoutSection/CheckoutSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Loader from "../components/Loader";
import LogoCarouselSection from "../components/LogoCarouselSection";
import SearchArea from "../components/SearchArea";

function Checkout() {
  return (
    <>
      <Loader />
      <Header />
      <SearchArea />
      <BreadCrumbSection
        heading="Check Out Product"
        tagline="Fresh and Organic"
      />
      <CheckoutSection />
      <LogoCarouselSection />
      <Footer />
    </>
  );
}

export default Checkout;
