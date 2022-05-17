import Loader from "../components/Loader";
import Header from "../components/Header";
import SearchArea from "../components/SearchArea";
import LogoCarouselSection from "../components/LogoCarouselSection";
import Footer from "../components/Footer";
import BreadCrumbSection from "../components/BreadCrumbSection";
import PageNotFoundSection from "../components/PageNotFoundSection";

function NotFound() {
  return (
    <>
      <Loader />
      <Header />
      <SearchArea />
      <BreadCrumbSection
        heading="404 - Not Found"
        tagline="Fresh and Organic"
      />
      <PageNotFoundSection />
      <LogoCarouselSection />
      <Footer />
    </>
  );
}

export default NotFound;
