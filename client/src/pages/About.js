import Loader from "../components/Loader";
import Header from "../components/Header";
import SearchArea from "../components/SearchArea";
import LogoCarouselSection from "../components/LogoCarouselSection";
import Footer from "../components/Footer";
import BreadCrumbSection from "../components/BreadCrumbSection";
import AboutUsSection from "../components/AboutUsSection";

function About() {
  return (
    <>
      <Loader />
      <Header />
      <SearchArea />
      <BreadCrumbSection heading="About Us" tagline="We sale fresh fruits" />
      <AboutUsSection />
      <LogoCarouselSection />
      <Footer />
    </>
  );
}

export default About;
