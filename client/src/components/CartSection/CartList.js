import React from "react";

const CartList = (props) => (
  <div className="cart-table-wrap">
    <table className="cart-table">
      <thead className="cart-table-head">
        <tr className="table-head-row">
          <th className="product-remove"></th>
          <th className="product-image">Product Image</th>
          <th className="product-name">Name</th>
          <th className="product-price">Price</th>
          <th className="product-quantity">Quantity</th>
          <th className="product-total">Total</th>
        </tr>
      </thead>
      <tbody>
        {props.cart.map((product, key) => (
          <tr className="table-body-row" key={key}>
            <td className="product-remove">
              <button onClick={() => props.onClickRemoveItem(product._id)}>
                <i className="far fa-window-close"></i>
              </button>
            </td>
            <td className="product-image">
              <img src={product.image} alt={product.name} />
            </td>
            <td className="product-name">{product.name}</td>
            <td className="product-price">${product.price}</td>
            <td className="product-quantity">
              <input
                type="number"
                placeholder="0"
                min="0"
                defaultValue={product.quantity}
                onChange={(event) => props.onChangeQuantity(product, event)}
              />
            </td>
            <td className="product-total">
              {product.quantity * product.price}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default CartList;
