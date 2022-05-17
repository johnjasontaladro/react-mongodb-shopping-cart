import { useLayoutEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/img/logo.png";

function Header() {
  const handleSearch = (event) => {
    event.preventDefault();
    const searchArea = document.querySelector(".search-area");
    searchArea.classList.add("search-active");
  };

  useLayoutEffect(() => {
    const headerElement = document.querySelector(".top-header-area");
    headerElement.style.position = "absolute";
    headerElement.style.top = 0;

    window.addEventListener("scroll", function () {
      if (window.scrollY === 0) {
        //user is at the top of the page; no need to show the back to top button
        headerElement.style.position = "absolute";
        headerElement.style.backgroundColor = "transparent";
      } else {
        headerElement.style.position = "sticky";
        headerElement.style.backgroundColor = "#051922";
      }
    });
  }, []);

  return (
    <div className="top-header-area" id="sticker">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="main-menu-wrap">
              <div className="site-logo">
                <Link to="/">
                  <img src={logo} alt="Fruitkha" />
                </Link>
              </div>

              <nav className="main-menu">
                <ul>
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        "nav-link" + (isActive ? " activated" : "")
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/shop"
                      className={({ isActive }) =>
                        "nav-link" + (isActive ? " activated" : "")
                      }
                    >
                      Shop
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about-us"
                      className={({ isActive }) =>
                        "nav-link" + (isActive ? " activated" : "")
                      }
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact-us"
                      className={({ isActive }) =>
                        "nav-link" + (isActive ? " activated" : "")
                      }
                    >
                      Contact Us
                    </NavLink>
                  </li>
                  <li>
                    <div className="header-icons">
                      <NavLink to="/cart" className="shopping-cart">
                        <i className="fas fa-shopping-cart"></i>
                      </NavLink>
                      <a
                        className="mobile-hide search-bar-icon"
                        href="/"
                        onClick={handleSearch}
                      >
                        <i className="fas fa-search"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
              <a className="mobile-show search-bar-icon" href="/#">
                <i className="fas fa-search"></i>
              </a>
              <div className="mobile-menu"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
