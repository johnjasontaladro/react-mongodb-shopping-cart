import Loader from "../components/Loader";
import Header from "../components/Header";
import SearchArea from "../components/SearchArea";
import LogoCarouselSection from "../components/LogoCarouselSection";
import Footer from "../components/Footer";
import BreadCrumbSection from "../components/BreadCrumbSection";
import SuccessOrderSection from "../components/SuccessOrderSection";
import { useContext } from "react";
import { AppContext } from "../App";

function Success() {
  const { tnx } = useContext(AppContext);

  return (
    <>
      <Loader />
      <Header />
      <SearchArea />
      <BreadCrumbSection
        heading="Order placed successfully"
        tagline="Fresh and Organic"
      />
      <SuccessOrderSection tnx={tnx} />
      <LogoCarouselSection />
      <Footer />
    </>
  );
}

export default Success;
