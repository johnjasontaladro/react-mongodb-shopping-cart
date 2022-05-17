class Cart {
  addItem() {}

  static updateItem(cartArr, productId, qty) {
    const newCartArr = Object.assign([], cartArr);
    newCartArr.map((item, index) => {
      if (item._id === productId) {
        item.quantity = qty;
      }
      return true;
    });

    //set local storage
    localStorage.setItem("cart", JSON.stringify(cartArr));

    return cartArr;
  }

  static itemInCart(cartArr, productId) {
    const newCartArr = Object.assign([], cartArr);
    const inCart = newCartArr.filter((item) => {
      return item._id === productId;
    });

    return inCart;
  }

  static deleteItem(cartArr, productId) {
    const newCartArr = Object.assign([], cartArr);
    const newCart = newCartArr.filter((item, index) => {
      return item._id !== productId;
    });

    console.log("newCart: ", newCart);

    localStorage.setItem("cart", JSON.stringify(newCart));

    return newCart;
  }
}

export default Cart;
