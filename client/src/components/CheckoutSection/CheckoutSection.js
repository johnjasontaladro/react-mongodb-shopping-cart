import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import CustomerDetails from "./CustomerDetails";
import isEmail from "is-email/lib";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function CheckoutSection() {
  const { cart, setCart } = useContext(AppContext);
  const { setTnx } = useContext(AppContext);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const shipping = 0;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [remarks, setRemarks] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    let _subtotal = 0;
    let _total = 0;
    cart.forEach((product) => {
      _subtotal += product.price * product.quantity;
    });

    _total = _subtotal + shipping;

    setSubtotal(_subtotal);
    setTotal(_total);
  }, [cart]);

  const handlePlaceOrder = () => {
    console.log("handle place order");
    const isValid = isEmail(email);
    console.log("email is valid: ", isValid);

    let _errorMsg = [];

    if (name.trim() === "") {
      toast.error("Name is required.");
      _errorMsg.push("Name is required.");
    }

    if (email.trim() === "") {
      toast.error("Email is required.");
      _errorMsg.push("Email is required.");
    } else if (!isEmail(email)) {
      toast.error("Email is invalid.");
      _errorMsg.push("Email is invalid.");
    }

    if (address.trim() === "") {
      toast.error("Address is invalid.");
      _errorMsg.push("Address is required.");
    }

    if (phone.trim() === "") {
      toast.error("Phone is invalid.");
      _errorMsg.push("Phone is required.");
    }

    setErrorMsg(_errorMsg);
    if (_errorMsg.length) {
      return;
    }

    const orderMetaData = [];
    cart.forEach((product) => {
      orderMetaData.push({
        productName: product.name,
        productPrice: product.price,
        quantity: parseInt(product.quantity, 10),
      });
    });

    const orderData = {
      name,
      email,
      address,
      phone,
      remarks,
      subtotal,
      shipping,
      total,
      orderMetaData,
    };

    addOrder(orderData);
  };

  const addOrder = async (orderData) => {
    const res = await fetch("http://localhost:1337/api/addOrder", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(orderData),
    });

    const data = await res.json();
    console.log("data: ", data);

    if (data.status === "ok") {
      // set transaction id
      setTnx(data.tnx);
      localStorage.setItem("tnx", data.tnx);

      // clear cart
      setCart([]);
      localStorage.removeItem("cart");

      // redirect to success page
      navigate("/success");
    }
  };

  return (
    <div className="checkout-section mt-150 mb-150">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <CustomerDetails
              onChangeName={(e) => setName(e.target.value)}
              onChangeEmail={(e) => setEmail(e.target.value)}
              onChangeAddress={(e) => setAddress(e.target.value)}
              onChangePhone={(e) => setPhone(e.target.value)}
              onChangeRemarks={(e) => setRemarks(e.target.value)}
              errorMsg={errorMsg}
            />
          </div>

          <div className="col-lg-4">
            <div className="order-details-wrap">
              <table className="order-details">
                <thead>
                  <tr>
                    <th>Your order Details</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody className="order-details-body">
                  <tr>
                    <td>Product</td>
                    <td>Total</td>
                  </tr>
                  {cart.map((product, key) => (
                    <tr key={key}>
                      <td>{product.name}</td>
                      <td>${product.price * product.quantity}</td>
                    </tr>
                  ))}
                </tbody>
                <tbody className="checkout-details">
                  <tr>
                    <td>Subtotal</td>
                    <td>${subtotal}</td>
                  </tr>
                  <tr>
                    <td>Shipping</td>
                    <td>${shipping}</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>${total}</td>
                  </tr>
                </tbody>
              </table>
              <button className="cart-btn mt-4" onClick={handlePlaceOrder}>
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
}

export default CheckoutSection;
