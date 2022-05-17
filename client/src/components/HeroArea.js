import { Link } from "react-router-dom";

function HeroArea() {
  return (
    <div className="hero-area hero-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 offset-lg-2 text-center">
            <div className="hero-text">
              <div className="hero-text-tablecell">
                <p className="subtitle">Fresh & Organic</p>
                <h1>Delicious Seasonal Fruits</h1>
                <div className="hero-btns">
                  <Link to="/shop" className="boxed-btn">
                    Fruit Collection
                  </Link>
                  <Link to="/contact-us" className="bordered-btn">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroArea;
