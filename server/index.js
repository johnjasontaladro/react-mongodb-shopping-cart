require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const Order = require("./models/order.modal");
const OrderMetaData = require("./models/orderMetaData.modal");
const path = require("path");
const createSlug = require("./helpers/helpers");

app.use(cors());
app.use(express.json());
app.use("/static", express.static(path.join(__dirname, "uploads")));

try {
  mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
} catch (error) {
  console.log(error);
}

app.get("/api/getFeaturedProducts", async (req, res) => {
  console.log("get request");

  try {
    const featuredProducts = await Product.find({ isFeatured: true });
    res.status(200).json({ status: "ok", featuredProducts: featuredProducts });
  } catch (error) {
    res.status(505).json({ status: "error" });
  }
});

app.get("/api/getAllProducts", async (req, res) => {
  console.log("get request");

  try {
    const allProducts = await Product.find();
    res.status(200).json({ status: "ok", allProducts: allProducts });
  } catch (error) {
    res.status(505).json({ status: "error" });
  }
});

app.post("/api/getProductBySlug", async (req, res) => {
  console.log("get request");
  console.log("slug: ", req.body.slug);

  try {
    const product = await Product.findOne({ slug: req.body.slug });
    res.status(200).json({ status: "ok", product: product });
  } catch (error) {
    res.status(505).json({ status: "error" });
  }
});

app.post("/api/addProduct", async (req, res) => {
  console.log("addProduct POST request");
  console.log(req.body);

  try {
    const product = await Product.create({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
      image: req.body.image,
      isFeatured: req.body.isFeatured,
      slug: createSlug(req.body.name),
    });

    console.log("product inserted: ", product);

    res.status(200).json({ status: "ok" });
  } catch (error) {
    res.status(505).json({ status: "error" });
  }
});

app.post("/api/addOrder", async (req, res) => {
  console.log("addOrder POST request");
  console.log(req.body);

  try {
    // insert order
    const order = await Order.create({
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
      phone: req.body.phone,
      remarks: req.body.remarks,
      subtotal: req.body.subtotal,
      shipping: req.body.shipping,
      total: req.body.total,
    });

    console.log("order inserted: ", order);

    // check order inserted successfully
    if (order) {
      console.log("order id is : ", order._id.toString());

      for (let metadata of req.body.orderMetaData) {
        // insert order metadata
        const orderMetaData = await OrderMetaData.create({
          orderId: order._id.toString(),
          productName: metadata.productName,
          productPrice: metadata.productPrice,
          quantity: metadata.quantity,
        });

        console.log("order metadata inserted: ", orderMetaData);
      }
    }

    res.status(200).json({ status: "ok", tnx: "TNX_" + order._id.toString() });
  } catch (error) {
    res.status(505).json({ status: "error" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server listens on port ${process.env.PORT}`);
});
