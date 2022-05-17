import { useCallback, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import Cart from "../../helpers/Cart";
import ModalConfirm from "../ModalConfirm";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
import EmptyCart from "./EmptyCart";

function CartSection() {
  const { cart, setCart } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);
  const [updateProduct, setUpdateProduct] = useState(null);
  const [pageUpdate, setPageUpdate] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const shipping = 0;

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmModal = () => {
    setPageUpdate(true);

    setUpdateProduct({ ...updateProduct, action: "remove" });
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleRemoveItem = (productId) => {
    setPageUpdate(true);

    setUpdateProduct({
      productId,
      newValue: null,
      action: "remove",
    });
  };

  const removeItem = useCallback(
    (updatedProduct) => {
      const { productId } = updatedProduct;
      const newCart = Cart.deleteItem(cart, productId);

      setCart(newCart);
      setPageUpdate(false);
    },
    [cart, setCart]
  );

  const handleOnChangeQuantity = (product, event) => {
    const newValue = event.currentTarget.value;
    const productId = product._id;

    if (newValue < 1) {
      setShowModal(true);
      event.currentTarget.value = 1;
      return;
    }

    setPageUpdate(true);

    setUpdateProduct({
      productId,
      newValue,
      action: "update",
    });
  };

  const changeQuantity = useCallback(
    (updatedProduct) => {
      const { productId, newValue } = updatedProduct;

      const newCart = Cart.updateItem(
        Object.assign([], cart),
        productId,
        newValue
      );

      setCart(newCart);
      setPageUpdate(false);
    },
    [cart, setCart]
  );

  const computePayment = useCallback(() => {
    // compute subtotal
    let _subtotal = 0;

    cart.forEach((product) => {
      _subtotal += product.price * parseInt(product.quantity, 10);
    });

    setSubtotal(_subtotal);

    // compute total
    let _total = 0;
    _total = shipping + _subtotal;

    setTotal(_total);
  }, [cart]);

  useEffect(() => {
    if (pageUpdate) {
      const updatedProduct = Object.assign({}, updateProduct);
      console.log("updateProduct is set");
      switch (updatedProduct.action) {
        case "remove":
          removeItem(updatedProduct);
          break;
        case "update":
          changeQuantity(updatedProduct);
          break;
        default:
          break;
      }
    }
  }, [pageUpdate, updateProduct, removeItem, changeQuantity]);

  useEffect(() => {
    computePayment();
  }, [computePayment]);

  return (
    <div className="cart-section mt-150 mb-150">
      <div className="container">
        {!(cart && cart.length) ? (
          <EmptyCart />
        ) : (
          <>
            <div className="row">
              <div className="col-lg-8 col-md-12 mb-4">
                <Link to="/shop" className="boxed-btn">
                  <i className="fa fa-angle-double-left"></i> Back to Shop
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <CartList
                  cart={cart}
                  onClickRemoveItem={handleRemoveItem}
                  onChangeQuantity={handleOnChangeQuantity}
                />
              </div>

              <div className="col-lg-4">
                <CartTotal
                  subtotal={subtotal}
                  shipping={shipping}
                  total={total}
                />
              </div>
            </div>
          </>
        )}
      </div>
      <ModalConfirm
        onCloseModal={handleCloseModal}
        onClickConfirm={handleConfirmModal}
        onShowModal={handleShowModal}
        showModal={showModal}
      />
    </div>
  );
}

export default CartSection;
