import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import Cart from "../helpers/Cart";
import Util from "../helpers/Util";

function FeaturedProductSection() {
  const [productList, setProductList] = useState([]);
  const { cart, setCart } = useContext(AppContext);
  const navigate = useNavigate();

  async function getFeaturedProducts() {
    const res = await fetch(process.env.REACT_APP_GET_FEATURED_PRODUCT_URL);

    const data = await res.json();

    if (data.status === "ok") {
      const featuredProducts = data.featuredProducts.map((product, index) => {
        product.image = Util.generateProductImage(product.image);

        return product;
      });
      setProductList(featuredProducts);
    } else {
      alert("Error!");
    }
  }

  const handleOnClick = (selectedProduct) => {
    const itemInCart = Cart.itemInCart(cart, selectedProduct._id);

    if (itemInCart && itemInCart.length) {
      const newCart = Cart.updateItem(
        Object.assign([], cart),
        selectedProduct._id,
        itemInCart[0].quantity + 1
      );

      setCart(newCart);
    } else {
      setCart([
        ...cart,
        {
          _id: selectedProduct._id,
          name: selectedProduct.name,
          image: selectedProduct.image,
          price: selectedProduct.price,
          quantity: 1,
        },
      ]);
      console.log("cart: ", cart);

      localStorage.setItem(
        "cart",
        JSON.stringify([
          ...cart,
          {
            _id: selectedProduct._id,
            name: selectedProduct.name,
            image: selectedProduct.image,
            price: selectedProduct.price,
            quantity: 1,
          },
        ])
      );
    }

    navigate("/cart");
  };

  useEffect(() => {
    getFeaturedProducts();
  }, []);

  return (
    <div className="product-section mt-150 mb-150">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <div className="section-title">
              <h3>
                <span className="orange-text">Our</span> Products
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquid, fuga quas itaque eveniet beatae optio.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {productList.map((product, index) => (
            <div
              className={
                `col-lg-4 col-md-6 text-center ` +
                ((index + 1) % 3 === 0 ? `offset-md-3 offset-lg-0` : ``)
              }
              key={index}
            >
              <div className="single-product-item">
                <div className="product-image">
                  <Link to={"/product/" + product.slug}>
                    <img src={product.image} alt={product.name} />
                  </Link>
                </div>
                <h3>{product.name}</h3>
                <p className="product-price">
                  <span>Per Kg</span> {product.price}${" "}
                </p>
                <button
                  className="cart-btn"
                  onClick={() => handleOnClick(product)}
                >
                  <i className="fas fa-shopping-cart"></i> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProductSection;
