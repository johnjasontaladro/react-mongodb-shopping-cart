const mongoose = require("mongoose");

const SchemeTypes = mongoose.Schema.Types;
const orderMetaDataSchema = new mongoose.Schema(
  {
    orderId: { type: SchemeTypes.String, required: true },
    productName: { type: SchemeTypes.String, required: true },
    productPrice: { type: SchemeTypes.Number, required: true },
    quantity: { type: SchemeTypes.Number, required: true },
  },
  {
    collection: "order-metadata",
  }
);

module.exports = mongoose.model("OrderMetaData", orderMetaDataSchema);
