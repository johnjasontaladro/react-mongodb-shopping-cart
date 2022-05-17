import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import logo1 from "../assets/img/company-logos/1.png";
import logo2 from "../assets/img/company-logos/2.png";
import logo3 from "../assets/img/company-logos/3.png";
import logo4 from "../assets/img/company-logos/4.png";
import logo5 from "../assets/img/company-logos/5.png";

function LogoCarouselSection() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [logo, setLogo] = useState([]);

  useEffect(() => {
    setLogo([
      {
        name: "logo1",
        image: logo1,
      },
      {
        name: "logo1",
        image: logo2,
      },
      {
        name: "logo1",
        image: logo3,
      },
      {
        name: "logo1",
        image: logo4,
      },
      {
        name: "logo1",
        image: logo5,
      },
    ]);
  }, [logo]);

  return (
    <div className="logo-carousel-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="logo-carousel-inner">
              <Carousel responsive={responsive}>
                {logo.map((item, index) => (
                  <div className="single-logo-item" key={index}>
                    <img src={item.image} alt={item.name} />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoCarouselSection;
