const mongoose = require("mongoose");

const SchemeTypes = mongoose.Schema.Types;
const orderSchema = new mongoose.Schema(
  {
    name: { type: SchemeTypes.String, required: true },
    email: { type: SchemeTypes.String, required: true },
    address: { type: SchemeTypes.String, required: true },
    phone: { type: SchemeTypes.String, required: true },
    remarks: { type: SchemeTypes.String },
    subtotal: { type: SchemeTypes.Number, required: true },
    shipping: { type: SchemeTypes.Number },
    total: { type: SchemeTypes.Number, required: true },
  },
  {
    collection: "order-data",
  }
);

module.exports = mongoose.model("OrderData", orderSchema);
