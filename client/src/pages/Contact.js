import Loader from "../components/Loader";
import Header from "../components/Header";
import SearchArea from "../components/SearchArea";
import LogoCarouselSection from "../components/LogoCarouselSection";
import Footer from "../components/Footer";
import BreadCrumbSection from "../components/BreadCrumbSection";
import ContactUsSection from "../components/ContactUsSection";

function Contact() {
  return (
    <>
      <Loader />
      <Header />
      <SearchArea />
      <BreadCrumbSection heading="Contact Us" tagline="Get 24/7 Support" />
      <ContactUsSection />
      <LogoCarouselSection />
      <Footer />
    </>
  );
}

export default Contact;
