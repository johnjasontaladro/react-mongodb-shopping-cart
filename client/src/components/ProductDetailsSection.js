import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AppContext } from "../App";
import Cart from "../helpers/Cart";
import Util from "../helpers/Util";
import PageNotFoundSection from "./PageNotFoundSection";

function ProductDetailsSection() {
  let { slug } = useParams();
  let inputRef = useRef(null);
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const { cart, setCart } = useContext(AppContext);

  const getProductDetails = useCallback(async () => {
    const res = await fetch(process.env.REACT_APP_GET_PRODUCT_BY_SLUG_URL, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        slug,
      }),
    });

    const data = await res.json();

    if (data.status === "ok") {
      const responseProduct = data.product;
      responseProduct.image = Util.generateProductImage(responseProduct.image);

      setProduct(responseProduct);
    } else {
      toast.error("Error!");
    }
  }, [slug]);

  useEffect(() => {
    getProductDetails();
  }, [getProductDetails]);

  const handleOnClick = (product) => {
    const quantity = inputRef.current.value;
    if (!(!isNaN(quantity) && parseInt(quantity, 10) > 0)) {
      toast.error("Error! Quantity must be greater than zero.");
      return;
    }

    const selectedProduct = product;
    const itemInCart = Cart.itemInCart(cart, selectedProduct._id);

    if (itemInCart && itemInCart.length) {
      const newCart = Cart.updateItem(
        Object.assign([], cart),
        selectedProduct._id,
        itemInCart[0].quantity + parseInt(quantity, 10)
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
          quantity: parseInt(quantity, 10),
        },
      ]);

      localStorage.setItem(
        "cart",
        JSON.stringify([
          ...cart,
          {
            _id: selectedProduct._id,
            name: selectedProduct.name,
            image: selectedProduct.image,
            price: selectedProduct.price,
            quantity: parseInt(quantity, 10),
          },
        ])
      );
    }

    navigate("/cart");
  };

  return (
    <>
      {!product ? (
        <PageNotFoundSection />
      ) : (
        <div className="single-product mt-150 mb-150">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="single-product-img">
                  <img src={product.image} alt={product.name} />
                </div>
              </div>
              <div className="col-md-7">
                <div className="single-product-content">
                  <h3>{product.name}</h3>
                  <p className="single-product-pricing">
                    <span>Per Kg</span> ${product.price}
                  </p>
                  <p>{product.description}</p>
                  <div className="single-product-form">
                    <form action="index.html">
                      <input
                        type="number"
                        placeholder="0"
                        min="0"
                        defaultValue="1"
                        ref={inputRef}
                      />
                    </form>
                    <button
                      className="cart-btn"
                      onClick={() => handleOnClick(product)}
                    >
                      <i className="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                    <p>
                      <strong>Categories: </strong>
                      {product.category.join(", ")}
                    </p>
                  </div>
                  <h4>Share:</h4>
                  <ul className="product-share">
                    <li>
                      <a href="/#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer position="top-right" />
    </>
  );
}

export default ProductDetailsSection;
