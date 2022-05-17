import { Link } from "react-router-dom";

function SuccessOrderSection(props) {
  return (
    <div className="full-height-section error-section mb-100 mt-100">
      <div className="full-height-tablecell">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="error-text">
                <i className="fas fa-check-circle"></i>
                <h1>You placed your order successfully!</h1>
                <p>
                  Your transaction id is <strong>{props.tnx}</strong>
                </p>
                <Link to="/" className="boxed-btn">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessOrderSection;
