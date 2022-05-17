const mongoose = require("mongoose");

const SchemeTypes = mongoose.Schema.Types;
const productSchema = new mongoose.Schema(
  {
    name: { type: SchemeTypes.String, required: true, unique: true },
    price: { type: SchemeTypes.Number, require: true },
    description: { type: SchemeTypes.String, required: true },
    category: { type: SchemeTypes.Array },
    image: { type: SchemeTypes.String, required: true },
    isFeatured: { type: SchemeTypes.Boolean },
    slug: { type: SchemeTypes.String, required: true, unique: true },
  },
  {
    collection: "product-data",
  }
);

module.exports = mongoose.model("ProductData", productSchema);
