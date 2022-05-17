import "./assets/css/all.min.css";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/animate.css";
import "./assets/css/main.css";
import "./assets/css/responsive.css";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";

export const AppContext = createContext(null);

function App() {
  const cartLocalStorage = localStorage.getItem("cart") || "[]";
  const tnxLocalStorage = localStorage.getItem("tnx") || "";
  const [cart, setCart] = useState(JSON.parse(cartLocalStorage));
  const [tnx, setTnx] = useState(tnxLocalStorage);

  return (
    <AppContext.Provider value={{ cart, setCart, tnx, setTnx }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about-us" exact element={<About />} />
          <Route path="/contact-us" exact element={<Contact />} />
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/shop" exact element={<Shop />} />
          <Route path="/product/:slug" exact element={<Product />} />
          <Route path="/checkout" exact element={<Checkout />} />
          <Route path="/success" exact element={<Success />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
