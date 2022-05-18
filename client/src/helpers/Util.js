const Util = {
  generateProductImage(productImage) {
    return (
      process.env.REACT_APP_SERVER_URL +
      productImage.replace("uploads", "static")
    );
  },
};

export default Util;
