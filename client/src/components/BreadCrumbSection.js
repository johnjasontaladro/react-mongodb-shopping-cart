function BreadCrumbSection({ heading, tagline }) {
  return (
    <div className="breadcrumb-section breadcrumb-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <div className="breadcrumb-text">
              <p>{tagline}</p>
              <h1>{heading}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreadCrumbSection;
