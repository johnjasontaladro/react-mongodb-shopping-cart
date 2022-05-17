import Loader from "../components/Loader";
import Header from "../components/Header";
import SearchArea from "../components/SearchArea";
import LogoCarouselSection from "../components/LogoCarouselSection";
import Footer from "../components/Footer";
import BreadCrumbSection from "../components/BreadCrumbSection";
import CartSection from "../components/CartSection/CartSection";

function Cart() {
  return (
    <>
      <Loader />
      <Header />
      <SearchArea />
      <BreadCrumbSection heading="Cart" tagline="Fresh and Organic" />
      <CartSection />
      <LogoCarouselSection />
      <Footer />
    </>
  );
}

export default Cart;
