import { Accordion } from "react-bootstrap";

function CustomerDetails(props) {
  const errorMsg = () => {
    return props.errorMsg.map((err, key) => <li key={key}>{err}</li>);
  };

  return (
    <div className="checkout-accordion-wrap">
      {props.errorMsg && props.errorMsg.length ? (
        <div className="alert alert-danger" role="alert">
          <h4 className="alert-heading">Error!</h4>
          <p>Encountered error below:</p>
          <ul>{errorMsg()}</ul>
        </div>
      ) : (
        ""
      )}
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Billing Address</Accordion.Header>
          <Accordion.Body>
            <div className="billing-address-form">
              <form action="index.html">
                <p>
                  <input
                    type="text"
                    placeholder="Name"
                    onChange={props.onChangeName}
                  />
                </p>
                <p>
                  <input
                    type="email"
                    placeholder="Email"
                    onChange={props.onChangeEmail}
                  />
                </p>
                <p>
                  <input
                    type="text"
                    placeholder="Address"
                    onChange={props.onChangeAddress}
                  />
                </p>
                <p>
                  <input
                    type="tel"
                    placeholder="Phone"
                    onChange={props.onChangePhone}
                  />
                </p>
                <p>
                  <textarea
                    name="bill"
                    id="bill"
                    cols="30"
                    rows="10"
                    placeholder="Say Something"
                    onChange={props.onChangeRemarks}
                  ></textarea>
                </p>
              </form>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Shipping Address</Accordion.Header>
          <Accordion.Body>Your shipping address form is here.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Card Details</Accordion.Header>
          <Accordion.Body>Your card details goes here.</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default CustomerDetails;
