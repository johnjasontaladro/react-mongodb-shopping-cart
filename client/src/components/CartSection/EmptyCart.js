import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <>
      <p>Your cart is empty.</p>
      <Link to="/shop" className="boxed-btn">
        Go to Shop
      </Link>
    </>
  );
}

export default EmptyCart;
