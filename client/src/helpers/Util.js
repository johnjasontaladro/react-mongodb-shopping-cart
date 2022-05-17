const Util = {
  generateProductImage(productImage) {
    return "http://localhost:1337" + productImage.replace("uploads", "static");
  },
};

export default Util;
