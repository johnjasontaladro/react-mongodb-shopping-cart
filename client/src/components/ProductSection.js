import { useContext, useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import Cart from "../helpers/Cart";

function ProductSection() {
  const [allProducts, setAllProducts] = useState([]);
  const [productListFilter, setProductListFilter] = useState([]);
  const { cart, setCart } = useContext(AppContext);
  const navigate = useNavigate();

  async function getAllProducts() {
    const res = await fetch("http://localhost:1337/api/getAllProducts");

    const data = await res.json();

    if (data.status === "ok") {
      const resAllProducts = data.allProducts.map((product, index) => {
        product.image =
          "http://localhost:1337" + product.image.replace("uploads", "static");

        return product;
      });

      setAllProducts(resAllProducts);
      setProductListFilter(resAllProducts);
    } else {
      alert("Error!");
    }
  }

  const findAllCategory = (products) => {
    let category = [];

    products.forEach((product) => {
      product.category.forEach((cat) => {
        if (!category.includes(cat)) {
          category.push(cat);
        }
      });
    });

    return category;
  };

  const getAllCategory = useMemo(
    () => findAllCategory(allProducts),
    [allProducts]
  );

  useEffect(() => {
    getAllProducts();
  }, []);

  const onHandleClickCategory = (categoryName, event) => {
    Array.from(document.querySelectorAll(".category-name")).forEach((el) =>
      el.classList.remove("active")
    );
    event.target.classList.add("active");

    if (categoryName === "All") {
      setProductListFilter(allProducts);
      return;
    }

    const filteredProducts = allProducts.filter((product, index) => {
      return product.category.includes(categoryName);
    });

    setProductListFilter(filteredProducts);
  };

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

  return (
    <div className="product-section mt-150 mb-150">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="product-filters">
              <ul>
                <li
                  className="category-name active"
                  data-filter="*"
                  onClick={(e) => onHandleClickCategory("All", e)}
                >
                  All
                </li>
                {getAllCategory.map((category, key) => (
                  <li
                    className="category-name"
                    data-filter=".strawberry"
                    key={key}
                    onClick={(e) => onHandleClickCategory(category, e)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="row product-lists">
          {productListFilter.map((product, index) => (
            <div className="col-lg-4 col-md-6 text-center" key={index}>
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

export default ProductSection;
