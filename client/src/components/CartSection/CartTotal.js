import { Link } from "react-router-dom";

function CartTotal(props) {
  return (
    <div className="total-section">
      <table className="total-table">
        <thead className="total-table-head">
          <tr className="table-total-row">
            <th>Total</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr className="total-data">
            <td>
              <strong>Subtotal: </strong>
            </td>
            <td>${props.subtotal}</td>
          </tr>
          <tr className="total-data">
            <td>
              <strong>Shipping: </strong>
            </td>
            <td>${props.shipping}</td>
          </tr>
          <tr className="total-data">
            <td>
              <strong>Total: </strong>
            </td>
            <td>${props.total}</td>
          </tr>
        </tbody>
      </table>
      <div className="cart-buttons clearfix">
        <Link to="/checkout" className="boxed-btn float-right mr-0">
          Check Out
        </Link>
      </div>
    </div>
  );
}

export default CartTotal;
