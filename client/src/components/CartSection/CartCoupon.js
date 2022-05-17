function CartCoupon() {
  return (
    <div className="coupon-section">
      <h3>Apply Coupon</h3>
      <div className="coupon-form-wrap">
        <form action="index.html">
          <p>
            <input type="text" placeholder="Coupon" />
          </p>
          <p>
            <input type="submit" value="Apply" />
          </p>
        </form>
      </div>
    </div>
  );
}

export default CartCoupon;
