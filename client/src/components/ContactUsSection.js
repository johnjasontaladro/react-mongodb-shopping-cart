function ContactUsSection() {
  return (
    <div className="contact-from-section mt-150 mb-150">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mb-5 mb-lg-0">
            <div className="form-title">
              <h2>Have you any question?</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Pariatur, ratione! Laboriosam est, assumenda. Perferendis, quo
                alias quaerat aliquid. Corporis ipsum minus voluptate? Dolore,
                esse natus!
              </p>
            </div>
            <div id="form_status"></div>
            <div className="contact-form"></div>
          </div>
          <div className="col-lg-4">
            <div className="contact-form-wrap">
              <div className="contact-form-box">
                <h4>
                  <i className="fas fa-map"></i> Shop Address
                </h4>
                <p>
                  34/8, East Hukupara <br /> Gifirtok, Sadan. <br /> Country
                  Name
                </p>
              </div>
              <div className="contact-form-box">
                <h4>
                  <i className="far fa-clock"></i> Shop Hours
                </h4>
                <p>
                  MON - FRIDAY: 8 to 9 PM <br /> SAT - SUN: 10 to 8 PM{" "}
                </p>
              </div>
              <div className="contact-form-box">
                <h4>
                  <i className="fas fa-address-book"></i> Contact
                </h4>
                <p>
                  Phone: +00 111 222 3333 <br /> Email: support@fruitkha.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsSection;
